import React from "react";


export const CartEmpty: React.FC = () => {
    return (
        <div className={'Cart'}>
            <div className={'empty'}>
                <div className={'empty__block'}>
                    <img
                        className={'empty__img'}
                        src={'https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg'}/>
                    <div>
                        <h2>Your Amazon Cart is empty</h2>
                        <div className={'deals'}>Shop today's deals</div>
                    </div>
                </div>
            </div>
            <p className={'empty__p'}>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping Cart Learn more</p>
            <p className={'empty__p__last'}>Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
        </div>
    )
}