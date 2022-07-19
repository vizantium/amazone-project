import React from "react";
import {cartItem} from "../../redux/cart-slice";


export const CartItem:React.FC<cartItem> = ({item, count, options}) => {

    const ItemPrice = Number(item.price) * count

    return (
        <div className={'cartItem'}>
            <div className={'cartItem__block'}>
                <img className={'cartItem__img'} src={item.imageUrl}/>
                <div className={'cartItem__info'}>
                    <div className={'cartItem__name'}>
                        <span className={'cartItem__name__1'}>{item.name}</span>
                        <span className={'cartItem__name__2'}>${ItemPrice.toString().slice(0, -2)}.{ItemPrice.toString().slice(-2)}</span>
                    </div>
                    <div className={'cartItem__2'}><span className={'bestSeller'}>#1 Best Seller</span> in store</div>
                    <div className={'cartItem__3'}>In Stock</div>
                    <div className={'cartItem__4'}>Shipped from: M + L</div>
                    <div className={'cartItem__5'}>Gift options not available.Gift options not available. Learn more</div>
                    <div className={'cartItem__6'}>{options}</div>
                    <div><span> - </span><span>{count}</span><span> + </span><span> | </span><span>Delete</span></div>
                </div>
            </div>
            <div className={'fullItem__line'}/>
        </div>
    )
}