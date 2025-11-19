
export enum OrderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  REFUNDED = 'REFUNDED'
}

export enum TableStatus {
  AVAILABLE = 'AVAILABLE',
  SCANNED = 'SCANNED',
  UNPAID = 'UNPAID',
  PAID = 'PAID'
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  image?: string;
  stock: number;
  unit: string;
  salesMode?: ('DINE_IN' | 'TAKE_OUT')[];
  isOnShelf: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  orderNo: string;
  tableId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  paymentMethod?: string;
  timestamp: number;
  type: 'DINE_IN' | 'DELIVERY' | 'PICKUP';
}

export interface Table {
  id: string;
  name: string;
  status: TableStatus;
  capacity: number;
  currentOrderId?: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  type: 'MEMBER' | 'NORMAL';
  balance: number;
  points: number;
  level: number;
  joinDate: string;
}
