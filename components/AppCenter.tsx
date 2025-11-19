
import React from 'react';

interface AppItemProps {
  icon: string;
  color: string;
  title: string;
  desc: string;
  isNew?: boolean;
  tag?: string;
}

const AppItem: React.FC<AppItemProps> = ({ icon, color, title, desc, isNew, tag }) => (
  <div className="bg-white p-4 rounded shadow-sm hover:shadow-md border border-transparent hover:border-emerald-100 transition-all cursor-pointer flex gap-4 items-start relative overflow-hidden">
     <div className={`w-10 h-10 ${color} text-white rounded flex items-center justify-center text-xl font-bold shrink-0`}>
        {icon}
     </div>
     <div>
        <div className="font-bold text-slate-800 text-sm mb-1 flex items-center gap-2">
           {title}
           {tag && <span className={`text-[10px] px-1 rounded ${tag === '限时免费' ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-500'}`}>{tag}</span>}
        </div>
        <div className="text-xs text-slate-400 leading-relaxed line-clamp-2">{desc}</div>
     </div>
  </div>
);

const AppCenter: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="px-2">
         <h2 className="text-lg font-bold text-slate-800 mb-4">应用中心</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AppItem icon="🍺" color="bg-emerald-400" title="存酒" desc="用户未喝完的酒可暂存在店里" />
            <AppItem icon="💬" color="bg-emerald-400" title="评价" desc="用户订单评价" />
            <AppItem icon="📶" color="bg-emerald-400" title="门店WIFI" desc="可设置各个门店WIFI" />
            <AppItem icon="🔢" color="bg-emerald-400" title="排队取号" desc="门店在线排队取号" />
            <AppItem icon="📅" color="bg-emerald-400" title="预约订座" desc="方便预约消费，可设置不同时段的预..." />
            <AppItem icon="📊" color="bg-emerald-400" title="表单工具" desc="可制作各类报名表、数据收集、商务..." />
            <AppItem icon="📱" color="bg-emerald-400" title="手机号验证组件" desc="可管理快速获取手机号码验证的功能" />
            <AppItem icon="🖨" color="bg-emerald-400" title="有效期打印" desc="管理打印有效期标签小票" />
            <AppItem icon="🚚" color="bg-emerald-400" title="实时快递查询" desc="可实时查询物流动态" />
            <AppItem icon="🖥" color="bg-emerald-400" title="后厨显示系统(KDS)" desc="后厨可实时接收并展示来自各渠道的..." />
            <AppItem icon="🧾" color="bg-slate-100 text-slate-400" title="开发票管理" desc="方便用户可直接在订单里申请开发票" tag="未开通" />
         </div>
      </div>

      <div className="px-2">
         <h2 className="text-lg font-bold text-slate-800 mb-4">第三方平台</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AppItem icon="JD" color="bg-red-500" title="京东秒送" desc="直连京东秒送平台，实现商品、库存..." tag="限时免费" />
            <AppItem icon="饿" color="bg-blue-400" title="饿了么（淘宝闪购）" desc="直连饿了么渠道，实现商品、库存、..." tag="未开通" />
            <AppItem icon="美" color="bg-yellow-400" title="美团外卖" desc="直连美团外卖，实现商品、库存、订..." tag="未开通" />
         </div>
      </div>
    </div>
  );
};

export default AppCenter;
