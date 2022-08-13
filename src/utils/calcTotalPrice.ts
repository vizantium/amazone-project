import {cartItem} from "../redux/cart-slice";

export const calcTotalPrice = (items: cartItem[]) => {
  return items.reduce((sum, obj) => Number(obj.item?.price) * obj.count + sum, 0);
}

export const calcTotalCount = (items: cartItem[]) => {
  return items.reduce((sum,obj) => obj.count + sum, 0 );
}