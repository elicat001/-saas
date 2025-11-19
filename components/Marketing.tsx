
import React from 'react';

interface MarketingItemProps {
  icon: string;
  color: string;
  title: string;
  desc: string;
}

const MarketingItem: React.FC<MarketingItemProps> = ({ icon, color, title, desc }) => (
  <div className="bg-white p-4 rounded shadow-sm hover:shadow-md border border-transparent hover:border-emerald-100 transition-all cursor-pointer flex gap-4 items-start">
     <div className={`w-10 h-10 ${color} text-white rounded flex items-center justify-center text-xl font-bold shrink-0`}>
        {icon}
     </div>
     <div>
        <div className="font-bold text-slate-800 text-sm mb-1">{title}</div>
        <div className="text-xs text-slate-400 leading-relaxed">{desc}</div>
     </div>
  </div>
);

const Marketing: React.FC = () => {
  const marketingTools = [
    { icon: '余', color: 'bg-emerald-400', title: '余额充值', desc: '允许客户充值并使用余额支付' },
    { icon: '团', color: 'bg-emerald-500', title: '商品拼团', desc: '拼团' },
    { icon: 'AD', color: 'bg-emerald-400', title: '弹窗广告', desc: '设置弹窗广告' },
    { icon: '★', color: 'bg-emerald-500', title: '积分管理', desc: '下单可获得积分，再次下单可使用积分抵扣' },
    { icon: '分', color: 'bg-emerald-400', title: '分销员', desc: '让每个用户都变成业务员' },
    { icon: '会', color: 'bg-emerald-500', title: '会员', desc: '用户会员管理设置' },
    { icon: '幸', color: 'bg-emerald-400', title: '幸运大转盘', desc: '营销抽奖，可通过下单增加次数抽取优惠券...' },
    { icon: '刮', color: 'bg-emerald-500', title: '刮刮乐', desc: '营销抽奖，可通过下单增加次数抽取优惠券...' },
    { icon: '集', color: 'bg-emerald-400', title: '集章活动', desc: '下单参与集章，集满可兑换优惠券或实物奖品' },
    { icon: '减', color: 'bg-emerald-500', title: '满减活动', desc: '达到指定支付金额享受减价' },
    { icon: '充', color: 'bg-emerald-400', title: '充值兑换码', desc: '兑换码直充余额，可当作礼品赠送' },
    { icon: '券', color: 'bg-emerald-500', title: '券兑换码', desc: '可添加多券组合兑换' },
    { icon: '签', color: 'bg-emerald-400', title: '签到', desc: '适当的奖励可以提高顾客忠诚度，顾客自己...' },
    { icon: '⇄', color: 'bg-emerald-500', title: '超级换购', desc: '确认订单页面弹出，可加价换购指定商品，...' },
    { icon: '邀', color: 'bg-emerald-400', title: '邀请奖励', desc: '邀请好友领券' },
    { icon: '⏰', color: 'bg-emerald-500', title: '限时折扣', desc: '批量设置商品折扣' },
  ];

  return (
    <div className="space-y-6">
       <div className="flex border-b border-slate-200 bg-white px-6 pt-4">
          <button className="px-4 py-3 text-sm font-medium border-b-2 border-emerald-500 text-slate-800">营销功能</button>
          <button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-emerald-500">同享互斥规则</button>
       </div>

       <div className="px-2">
          <h2 className="text-lg font-medium text-slate-600 mb-4">营销</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {marketingTools.map((tool, i) => (
                <MarketingItem key={i} {...tool} />
             ))}
          </div>
       </div>

       <div className="px-2">
          <h2 className="text-lg font-medium text-slate-600 mb-4">券</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <MarketingItem icon="减" color="bg-emerald-400" title="满减优惠券" desc="用户满足指定金额后，可使用优惠券立减相..." />
             <MarketingItem icon="%" color="bg-emerald-500" title="折扣券" desc="折扣券" />
             <MarketingItem icon="送" color="bg-emerald-400" title="第二件半价券" desc="设置第二件半价券。" />
             <MarketingItem icon="费" color="bg-emerald-500" title="消费送券" desc="达到消费金额赠送优惠券" />
          </div>
       </div>
    </div>
  );
};

export default Marketing;
