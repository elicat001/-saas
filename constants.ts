
import { Category, Product, Table, TableStatus, Order, OrderStatus, User } from './types';

export const CATEGORIES: Category[] = [
  { id: 'c1', name: '全部', icon: 'LayoutGrid' },
  { id: 'c2', name: '店铺线下活动', icon: 'Store' },
  { id: 'c3', name: '进店福利', icon: 'Gift' },
  { id: 'c4', name: '贝果&牛角', icon: 'Croissant' },
  { id: 'c5', name: '提拉米苏', icon: 'Dessert' },
  { id: 'c6', name: '瑞士卷 (减糖)', icon: 'Swiss' },
];

export const PRODUCTS: Product[] = [
  { id: 'p1', name: '2件方形切件蛋糕🍰 (口味随机)', price: 12.90, categoryId: 'c3', stock: 9977, unit: '份', isOnShelf: true, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80' },
  { id: 'p2', name: '巴斯克切件蛋糕', price: 19.90, categoryId: 'c3', stock: 9977, unit: '份', isOnShelf: true, image: 'https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=200&q=80' },
  { id: 'p3', name: '红丝绒芒果慕斯蛋糕', price: 19.90, categoryId: 'c4', stock: 18, unit: '份', isOnShelf: true, image: 'https://images.unsplash.com/photo-1563729760304-b201b237857e?w=200&q=80' },
  { id: 'p4', name: '巧克力贝果', price: 10.80, categoryId: 'c4', stock: 155, unit: '个', isOnShelf: true, image: 'https://images.unsplash.com/photo-1617345834028-b3580199a202?w=200&q=80' },
  { id: 'p5', name: '原味半熟芝士蛋糕', price: 6.80, categoryId: 'c5', stock: 500, unit: '个', isOnShelf: true, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200&q=80' },
  { id: 'p6', name: '柠檬核桃玛德琳', price: 2.00, categoryId: 'c5', stock: 200, unit: '个', isOnShelf: true, image: 'https://images.unsplash.com/photo-1548842704-d6751b6b454d?w=200&q=80' },
  { id: 'p7', name: '海盐蛋糕 (可吃)', price: 12.89, categoryId: 'c6', stock: 12, unit: '个', isOnShelf: false, image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=200&q=80' },
  { id: 'p8', name: '抹茶瑞士卷', price: 8.80, categoryId: 'c6', stock: 1000, unit: '卷', isOnShelf: true, image: 'https://images.unsplash.com/photo-1599146617646-455f8267d899?w=200&q=80' },
];

export const INITIAL_TABLES: Table[] = Array.from({ length: 8 }, (_, i) => ({
  id: `t${i + 1}`,
  name: `${i + 1}`,
  status: i === 0 ? TableStatus.AVAILABLE : (i === 1 ? TableStatus.SCANNED : TableStatus.AVAILABLE),
  capacity: 4,
}));

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ord-001',
    orderNo: '2025110211262484817',
    tableId: 't2',
    items: [{ ...PRODUCTS[0], quantity: 1 }],
    total: 12.90,
    status: OrderStatus.COMPLETED,
    timestamp: Date.now() - 10000000,
    type: 'DELIVERY',
    paymentMethod: 'WeChat'
  },
  {
    id: 'ord-002',
    orderNo: '2025110211262483311',
    tableId: 't5',
    items: [{ ...PRODUCTS[7], quantity: 2 }],
    total: 17.60,
    status: OrderStatus.PENDING,
    timestamp: Date.now() - 500000,
    type: 'DINE_IN'
  }
];

export const MOCK_USERS: User[] = [
  { id: 'u1', name: '张三', phone: '13800138000', type: 'MEMBER', balance: 120.50, points: 500, level: 2, joinDate: '2024-01-15' },
  { id: 'u2', name: '李四', phone: '13900139000', type: 'NORMAL', balance: 0, points: 0, level: 0, joinDate: '2024-11-02' },
  { id: 'u3', name: '王五', phone: '13700137000', type: 'MEMBER', balance: 15.00, points: 120, level: 1, joinDate: '2024-10-10' },
];
