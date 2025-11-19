
import React from 'react';

const AuxLogistics: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm min-h-[80vh]">
       <div className="flex border-b border-slate-200 px-6 pt-4 bg-slate-50">
          {['物流账号', '物流运单', '打印员', '发单设置'].map((tab, idx) => (
             <button 
               key={tab}
               className={`px-6 py-3 text-sm font-medium border-t-2 border-l border-r rounded-t-md transition-colors ${idx === 0 ? 'border-t-emerald-500 bg-white text-slate-800 border-l-slate-200 border-r-slate-200' : 'border-transparent bg-transparent text-slate-500 hover:text-emerald-500'}`}
               style={{ marginBottom: -1 }}
             >
               {tab}
             </button>
          ))}
       </div>

       <div className="p-8">
          <button className="px-6 py-2 bg-emerald-500 text-white rounded text-sm font-medium hover:bg-emerald-600">
             绑定物流账号
          </button>
       </div>
    </div>
  );
};

export default AuxLogistics;
