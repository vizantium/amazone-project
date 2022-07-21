import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {CartEmpty} from "./CartEmpty";
import {CartItem} from "./CartItem";
import {removeAll} from "../../redux/cart-slice";


export const Cart: React.FC = () => {
    const {totalCount, items, totalPrice} = useSelector((state: StateType) => state.cartSlice)
    const dispatch = useDispatch()
    const onClickRemoveAll = () => {
        dispatch(removeAll())
    }

    if (!totalCount) {
        return <CartEmpty/>
    }

    return (
        <div className={'Cart'}>
            <div className={'cart__block'}>
                <div className={'cart__items'}>
                    <div className={'cart__it'}>
                        <h1>Shopping Cart</h1>
                        <div onClick={onClickRemoveAll} className={'deselect'}>Deselect all items</div>
                        <div className={'price'}>Price</div>
                        <div className={'fullItem__line'}/>
                    </div>
                    <div>
                        {items.map((obj, index) => <CartItem key={index} {...obj}/>)}
                    </div>
                    <div className={'totalCount'}>
                        Subtotal({items.length} items): <span
                        className={'totalPrice'}>${totalPrice.toString().slice(0, -2)}.{totalPrice.toString().slice(-2)}</span>
                    </div>
                </div>
                <div className={'cart__subtotal'}>
                    <div>
                        Subtotal({items.length} items): <span
                        className={'totalPrice'}>${totalPrice.toString().slice(0, -2)}.{totalPrice.toString().slice(-2)}</span>
                    </div>
                    <div className={'subtotal__button'}><span>Proceed to checkout</span></div>
                </div>
            </div>
        </div>
    )
}