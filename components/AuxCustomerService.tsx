
import React from 'react';
import { Info } from 'lucide-react';

const AuxCustomerService: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm min-h-[80vh] p-8">
       <h2 className="text-lg font-medium text-slate-800 mb-6">客服设置</h2>

       <div className="flex items-center mb-8">
          <span className="w-24 text-sm font-bold text-slate-700">客服类型</span>
          <div className="flex gap-6 text-sm text-slate-600">
             <label className="flex items-center gap-2 cursor-pointer">
                <div className="w-4 h-4 rounded-full border-4 border-emerald-500"></div> 小程序客服
             </label>
             <label className="flex items-center gap-2 cursor-pointer">
                <div className="w-4 h-4 rounded-full border border-slate-300"></div> 企业微信客服
             </label>
          </div>
       </div>

       <div className="bg-orange-50 border border-orange-100 text-orange-600 px-4 py-3 rounded text-sm mb-8 flex items-center gap-2">
          <Info size={16} />
          提示：绑定后的客服账号，可以登录<a href="#" className="text-blue-500 hover:underline">网页端客服</a>或<a href="#" className="text-blue-500 hover:underline">移动端小程序客服</a>进行客服沟通。
       </div>

       <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-emerald-500 text-white rounded text-sm font-medium hover:bg-emerald-600">添加客服</button>
          <span className="text-slate-400 text-sm">还可以添加100个</span>
       </div>
    </div>
  );
};

export default AuxCustomerService;
