
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarouselAds: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm min-h-[80vh] p-6">
       <div className="mb-6">
          <button className="bg-emerald-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-emerald-600 mb-2">
             新增广告
          </button>
          <div className="text-slate-400 text-xs">推荐尺寸：600px * 190px</div>
       </div>

       <table className="w-full text-left text-sm">
          <thead className="bg-white text-slate-500 border-b border-slate-100">
             <tr>
                <th className="p-4 font-medium">图片</th>
                <th className="p-4 font-medium">指定门店可用</th>
                <th className="p-4 font-medium">链接地址</th>
                <th className="p-4 font-medium">设置排序</th>
                <th className="p-4 font-medium">轮播位置</th>
                <th className="p-4 font-medium">显示/隐藏</th>
                <th className="p-4 font-medium">操作</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
             {/* Empty State */}
             <tr>
                <td colSpan={7} className="p-20 text-center text-slate-400">暂无数据</td>
             </tr>
          </tbody>
       </table>
       
       <div className="flex items-center gap-2 mt-4">
          <button className="p-1 border border-slate-200 rounded bg-slate-50 text-slate-400"><ChevronLeft size={16}/></button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">1</button>
          <button className="p-1 border border-slate-200 rounded bg-slate-50 text-slate-400"><ChevronRight size={16}/></button>
       </div>
    </div>
  );
};

export default CarouselAds;
