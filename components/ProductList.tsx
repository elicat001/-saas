
import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Search, Plus, Download, Upload, MoreHorizontal, Edit, Trash2, QrCode } from 'lucide-react';
import QRCodeModal from './QRCodeModal';

const ProductList: React.FC = () => {
  const [qrModal, setQrModal] = useState<{isOpen: boolean, title: string, data: string}>({
    isOpen: false,
    title: '',
    data: ''
  });

  const handleShowQR = (product: typeof PRODUCTS[0]) => {
    setQrModal({
      isOpen: true,
      title: '商品二维码',
      data: `https://store.keruyun.clone/product/${product.id}`, // Simulated Deep Link
    });
  };

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-sm shadow-sm">
         {/* Filters */}
         <div className="flex flex-wrap gap-4 items-end mb-4">
            <div className="flex flex-col gap-1">
               <label className="text-xs text-slate-500">商品名称</label>
               <input type="text" placeholder="商品名称" className="border border-slate-200 rounded px-3 py-1.5 text-sm w-48 focus:outline-none focus:border-emerald-500" />
            </div>
            <div className="flex flex-col gap-1">
               <label className="text-xs text-slate-500">售卖方式</label>
               <select className="border border-slate-200 rounded px-3 py-1.5 text-sm w-40 focus:outline-none focus:border-emerald-500 text-slate-600">
                 <option>请选择</option>
               </select>
            </div>
            <button className="bg-emerald-500 text-white px-6 py-1.5 rounded text-sm font-medium hover:bg-emerald-600">查询</button>
         </div>

         {/* Actions Bar */}
         <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            <div className="flex gap-3">
               <button className="bg-emerald-500 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-emerald-600 flex items-center gap-1">
                 发布新商品
               </button>
               <button className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded text-sm font-medium hover:bg-slate-50">
                 批量发布商品
               </button>
               <button className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded text-sm font-medium hover:bg-slate-50">
                 excel导入
               </button>
               <button className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded text-sm font-medium hover:bg-slate-50">
                 导出
               </button>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer">
               <span>商品排序</span>
               <SettingsIcon />
            </div>
         </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-sm shadow-sm overflow-hidden">
         {/* Tabs */}
         <div className="flex border-b border-slate-200">
            {['全部商品', '在售商品', '已售罄商品', '已下架商品'].map((tab, idx) => (
               <button 
                  key={tab}
                  className={`px-6 py-3 text-sm font-medium ${idx === 1 ? 'text-emerald-500 border-b-2 border-emerald-500' : 'text-slate-600 hover:text-emerald-500'}`}
               >
                 {tab}
               </button>
            ))}
         </div>

         <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
               <tr>
                  <th className="p-4 w-10"><input type="checkbox" /></th>
                  <th className="p-4">商品名</th>
                  <th className="p-4">商品底价</th>
                  <th className="p-4">所属分类</th>
                  <th className="p-4">库存</th>
                  <th className="p-4">折扣</th>
                  <th className="p-4">可选规格</th>
                  <th className="p-4">上架</th>
                  <th className="p-4">售罄</th>
                  <th className="p-4">操作</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               {PRODUCTS.map(product => (
                  <tr key={product.id} className="hover:bg-slate-50 group">
                     <td className="p-4"><input type="checkbox" /></td>
                     <td className="p-4">
                        <div className="flex gap-3">
                           <img src={product.image} className="w-12 h-12 object-cover rounded" alt="" />
                           <div>
                              <div className="font-medium text-slate-800">{product.name}</div>
                              <div className="text-xs text-slate-400">ID: {product.id}1006</div>
                              <div className="flex gap-1 mt-1">
                                 <span className="text-[10px] bg-emerald-100 text-emerald-600 px-1 rounded">堂食</span>
                                 <span className="text-[10px] bg-emerald-100 text-emerald-600 px-1 rounded">自取</span>
                              </div>
                           </div>
                        </div>
                     </td>
                     <td className="p-4">
                        <div className="font-medium text-slate-800">{product.price.toFixed(2)}</div>
                        <div className="text-xs text-slate-400">包装费: 0.30</div>
                     </td>
                     <td className="p-4 text-slate-600">
                        {CATEGORIES.find(c => c.id === product.categoryId)?.name}
                     </td>
                     <td className="p-4 text-slate-600">
                        {product.stock}
                     </td>
                     <td className="p-4 text-slate-400">-</td>
                     <td className="p-4">
                        <span className="text-blue-500 bg-blue-50 px-2 py-0.5 rounded text-xs">份量</span>
                        <div className="text-xs text-slate-400 mt-1">上架中 (1/1)</div>
                     </td>
                     <td className="p-4">
                        <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${product.isOnShelf ? 'bg-emerald-500' : 'bg-slate-200'}`}>
                           <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${product.isOnShelf ? 'left-[22px]' : 'left-0.5'}`}></div>
                        </div>
                     </td>
                     <td className="p-4">
                        <div className="w-10 h-5 rounded-full bg-slate-200 relative cursor-pointer">
                           <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                        </div>
                     </td>
                     <td className="p-4">
                        <div className="flex gap-3 text-sm items-center">
                           <span className="text-emerald-500 cursor-pointer hover:underline">编辑</span>
                           <button 
                              onClick={() => handleShowQR(product)}
                              className="text-slate-400 hover:text-slate-600"
                              title="生成二维码"
                           >
                             <QrCode size={16} />
                           </button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>

      <QRCodeModal 
        isOpen={qrModal.isOpen}
        onClose={() => setQrModal({...qrModal, isOpen: false})}
        title={qrModal.title}
        data={qrModal.data}
        subtext="扫描二维码查看商品详情"
      />
    </div>
  );
};

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
)

export default ProductList;
