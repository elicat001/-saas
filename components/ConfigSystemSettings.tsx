
import React from 'react';
import { Info } from 'lucide-react';

const ConfigSystemSettings: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1 bg-white rounded-sm shadow-sm h-[calc(100vh-6rem)]">
         <div className="p-0">
           {['基础设置', '转发设置', '支付设置', '配送设置', '快递设置', '等单提醒', '座位预约', '下单预约', '下单表单', '常用备注', '加载图标', '模板消息'].map((item, idx) => (
             <div 
               key={item} 
               className={`px-6 py-3.5 text-sm font-medium cursor-pointer ${idx === 0 ? 'bg-emerald-50 text-emerald-600 border-l-4 border-emerald-500' : 'text-slate-600 hover:bg-slate-50'}`}
             >
               {item}
             </div>
           ))}
         </div>
      </div>

      <div className="col-span-3 bg-white rounded-sm shadow-sm p-8">
         <div className="space-y-8 max-w-3xl">
            <div className="flex items-center">
               <span className="w-32 text-sm text-slate-500">版权图标</span>
               <div className="w-16 h-16 border-2 border-dashed border-slate-300 rounded flex items-center justify-center text-2xl text-slate-300 cursor-pointer hover:border-emerald-400 hover:text-emerald-500">
                  +
               </div>
               <span className="text-xs text-slate-400 ml-4">建议尺寸: 100*48px，留空则为默认</span>
            </div>

            <div className="flex items-center">
               <span className="w-32 text-sm text-slate-500">首次授权头像昵称</span>
               <div className="w-10 h-5 bg-emerald-500 rounded-full relative cursor-pointer mr-3">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
               </div>
               <span className="text-xs text-slate-500 flex items-center gap-1">新用户在首次使用时弹出授权头像昵称 <Info size={12} /></span>
            </div>

            <div className="flex items-center">
               <span className="w-32 text-sm text-slate-500">首页提示收藏小程序</span>
               <div className="w-10 h-5 bg-emerald-500 rounded-full relative cursor-pointer mr-3">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 right-0.5"></div>
               </div>
               <span className="text-xs text-slate-500">设置</span>
            </div>

            <div className="flex items-center">
               <span className="w-32 text-sm text-slate-500">强制获取GPS</span>
               <div className="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer mr-3">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
               </div>
               <span className="text-xs text-slate-500 flex items-center gap-1">不设置 <Info size={12} /></span>
            </div>

            <div className="flex items-center">
               <span className="w-32 text-sm text-slate-500">选择门店模式</span>
               <div className="flex gap-6 text-sm text-slate-600">
                  <label className="flex items-center gap-2 cursor-pointer">
                     <div className="w-4 h-4 rounded-full border-4 border-emerald-500"></div> 传统排列 <Info size={12} />
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer opacity-60">
                     <div className="w-4 h-4 rounded-full border border-slate-300"></div> 按城市排列 <Info size={12} />
                  </label>
               </div>
            </div>

            <div className="flex items-center">
               <span className="w-32 text-sm text-slate-500">显示月销量</span>
               <div className="w-10 h-5 bg-slate-200 rounded-full relative cursor-pointer mr-3">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
               </div>
               <span className="text-xs text-slate-500">不显示</span>
            </div>

            {/* Repeat pattern for other settings */}
            {['选择就餐人数/桌位费', '开启最近购买', '手机号码前缀', '预留电话必须', '多门店下单提醒', '转发商品不可售提醒', '提示选择下单方式'].map(label => (
               <div key={label} className="flex items-center">
                  <span className="w-32 text-sm text-slate-500">{label}</span>
                  {label === '手机号码前缀' ? (
                     <select className="border border-slate-200 rounded px-2 py-1 text-sm text-slate-600 w-32"><option>中国大陆</option></select>
                  ) : (
                    <>
                      <div className={`w-10 h-5 ${label.includes('提醒') ? 'bg-emerald-500' : 'bg-slate-200'} rounded-full relative cursor-pointer mr-3`}>
                          <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 ${label.includes('提醒') ? 'right-0.5' : 'left-0.5'}`}></div>
                      </div>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        {label.includes('提醒') ? (label === '转发商品不可售提醒' ? '提示选购其他商品' : '关闭') : '关闭'}
                        <Info size={12} />
                      </span>
                    </>
                  )}
               </div>
            ))}
            
            <div className="flex items-center">
               <span className="w-32 text-sm text-slate-500">配送标签</span>
               <input type="text" placeholder="如：外卖、配送，默认：配送" className="flex-1 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none" />
            </div>
         </div>
      </div>
    </div>
  );
};

export default ConfigSystemSettings;
