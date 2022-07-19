import React from "react";

type priceDiv = {
    price: number | string
}

export const PriceDiv:React.FC<priceDiv> = ({price}) => {
    return (
        <div><span className={'fullItem__header__priceD'}>$</span>
            <span className={'fullItem__header__priceB'}>{price.toString().slice(0, -2)}</span><span
                className={'fullItem__header__priceM'}>{price.toString().slice(-2)}</span></div>
    )
}