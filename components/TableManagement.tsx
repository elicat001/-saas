
import React from 'react';
import { INITIAL_TABLES, MOCK_ORDERS } from '../constants';
import { Search, Plus, Settings, RotateCw, Maximize, MoreHorizontal, ChevronDown } from 'lucide-react';

const TableManagement: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-sm shadow-sm flex items-center justify-between">
         <div className="flex items-center gap-2 text-lg font-bold text-slate-800">
            桌台管理 <Maximize size={16} className="text-slate-400" />
         </div>
         
         <div className="flex items-center gap-3">
            <div className="relative">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input type="text" placeholder="搜索" className="pl-9 pr-4 py-1.5 border border-slate-200 rounded text-sm w-64 focus:outline-none focus:border-emerald-500" />
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded text-sm font-medium">添加桌台</button>
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded text-sm font-medium hover:bg-slate-50">批量生成桌码</button>
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded text-sm font-medium hover:bg-slate-50">拖拽排序</button>
            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded text-sm font-medium hover:bg-slate-50">设置</button>
            <div className="flex items-center text-blue-500 text-sm font-medium cursor-pointer">
               <span className="mr-1">⬆</span> 收起
            </div>
         </div>
      </div>

      <div className="bg-white p-4 rounded-sm shadow-sm min-h-[600px]">
         <div className="flex items-center gap-2 mb-6">
            <button className="px-4 py-1 bg-white border border-slate-200 shadow-sm rounded text-sm font-medium text-slate-800">全部</button>
         </div>

         {/* Legend */}
         <div className="flex gap-4 text-sm mb-6">
            <div className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded">全部(2)</div>
            <div className="flex items-center gap-2 text-slate-600">
               <span className="w-3 h-3 rounded-sm bg-emerald-500"></span> 空闲中(2)
            </div>
            <div className="flex items-center gap-2 text-slate-600">
               <span className="w-3 h-3 rounded-sm bg-blue-600"></span> 已扫码未下单(0)
            </div>
            <div className="flex items-center gap-2 text-slate-600">
               <span className="w-3 h-3 rounded-sm bg-red-500"></span> 未结账(0)
            </div>
            <div className="flex items-center gap-2 text-slate-600">
               <span className="w-3 h-3 rounded-sm bg-amber-500"></span> 已结账(0)
            </div>
            <button className="bg-emerald-500 text-white px-3 py-1 rounded text-xs ml-auto flex items-center gap-1">更多 <ChevronDown size={12} /></button>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-5 gap-4">
            {[1, 2].map(num => (
               <div key={num} className="border border-emerald-500 rounded-lg overflow-hidden bg-white shadow-sm group">
                  <div className="bg-emerald-500 h-8 flex items-center justify-between px-3 text-white text-sm font-medium">
                     <span>{num}</span>
                     <MoreHorizontal size={16} className="cursor-pointer opacity-80 hover:opacity-100" />
                  </div>
                  <div className="p-6 flex flex-col items-center justify-center">
                     <button className="bg-emerald-500 text-white w-full py-2 rounded text-sm hover:bg-emerald-600 transition-colors">
                        开始点餐
                     </button>
                     <div className="mt-3 flex items-center gap-1 text-slate-400 text-xs">
                        <span className="w-3 h-3 flex items-center justify-center rounded-full border border-slate-300">👤</span> 0
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default TableManagement;
