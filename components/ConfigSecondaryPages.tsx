
import React, { useState, useMemo } from 'react';
import { Search, Plus, Copy, Edit, Trash2, Eye, Share2, FileText, Tag, Filter, CheckSquare, Square } from 'lucide-react';

const ConfigSecondaryPages: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Mock Data converted to State
  const [pagesList, setPagesList] = useState([
    { id: 1, title: '夏日冰饮大促', path: '/pages/custom/summer', pv: 1203, uv: 890, status: 'PUBLISHED', updateTime: '2025-06-15 14:30', category: '活动促销' },
    { id: 2, title: '会员日活动规则', path: '/pages/custom/member-rules', pv: 450, uv: 320, status: 'PUBLISHED', updateTime: '2025-05-20 09:12', category: '规则说明' },
    { id: 3, title: '品牌故事', path: '/pages/custom/story', pv: 89, uv: 76, status: 'DRAFT', updateTime: '2025-07-01 10:00', category: '品牌介绍' },
    { id: 4, title: '新店开业邀请函', path: '/pages/custom/invite', pv: 2100, uv: 1500, status: 'PUBLISHED', updateTime: '2025-04-10 11:20', category: '活动促销' },
    { id: 5, title: '招聘启事', path: '/pages/custom/jobs', pv: 30, uv: 12, status: 'DRAFT', updateTime: '2025-07-08 09:00', category: '其他' },
    { id: 6, title: '充值协议', path: '/pages/custom/agreement', pv: 500, uv: 480, status: 'PUBLISHED', updateTime: '2025-01-01 12:00', category: '规则说明' },
  ]);

  // Extract unique categories for the filter dropdown
  const categories = ['ALL', ...Array.from(new Set(pagesList.map(p => p.category)))];

  // Filter Logic
  const filteredPages = useMemo(() => {
    return pagesList.filter(page => {
      const statusMatch = activeTab === 'ALL' || page.status === activeTab;
      const categoryMatch = selectedCategory === 'ALL' || page.category === selectedCategory;
      const searchMatch = page.title.toLowerCase().includes(searchQuery.toLowerCase()) || page.path.toLowerCase().includes(searchQuery.toLowerCase());
      return statusMatch && categoryMatch && searchMatch;
    });
  }, [pagesList, activeTab, selectedCategory, searchQuery]);

  // Selection Logic
  const isAllSelected = filteredPages.length > 0 && selectedIds.length === filteredPages.length;
  const isIndeterminate = selectedIds.length > 0 && selectedIds.length < filteredPages.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredPages.map(p => p.id));
    }
  };

  const handleSelectOne = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(sid => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Bulk Actions
  const handleBulkAction = (action: 'PUBLISH' | 'DRAFT' | 'DELETE') => {
    if (action === 'DELETE') {
      if (window.confirm(`确定要删除选中的 ${selectedIds.length} 个页面吗？`)) {
        setPagesList(prev => prev.filter(p => !selectedIds.includes(p.id)));
        setSelectedIds([]);
      }
    } else if (action === 'PUBLISH') {
      setPagesList(prev => prev.map(p => selectedIds.includes(p.id) ? { ...p, status: 'PUBLISHED' } : p));
      setSelectedIds([]);
    } else if (action === 'DRAFT') {
      setPagesList(prev => prev.map(p => selectedIds.includes(p.id) ? { ...p, status: 'DRAFT' } : p));
      setSelectedIds([]);
    }
  };

  const getCategoryColor = (cat: string) => {
    switch(cat) {
        case '活动促销': return 'bg-orange-50 text-orange-600 border-orange-100';
        case '规则说明': return 'bg-blue-50 text-blue-600 border-blue-100';
        case '品牌介绍': return 'bg-purple-50 text-purple-600 border-purple-100';
        default: return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-sm shadow-sm min-h-[80vh] flex flex-col">
       {/* Header */}
       <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-1">二级页面</h2>
            <p className="text-xs text-slate-400">创建和管理小程序的自定义二级页面，并进行分类管理</p>
          </div>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-emerald-600 flex items-center gap-2 shadow-sm transition-all hover:shadow-md">
             <Plus size={16} /> 新建页面
          </button>
       </div>

       {/* Toolbar / Bulk Actions */}
       {selectedIds.length > 0 ? (
         <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 text-emerald-800 font-medium text-sm">
                  <CheckSquare size={18} className="text-emerald-600" />
                  已选择 {selectedIds.length} 项
               </div>
               <button onClick={() => setSelectedIds([])} className="text-emerald-600 text-sm hover:underline">
                  取消选择
               </button>
            </div>
            <div className="flex items-center gap-3">
               <button 
                 onClick={() => handleBulkAction('PUBLISH')}
                 className="bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-100 px-4 py-1.5 rounded text-sm font-medium transition-colors shadow-sm"
               >
                  批量发布
               </button>
               <button 
                 onClick={() => handleBulkAction('DRAFT')}
                 className="bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-100 px-4 py-1.5 rounded text-sm font-medium transition-colors shadow-sm"
               >
                  转为草稿
               </button>
               <button 
                 onClick={() => handleBulkAction('DELETE')}
                 className="bg-white border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 px-4 py-1.5 rounded text-sm font-medium transition-colors shadow-sm"
               >
                  批量删除
               </button>
            </div>
         </div>
       ) : (
         <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex gap-6 text-sm font-medium overflow-x-auto pb-2 lg:pb-0">
               <button 
                 onClick={() => setActiveTab('ALL')}
                 className={`pb-1 whitespace-nowrap transition-colors ${activeTab === 'ALL' ? 'text-emerald-600 border-b-2 border-emerald-500' : 'text-slate-500 hover:text-slate-700'}`}
               >
                 全部 ({pagesList.length})
               </button>
               <button 
                 onClick={() => setActiveTab('PUBLISHED')}
                 className={`pb-1 whitespace-nowrap transition-colors ${activeTab === 'PUBLISHED' ? 'text-emerald-600 border-b-2 border-emerald-500' : 'text-slate-500 hover:text-slate-700'}`}
               >
                 已发布 ({pagesList.filter(p => p.status === 'PUBLISHED').length})
               </button>
               <button 
                 onClick={() => setActiveTab('DRAFT')}
                 className={`pb-1 whitespace-nowrap transition-colors ${activeTab === 'DRAFT' ? 'text-emerald-600 border-b-2 border-emerald-500' : 'text-slate-500 hover:text-slate-700'}`}
               >
                 草稿箱 ({pagesList.filter(p => p.status === 'DRAFT').length})
               </button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
               {/* Category Filter */}
               <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <select 
                      className="pl-9 pr-8 py-1.5 border border-slate-200 rounded text-sm focus:outline-none focus:border-emerald-500 bg-white appearance-none cursor-pointer text-slate-600 min-w-[140px]"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                      <option value="ALL">所有分类</option>
                      {categories.filter(c => c !== 'ALL').map(c => (
                          <option key={c} value={c}>{c}</option>
                      ))}
                  </select>
               </div>

               {/* Search */}
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="搜索页面名称" 
                    className="pl-9 pr-4 py-1.5 border border-slate-200 rounded text-sm w-56 focus:outline-none focus:border-emerald-500 bg-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
            </div>
         </div>
       )}

       {/* Table */}
       <div className="flex-1 overflow-x-auto">
          <table className="w-full text-left text-sm">
             <thead className="bg-white text-slate-500 border-b border-slate-100">
                <tr>
                   <th className="p-6 font-medium w-16">
                      <div className="flex items-center">
                        <input 
                           type="checkbox" 
                           className="w-4 h-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                           checked={isAllSelected}
                           ref={input => { if (input) input.indeterminate = isIndeterminate; }}
                           onChange={handleSelectAll}
                        />
                      </div>
                   </th>
                   <th className="p-6 font-medium">#</th>
                   <th className="p-6 font-medium">页面名称</th>
                   <th className="p-6 font-medium">页面分类</th>
                   <th className="p-6 font-medium">页面路径</th>
                   <th className="p-6 font-medium">数据统计</th>
                   <th className="p-6 font-medium">最后更新</th>
                   <th className="p-6 font-medium">状态</th>
                   <th className="p-6 font-medium text-right">操作</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-slate-100">
                {filteredPages.map((page, index) => (
                   <tr key={page.id} className={`hover:bg-slate-50 group transition-colors ${selectedIds.includes(page.id) ? 'bg-emerald-50/30' : ''}`}>
                      <td className="p-6">
                         <input 
                           type="checkbox" 
                           className="w-4 h-4 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500 cursor-pointer"
                           checked={selectedIds.includes(page.id)}
                           onChange={() => handleSelectOne(page.id)}
                        />
                      </td>
                      <td className="p-6 text-slate-400">{index + 1}</td>
                      <td className="p-6">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-slate-400">
                               <FileText size={20} />
                            </div>
                            <div>
                               <div className="font-bold text-slate-800 mb-1">{page.title}</div>
                               <div className="flex gap-2">
                                  {page.status === 'PUBLISHED' && <span className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded">微页面</span>}
                               </div>
                            </div>
                         </div>
                      </td>
                      <td className="p-6">
                         <span className={`inline-flex items-center gap-1 px-2 py-1 rounded border text-xs font-medium ${getCategoryColor(page.category)}`}>
                            <Tag size={10} />
                            {page.category}
                         </span>
                      </td>
                      <td className="p-6">
                         <div className="flex items-center gap-2">
                            <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600 font-mono max-w-[180px] truncate" title={page.path}>{page.path}</code>
                            <button className="text-slate-400 hover:text-emerald-500" title="复制路径">
                               <Copy size={12} />
                            </button>
                         </div>
                      </td>
                      <td className="p-6">
                         <div className="text-xs text-slate-500">
                            <div>PV: <span className="font-medium text-slate-700">{page.pv}</span></div>
                            <div>UV: <span className="font-medium text-slate-700">{page.uv}</span></div>
                         </div>
                      </td>
                      <td className="p-6 text-slate-600 text-xs">
                         {page.updateTime}
                      </td>
                      <td className="p-6">
                         {page.status === 'PUBLISHED' ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100">
                               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 已发布
                            </span>
                         ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500 border border-slate-200">
                               <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> 草稿
                            </span>
                         )}
                      </td>
                      <td className="p-6 text-right">
                         <div className="flex justify-end items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-slate-500 hover:text-emerald-500 tooltip" title="预览">
                               <Eye size={18} />
                            </button>
                            <button className="text-slate-500 hover:text-emerald-500" title="推广">
                               <Share2 size={18} />
                            </button>
                            <button className="text-slate-500 hover:text-blue-500" title="编辑">
                               <Edit size={18} />
                            </button>
                            <div className="w-px h-4 bg-slate-200"></div>
                            <button 
                               className="text-slate-400 hover:text-red-500" 
                               title="删除"
                               onClick={() => {
                                   if(window.confirm('确认删除此页面?')) {
                                       setPagesList(p => p.filter(item => item.id !== page.id));
                                   }
                               }}
                            >
                               <Trash2 size={18} />
                            </button>
                         </div>
                      </td>
                   </tr>
                ))}
                {filteredPages.length === 0 && (
                   <tr>
                      <td colSpan={9} className="p-20 text-center">
                         <div className="flex flex-col items-center justify-center text-slate-400">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                               <FileText size={32} className="text-slate-300" />
                            </div>
                            <p>暂无相关页面</p>
                         </div>
                      </td>
                   </tr>
                )}
             </tbody>
          </table>
       </div>
    </div>
  );
};

export default ConfigSecondaryPages;
