
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EmployeeList: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm min-h-[80vh]">
       {/* Header Tabs */}
       <div className="flex border-b border-slate-200 px-6 pt-4 bg-slate-50">
          <button className="px-6 py-3 text-sm font-medium border-t-2 border-l border-r border-t-emerald-500 bg-white text-slate-800 border-l-slate-200 border-r-slate-200 rounded-t-md" style={{marginBottom: -1}}>
             员工管理
          </button>
          <button className="px-6 py-3 text-sm font-medium text-slate-500 hover:text-emerald-500">
             出品部门
          </button>
       </div>

       <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
             <button className="px-4 py-2 bg-emerald-500 text-white rounded text-sm font-medium hover:bg-emerald-600">
                添加员工
             </button>

             <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">所属门店</span>
                <select className="border border-slate-200 rounded px-3 py-2 text-sm w-40 text-slate-400">
                   <option>请选择</option>
                </select>
             </div>

             <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">搜索员工</span>
                <input type="text" placeholder="名称/账号" className="border border-slate-200 rounded px-3 py-2 text-sm w-48 focus:outline-none focus:border-emerald-500" />
             </div>

             <button className="px-6 py-2 bg-emerald-500 text-white rounded text-sm font-medium hover:bg-emerald-600">
                查询
             </button>

             <button className="px-6 py-2 bg-white border border-slate-200 text-slate-600 rounded text-sm font-medium hover:bg-slate-50">
                日志记录
             </button>
          </div>

          <table className="w-full text-left text-sm">
             <thead className="bg-white text-slate-500 border-b border-slate-100">
                <tr>
                   <th className="p-4 text-center">名称</th>
                   <th className="p-4 text-center">登录账号</th>
                   <th className="p-4 text-center">账号来源</th>
                   <th className="p-4 text-center">门店权限</th>
                   <th className="p-4 text-center">页面权限</th>
                   <th className="p-4 text-center">操作</th>
                </tr>
             </thead>
             <tbody className="divide-y divide-slate-100">
                <tr>
                   <td colSpan={6} className="p-20 text-center text-slate-400">暂无数据</td>
                </tr>
             </tbody>
          </table>

          <div className="flex items-center justify-center gap-4 mt-8 text-sm text-slate-500">
             <span>共0条</span>
             <select className="border border-slate-200 rounded px-2 py-1"><option>10条/页</option></select>
             <div className="flex gap-1">
                <button className="p-1 border border-slate-200 rounded bg-slate-50 text-slate-300"><ChevronLeft size={16}/></button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
                <button className="p-1 border border-slate-200 rounded bg-slate-50 text-slate-300"><ChevronRight size={16}/></button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default EmployeeList;
