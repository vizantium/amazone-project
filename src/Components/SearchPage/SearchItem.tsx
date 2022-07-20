import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";


type itemType = {
    name: string,
    imageUrl: string,
    price: string,
    ratings: string,
    rating: string,
    info: {
        id: string
    }
}

export const SearchItem:React.FC<itemType> = ({name, imageUrl, price, ratings, rating, info}) => {


    const bigPrice = price.toString().slice(0, -2)
    const smallPrice = price.toString().slice(-2)
    return (
        <div className={'catalog__item'}>
            <Link  to={'/fullItem?item=' + `${info.id}`} className={'catalog__image__block'}>
                <img src={imageUrl} className={'catalog__image'}/>
            </Link>
            <div className={'catalog__item__info'}>
                <Link to={`/fullItem?item=${info.id}`} className={'item__text'}>{name}</Link>
                <div className={'item__info__rating'}><div className={`item__rating__${rating}`}/><div className={'item__rating__ic'}/><span className={'rating__count'}>{ratings}</span></div>
                <div className={'item__price'}><span className={'item__currency'}>$</span><span className={'big__price'}>{bigPrice}</span><span className={'small_price'}>{smallPrice}</span></div>
            </div>
        </div>
    )
}


