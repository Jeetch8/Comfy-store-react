import { ISearchPagination } from "./Product";
import { ICartProduct } from "./Cart";

export interface IOrder {
  attributes: {
    address: string;
    cartItems: ICartProduct[];
    createdAt: string;
    name: string;
    numItemsInCart: number;
    orderTotal: number;
    publishedAt: string;
    updatedAt: string;
  };
  id: number;
}

export interface IOrderRequestResult {
  meta: {
    pagination: ISearchPagination;
  };
  orders: IOrder[];
}
