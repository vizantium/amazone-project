import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {useForm} from "react-hook-form";

type formType = {
    minPrice: string,
    maxPrice: string
}

type sortProps = {
    setMinPrice: (arg: string) => void
    setMaxPrice: (arg: string) => void
    setRating: (arg: string) => void
}

export const SearchSort: React.FC<sortProps> = ({setMinPrice, setMaxPrice, setRating}) => {
    const {category} = useSelector((state: StateType) => state.filterSlice)
    const {items} = useSelector((state: StateType) => state.searchSlice)
    const categoryUp = category.charAt(0).toUpperCase() + category.slice(1)
    const {register, watch, handleSubmit} = useForm<formType>({
        mode: "onSubmit"
    })
    let brands = [] as unknown as Array<string>
    items.forEach(obj => {
        if (obj.info.brands) {
            brands = obj.info.brands
        }
    })


    const onSubmit = () => {
        if (watch('maxPrice').length === 0) {
            setMaxPrice('9999999999')
        } else  {
            setMaxPrice(watch('maxPrice'))
        }
        if (watch('minPrice').length === 0) {
            setMinPrice('0')
        } else  {
            setMinPrice(watch('minPrice'))
        }
    }

    const setPrice = (minPrice: string, maxPrice: string) => {
        setMinPrice(minPrice)
        setMaxPrice(maxPrice)
    }

    return (
        <div className={'catalog__sort'}>
            <div className={'catalog__depart'}>
                <div className={'catalog__department'}>Department</div>
                <Link to={'/'} className={'catalog__home'}>
                    <div className={'category__home__i'}></div>
                    Home</Link>
                <div className={'catalog__depInfo'}>{categoryUp}</div>
            </div>
            <div className={'catalog__sort__rating'}>
                <div className={'catalog__sort__rating__text'}>Avg. Customer Review</div>
                <ul>
                    <div onClick={() => setRating('0')} className={'catalog__home'}>
                        <div className={'category__home__i'}></div>
                        Clear</div>
                    <li><div onClick={() => setRating('4')} className={'catalog__sort__rating__row'}>
                        <div className={'rating__item__1'}/>
                        <span className={'rating__text'}>& Up</span></div></li>
                    <li><div onClick={() => setRating('3')} className={'catalog__sort__rating__row'}>
                        <div className={'rating__item__2'}/>
                        <span className={'rating__text'}>& Up</span></div></li>
                    <li><div onClick={() => setRating('2')} className={'catalog__sort__rating__row'}>
                        <div className={'rating__item__3'}/>
                        <span className={'rating__text'}>& Up</span></div></li>
                    <li><div onClick={() => setRating('1')} className={'catalog__sort__rating__row'}>
                        <div className={'rating__item__4'}/>
                        <span className={'rating__text'}>& Up</span></div></li>
                </ul>
            </div>
            <div className={'sort__byPrice'}>
                <div className={'sort__price'}>Price</div>
                <div className={'catalog__home'} onClick={() => setPrice('0', '99999999')}>
                    <div className={'category__home__i'}></div>
                    Any price</div>
                <div className={'sort__number'} onClick={() => setPrice('0' , '100')}>Under $100</div>
                <div className={'sort__number'} onClick={() => setPrice('100' , '250')}>$100 to $250</div>
                <div className={'sort__number'} onClick={() => setPrice('250' , '500')}>$250 to $500</div>
                <div className={'sort__number'} onClick={() => setPrice('500' , '99999999')}>$500 & Above</div>
                <div className={'sort__setPrice'}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('minPrice')} type={"number"} className={'sort__input'} placeholder={'$ Min'}/>
                        <input {...register('maxPrice')} type={"number"} className={'sort__input'} placeholder={'$ Max'}/>
                        <input  className={'sort__submit'} value={'Go'} type={"submit"}/>
                    </form>
                </div>
            </div>
        </div>
    )
}