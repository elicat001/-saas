
import React from 'react';
import { HelpCircle } from 'lucide-react';

const ConfigBigScreen: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm min-h-[80vh]">
       <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
             <tr>
                <th className="p-6 font-medium">类型</th>
                <th className="p-6 font-medium">类型</th>
                <th className="p-6 font-medium">大屏幕地址</th>
                <th className="p-6 font-medium text-right">操作</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
             <tr className="hover:bg-slate-50">
                <td className="p-6 text-slate-600">叫号大屏幕</td>
                <td className="p-6 text-slate-600">叫号显示</td>
                <td className="p-6 text-slate-500 font-mono text-xs">https://zhyx.eingdong.com/screen/#/?key=39ea78f0718cc96ca977a8fe607b4c21</td>
                <td className="p-6 text-right">
                   <div className="flex justify-end gap-4 text-sm">
                      <span className="text-emerald-500 cursor-pointer hover:underline">打开</span>
                      <span className="text-emerald-500 cursor-pointer hover:underline">复制</span>
                      <span className="text-emerald-500 cursor-pointer hover:underline">重置地址</span>
                      <span className="text-red-500 cursor-pointer hover:underline">清空屏幕</span>
                   </div>
                </td>
             </tr>
             <tr className="hover:bg-slate-50">
                <td className="p-6 text-slate-600" rowSpan={3}>后厨大屏幕</td>
                <td className="p-6 text-slate-600 flex items-center gap-1">备菜员 <HelpCircle size={12} className="text-slate-400"/></td>
                <td className="p-6 text-slate-500 font-mono text-xs">已禁用备菜员角色</td>
                <td className="p-6 text-right">
                   <div className="flex justify-end gap-4 text-sm">
                      <span className="text-emerald-500 cursor-pointer hover:underline">打开</span>
                      <span className="text-emerald-500 cursor-pointer hover:underline">复制</span>
                      <span className="text-emerald-500 cursor-pointer hover:underline">重置地址</span>
                      <span className="text-emerald-500 cursor-pointer hover:underline">启用备菜员</span>
                   </div>
                </td>
             </tr>
             <tr className="hover:bg-slate-50">
                {/* Rowspan placeholder */}
                <td className="p-6 text-slate-600">后厨界面</td>
                <td className="p-6 text-slate-500 font-mono text-xs">https://zhyx.eingdong.com/screen/#/kitchen?key=fb4286319432328243ae8fbc9706699c</td>
                <td className="p-6 text-right">
                   <div className="flex justify-end gap-4 text-sm">
                      <span className="text-emerald-500 cursor-pointer hover:underline">打开</span>
                      <span className="text-emerald-500 cursor-pointer hover:underline">复制</span>
                      <span className="text-emerald-500 cursor-pointer hover:underline">重置地址</span>
                   </div>
                </td>
             </tr>
             <tr className="hover:bg-slate-50">
                {/* Rowspan placeholder */}
                <td className="p-6 text-slate-600">传菜员</td>
                <td className="p-6 text-slate-500 font-mono text-xs">https://zhyx.eingdong.com/screen/#/passer?key=c992a9869626994d4c6c59389994fef1</td>
                <td className="p-6 text-right">
                   <div className="flex justify-end gap-4 text-sm">
                      <span className="text-emerald-500 cursor-pointer hover:underline">打开</span>
                      <span className="text-emerald-500 cursor-pointer hover:underline">复制</span>
                      <span className="text-emerald-500 cursor-pointer hover:underline">重置地址</span>
                   </div>
                </td>
             </tr>
          </tbody>
       </table>
    </div>
  );
};

export default ConfigBigScreen;
