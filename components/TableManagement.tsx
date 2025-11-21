
import React, { useState } from 'react';
import { INITIAL_TABLES, MOCK_RESERVATIONS } from '../constants';
import { Table, TableStatus, Reservation, ReservationStatus } from '../types';
import { Search, Plus, Maximize, MoreHorizontal, ChevronDown, Calendar, Clock, User, Phone, Users, X, CheckCircle, AlertCircle } from 'lucide-react';

const TableManagement: React.FC = () => {
  const [viewMode, setViewMode] = useState<'map' | 'list' | 'reservations'>('map');
  const [reservations, setReservations] = useState<Reservation[]>(MOCK_RESERVATIONS);
  const [isResModalOpen, setIsResModalOpen] = useState(false);
  
  // New Reservation Form State
  const [newRes, setNewRes] = useState<Partial<Reservation>>({
    customerName: '',
    customerPhone: '',
    guests: 2,
    tableId: '',
    reservationTime: '',
    notes: ''
  });

  const handleAddReservation = () => {
    if (!newRes.customerName || !newRes.reservationTime || !newRes.tableId) return;
    
    const res: Reservation = {
      id: `res-${Date.now()}`,
      tableId: newRes.tableId!,
      customerName: newRes.customerName!,
      customerPhone: newRes.customerPhone || '',
      reservationTime: newRes.reservationTime!,
      guests: newRes.guests || 2,
      status: ReservationStatus.CONFIRMED,
      notes: newRes.notes
    };
    
    setReservations([...reservations, res]);
    setIsResModalOpen(false);
    setNewRes({ customerName: '', customerPhone: '', guests: 2, tableId: '', reservationTime: '', notes: '' });
  };

  const getStatusColor = (status: TableStatus) => {
    switch (status) {
      case TableStatus.AVAILABLE: return 'border-slate-200 hover:border-emerald-400';
      case TableStatus.SCANNED: return 'border-blue-400 bg-blue-50';
      case TableStatus.UNPAID: return 'border-red-400 bg-red-50';
      case TableStatus.PAID: return 'border-amber-400 bg-amber-50';
      default: return 'border-slate-200';
    }
  };

  const getStatusBadge = (status: TableStatus) => {
    switch (status) {
      case TableStatus.AVAILABLE: return 'bg-emerald-500';
      case TableStatus.SCANNED: return 'bg-blue-600';
      case TableStatus.UNPAID: return 'bg-red-500';
      case TableStatus.PAID: return 'bg-amber-500';
    }
  };

  const getResStatusBadge = (status: ReservationStatus) => {
    switch (status) {
      case ReservationStatus.CONFIRMED: return <span className="px-2 py-0.5 rounded text-xs bg-emerald-100 text-emerald-600">已确认</span>;
      case ReservationStatus.PENDING: return <span className="px-2 py-0.5 rounded text-xs bg-amber-100 text-amber-600">待确认</span>;
      case ReservationStatus.ARRIVED: return <span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-600">已到店</span>;
      case ReservationStatus.CANCELLED: return <span className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-500">已取消</span>;
    }
  };

  return (
    <div className="space-y-4 relative">
      {/* Header */}
      <div className="bg-white p-4 rounded-sm shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
         <div className="flex items-center gap-4 text-lg font-bold text-slate-800">
            桌台管理 <Maximize size={16} className="text-slate-400 hidden md:block" />
            <div className="flex bg-slate-100 rounded-lg p-1 text-sm font-medium">
               <button 
                  onClick={() => setViewMode('map')}
                  className={`px-4 py-1 rounded-md transition-all ${viewMode === 'map' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
               >
                 地图模式
               </button>
               <button 
                  onClick={() => setViewMode('reservations')}
                  className={`px-4 py-1 rounded-md transition-all ${viewMode === 'reservations' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
               >
                 预订管理
               </button>
            </div>
         </div>
         
         <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input type="text" placeholder={viewMode === 'reservations' ? "搜索预约人/手机号" : "搜索桌台"} className="pl-9 pr-4 py-1.5 border border-slate-200 rounded text-sm w-full md:w-64 focus:outline-none focus:border-emerald-500" />
            </div>
            {viewMode === 'reservations' ? (
               <button onClick={() => setIsResModalOpen(true)} className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded text-sm font-medium flex items-center gap-1">
                  <Plus size={16} /> 新增预订
               </button>
            ) : (
               <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded text-sm font-medium flex items-center gap-1">
                  <Plus size={16} /> 添加桌台
               </button>
            )}
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded text-sm font-medium hover:bg-slate-50">设置</button>
         </div>
      </div>

      {/* Content Area */}
      <div className="bg-white p-6 rounded-sm shadow-sm min-h-[600px]">
         
         {/* TABLE MAP VIEW */}
         {viewMode === 'map' && (
            <>
              <div className="flex items-center gap-2 mb-6">
                 <button className="px-4 py-1 bg-white border border-slate-200 shadow-sm rounded text-sm font-medium text-slate-800">全部区域</button>
                 <button className="px-4 py-1 text-slate-500 text-sm hover:bg-slate-50 rounded">大厅</button>
                 <button className="px-4 py-1 text-slate-500 text-sm hover:bg-slate-50 rounded">包厢</button>
                 <button className="px-4 py-1 text-slate-500 text-sm hover:bg-slate-50 rounded">露台</button>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 text-sm mb-8 border-b border-slate-100 pb-4">
                 <div className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded font-medium">全部({INITIAL_TABLES.length})</div>
                 <div className="flex items-center gap-2 text-slate-600"><span className="w-3 h-3 rounded-sm bg-emerald-500"></span> 空闲中</div>
                 <div className="flex items-center gap-2 text-slate-600"><span className="w-3 h-3 rounded-sm bg-blue-600"></span> 已扫码</div>
                 <div className="flex items-center gap-2 text-slate-600"><span className="w-3 h-3 rounded-sm bg-red-500"></span> 未结账</div>
                 <div className="flex items-center gap-2 text-slate-600"><span className="w-3 h-3 rounded-sm bg-amber-500"></span> 已结账</div>
                 <div className="flex items-center gap-2 text-slate-600 ml-4 border-l pl-4"><span className="w-3 h-3 rounded-full bg-purple-500"></span> 有预订</div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                 {INITIAL_TABLES.map(table => {
                    const hasReservation = reservations.some(r => r.tableId === table.id && r.status === ReservationStatus.CONFIRMED);
                    return (
                      <div key={table.id} className={`border-2 rounded-xl overflow-hidden bg-white shadow-sm group transition-all hover:shadow-md ${getStatusColor(table.status)}`}>
                         <div className={`h-9 flex items-center justify-between px-3 text-white text-sm font-medium ${getStatusBadge(table.status)}`}>
                            <span>{table.name}号桌</span>
                            <div className="flex gap-2">
                               {hasReservation && <Calendar size={14} className="text-white animate-pulse" />}
                               <MoreHorizontal size={16} className="cursor-pointer opacity-80 hover:opacity-100" />
                            </div>
                         </div>
                         <div className="p-4 flex flex-col items-center justify-center min-h-[100px]">
                            {table.status === TableStatus.AVAILABLE ? (
                               <div className="text-center w-full">
                                  <div className="text-xs text-slate-400 mb-3 flex items-center justify-center gap-1">
                                     <Users size={12} /> {table.capacity}人座
                                  </div>
                                  <button className="bg-emerald-50 text-emerald-600 border border-emerald-200 w-full py-1.5 rounded text-xs font-medium hover:bg-emerald-100 transition-colors">
                                     开台 / 点餐
                                  </button>
                                  {hasReservation && (
                                     <div className="mt-2 text-[10px] text-purple-600 bg-purple-50 px-2 py-1 rounded text-center">
                                        今日有预订
                                     </div>
                                  )}
                               </div>
                            ) : (
                               <div className="text-center w-full">
                                  <div className="text-lg font-bold text-slate-700 mb-1">¥ 0.00</div>
                                  <div className="text-xs text-slate-400 mb-3">00:24:15</div>
                                  <button className="bg-slate-50 text-slate-600 border border-slate-200 w-full py-1.5 rounded text-xs font-medium hover:bg-slate-100 transition-colors">
                                     查看订单
                                  </button>
                               </div>
                            )}
                         </div>
                      </div>
                    );
                 })}
              </div>
            </>
         )}

         {/* RESERVATION LIST VIEW */}
         {viewMode === 'reservations' && (
            <div className="animate-in fade-in duration-300">
              <table className="w-full text-left text-sm">
                 <thead className="bg-slate-50 text-slate-600">
                    <tr>
                       <th className="p-4 font-medium">预订时间</th>
                       <th className="p-4 font-medium">客户信息</th>
                       <th className="p-4 font-medium">人数</th>
                       <th className="p-4 font-medium">预订桌台</th>
                       <th className="p-4 font-medium">状态</th>
                       <th className="p-4 font-medium">备注</th>
                       <th className="p-4 font-medium text-right">操作</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    {reservations.map(res => (
                       <tr key={res.id} className="hover:bg-slate-50">
                          <td className="p-4">
                             <div className="flex items-center gap-2">
                                <Clock size={16} className="text-slate-400" />
                                <span className="font-medium text-slate-700">
                                   {new Date(res.reservationTime).toLocaleString('zh-CN', {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'})}
                                </span>
                             </div>
                          </td>
                          <td className="p-4">
                             <div>
                                <div className="font-medium text-slate-800">{res.customerName}</div>
                                <div className="text-xs text-slate-400">{res.customerPhone}</div>
                             </div>
                          </td>
                          <td className="p-4 text-slate-600">{res.guests}人</td>
                          <td className="p-4">
                             <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-medium">
                                {INITIAL_TABLES.find(t => t.id === res.tableId)?.name}号桌
                             </span>
                          </td>
                          <td className="p-4">
                             {getResStatusBadge(res.status)}
                          </td>
                          <td className="p-4 text-slate-500 text-xs truncate max-w-[150px]">{res.notes || '-'}</td>
                          <td className="p-4 text-right">
                             <div className="flex justify-end gap-3">
                                {res.status === ReservationStatus.PENDING && (
                                   <button className="text-emerald-500 hover:bg-emerald-50 px-2 py-1 rounded transition-colors">确认</button>
                                )}
                                <button className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 px-2 py-1 rounded transition-colors">编辑</button>
                                {res.status !== ReservationStatus.CANCELLED && (
                                   <button className="text-red-400 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-colors">取消</button>
                                )}
                             </div>
                          </td>
                       </tr>
                    ))}
                    {reservations.length === 0 && (
                       <tr><td colSpan={7} className="p-12 text-center text-slate-400">暂无预订记录</td></tr>
                    )}
                 </tbody>
              </table>
            </div>
         )}
      </div>

      {/* New Reservation Modal */}
      {isResModalOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in duration-200">
               <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-800">新增预订</h3>
                  <button onClick={() => setIsResModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={20}/></button>
               </div>
               
               <div className="p-6 space-y-4">
                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">客户姓名 <span className="text-red-500">*</span></label>
                     <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input 
                           type="text" 
                           className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded focus:outline-none focus:border-emerald-500"
                           placeholder="请输入姓名"
                           value={newRes.customerName}
                           onChange={e => setNewRes({...newRes, customerName: e.target.value})}
                        />
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">联系电话</label>
                     <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input 
                           type="text" 
                           className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded focus:outline-none focus:border-emerald-500"
                           placeholder="请输入手机号"
                           value={newRes.customerPhone}
                           onChange={e => setNewRes({...newRes, customerPhone: e.target.value})}
                        />
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">预订时间 <span className="text-red-500">*</span></label>
                        <input 
                           type="datetime-local" 
                           className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:border-emerald-500 text-sm text-slate-600"
                           value={newRes.reservationTime}
                           onChange={e => setNewRes({...newRes, reservationTime: e.target.value})}
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">人数</label>
                        <input 
                           type="number" 
                           className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:border-emerald-500"
                           value={newRes.guests}
                           onChange={e => setNewRes({...newRes, guests: parseInt(e.target.value)})}
                        />
                     </div>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">选择桌台 <span className="text-red-500">*</span></label>
                     <select 
                        className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:border-emerald-500 text-slate-600 bg-white"
                        value={newRes.tableId}
                        onChange={e => setNewRes({...newRes, tableId: e.target.value})}
                     >
                        <option value="">请选择桌台</option>
                        {INITIAL_TABLES.map(t => (
                           <option key={t.id} value={t.id}>{t.name}号桌 ({t.capacity}人)</option>
                        ))}
                     </select>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">备注信息</label>
                     <textarea 
                        className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:border-emerald-500 h-20 resize-none"
                        placeholder="如有特殊需求请备注"
                        value={newRes.notes}
                        onChange={e => setNewRes({...newRes, notes: e.target.value})}
                     ></textarea>
                  </div>
               </div>

               <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end gap-3">
                  <button 
                     onClick={() => setIsResModalOpen(false)}
                     className="px-4 py-2 border border-slate-200 rounded text-sm text-slate-600 hover:bg-slate-100 font-medium"
                  >
                     取消
                  </button>
                  <button 
                     onClick={handleAddReservation}
                     className="px-6 py-2 bg-emerald-500 text-white rounded text-sm hover:bg-emerald-600 font-medium shadow-sm"
                  >
                     确定预订
                  </button>
               </div>
            </div>
         </div>
      )}
    </div>
  );
};

export default TableManagement;
