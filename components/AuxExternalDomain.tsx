
import React from 'react';
import { Info, PlusCircle } from 'lucide-react';

const AuxExternalDomain: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm min-h-[80vh] p-8">
       <h2 className="text-lg font-medium text-slate-800 mb-6">外部业务域名</h2>

       <div className="bg-orange-50 border border-orange-100 text-orange-600 px-4 py-3 rounded text-sm mb-8 flex items-start gap-2">
          <Info size={16} className="mt-0.5 shrink-0" />
          <div>
             <p className="mb-1">说明:如需配置外部业务域名实现小程序访问外部网页的目的，可根据如下步骤配置。</p>
          </div>
       </div>

       <div className="space-y-6 text-sm text-slate-700 mb-8">
          <p>1、请先<a href="#" className="text-blue-500 hover:underline">下载校验文件</a>放到要设置的域名服务器根目录。</p>
          <p>2、确认校验文件正确放置以后，添加业务域名。</p>
          <p>3、请提交小程序版本<a href="#" className="text-blue-500 hover:underline">重新提交审核</a>，审核通过以后生效。</p>
       </div>

       <div className="mb-4 text-sm text-slate-600 font-medium">小程序已绑定业务域名</div>
       
       <table className="w-full text-left text-sm mb-4">
          <thead className="bg-white text-slate-500 border-b border-slate-100">
             <tr>
                <th className="p-4 w-20">#</th>
                <th className="p-4">域名</th>
                <th className="p-4 text-right">操作</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
             <tr>
                <td className="p-4 text-slate-500">1</td>
                <td className="p-4 text-slate-800">https://zhyx.eingdong.com(系统域名)</td>
                <td className="p-4 text-right text-slate-400">-</td>
             </tr>
          </tbody>
       </table>

       <button className="flex items-center gap-1 text-blue-500 text-sm hover:underline">
          <PlusCircle size={14} /> 添加新业务域名
       </button>
    </div>
  );
};

export default AuxExternalDomain;
