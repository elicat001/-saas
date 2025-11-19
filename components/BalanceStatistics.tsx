
import React from 'react';
import { ChevronRight, RotateCcw } from 'lucide-react';

const BalanceStatistics: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-6 rounded-sm shadow-sm">
         <h2 className="text-xl font-bold text-slate-800 mb-6">余额统计</h2>

         <div className="space-y-4">
            <div className="flex items-center gap-4">
               <span className="text-sm text-slate-500 w-20">筛选时间</span>
               <div className="relative w-80">
                  <input type="text" value="2025-11-18 00:00:00 至 2025-11-18 23:59:59" className="w-full border border-blue-300 rounded px-3 py-1.5 text-sm text-slate-700 focus:outline-none" readOnly />
               </div>
               <div className="flex gap-4 text-sm text-slate-500">
                  <span>今天</span>
                  <span className="text-emerald-500 font-medium">昨天</span>
                  <span>本月</span>
                  <span>上个月</span>
                  <span>近1个月</span>
                  <span>近3个月</span>
               </div>
            </div>

            <div className="flex items-center gap-4">
               <span className="text-sm text-slate-500 w-20">记录类型</span>
               <div className="flex items-center gap-2">
                   <input type="text" defaultValue="2025-11-18" className="border border-slate-200 rounded px-2 py-1.5 text-sm w-32 text-center" />
                   <input type="text" defaultValue="00:00:00" className="border border-slate-200 rounded px-2 py-1.5 text-sm w-24 text-center" />
                   <span>&gt;</span>
                   <input type="text" defaultValue="2025-11-18" className="border border-slate-200 rounded px-2 py-1.5 text-sm w-32 text-center" />
                   <input type="text" defaultValue="23:59:59" className="border border-slate-200 rounded px-2 py-1.5 text-sm w-24 text-center" />
               </div>
            </div>
            
            <div className="pt-2">
               <button className="bg-emerald-500 text-white px-8 py-2 rounded font-medium hover:bg-emerald-600">查询</button>
               <button className="text-emerald-500 font-medium ml-6 text-sm">记录明细</button>
            </div>
         </div>
      </div>

      <div className="flex gap-4">
          <div className="flex-1 bg-white p-6 rounded-sm shadow-sm relative overflow-hidden group">
              <div className="text-sm font-medium text-slate-800 flex items-center gap-1">
                 期初余额
                 <span className="text-slate-300 text-xs">?</span>
              </div>
              <div className="text-3xl font-bold text-slate-800 mt-2">10.00</div>
          </div>
          <div className="flex-1 bg-white p-6 rounded-sm shadow-sm relative overflow-hidden">
              <div className="text-sm font-medium text-slate-800 flex items-center gap-1">
                 本期余额增加
                 <span className="text-slate-300 text-xs">?</span>
              </div>
              <div className="text-3xl font-bold text-slate-800 mt-2">0.00</div>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
          </div>
          <div className="flex-1 bg-white p-6 rounded-sm shadow-sm relative overflow-hidden">
              <div className="text-sm font-medium text-slate-800 flex items-center gap-1">
                 本期余额减扣
                 <span className="text-slate-300 text-xs">?</span>
              </div>
              <div className="text-3xl font-bold text-slate-800 mt-2">0.00</div>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
          </div>
          <div className="flex-1 bg-white p-6 rounded-sm shadow-sm relative overflow-hidden">
              <div className="text-sm font-medium text-slate-800 flex items-center gap-1">
                 本期变动余额
                 <span className="text-slate-300 text-xs">?</span>
              </div>
              <div className="text-3xl font-bold text-slate-800 mt-2">0.00</div>
          </div>
      </div>
      
      <div className="bg-white h-64 flex items-center justify-center rounded-sm shadow-sm">
          <div className="w-32 opacity-20">
             {/* Placeholder Illustration */}
             <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#E2E8F0"/></svg>
          </div>
      </div>
    </div>
  );
};

export default BalanceStatistics;
