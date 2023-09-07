import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { RootState } from "../store";
import { ICartProduct } from "../types/Cart";

const CartItemsList = () => {
  const cartItems: ICartProduct[] = useSelector(
    (state: RootState) => state.cartState.cartItems
  );
  console.log(cartItems);
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </>
  );
};
export default CartItemsList;
