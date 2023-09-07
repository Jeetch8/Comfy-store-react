import { IProduct } from "./Product";

export interface IDefaultCartState {
  cartItems: IProduct[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}
