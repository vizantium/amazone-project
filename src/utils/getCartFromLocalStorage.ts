import {calcTotalCount, calcTotalPrice} from "./calcTotalPrice";
import {cartItem} from "../redux/cart-slice";


export const getCartFromLocalStorage = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);
    const totalCount = calcTotalCount(items)

    return {
        items: items as cartItem[],
        totalPrice,
        totalCount
    }
}

