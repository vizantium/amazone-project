import React from "react";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {CartEmpty} from "./CartEmpty";
import {CartItem} from "./CartItem";


export const Cart:React.FC = () => {
    const {totalCount, items, totalPrice} = useSelector((state:StateType) => state.cartSlice)

    if(!totalCount) {
        return <CartEmpty/>
    }

    return (
        <div className={'Cart'}>
            <div className={'cart__block'}>
                <div className={'cart__items'}>
                    <div className={'cart__it'}>
                        <h1>Shopping Cart</h1>
                        <div className={'deselect'}>Deselect all items</div>
                        <div className={'price'}>Price</div>
                        <div className={'fullItem__line'}/>
                    </div>
                    <div>
                        {items.map((obj) => <CartItem {...obj}/>)}
                    </div>
                    <div className={'totalCount'}>
                        Subtotal({items.length} items): <span className={'totalPrice'}>${totalPrice}</span>
                    </div>
                </div>
                <div className={'cart__subtotal'}></div>
            </div>
        </div>
    )
}