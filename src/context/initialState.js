import { fetchCart, fetchUser } from "../utilis/fetchLocalStorageData";

const unserInfo = fetchUser();

const CartInfo = fetchCart();

export const initialState = {
  user: unserInfo,
  foodItems: null,
  cartShow: false,
  cartItems: CartInfo,
};
