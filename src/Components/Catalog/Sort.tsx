import React, {ChangeEvent} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {setCheckBoxValue} from "../../redux/filter-slice";
import SortBy from "./SortBy";


type sortProps = {
    setMinPrice: (arg: string) => void
    setMaxPrice: (arg: string) => void
    setRating: (arg: string) => void
}

export const Sort: React.FC<sortProps> = ({setMinPrice, setMaxPrice, setRating}) => {
    const {category} = useSelector((state: StateType) => state.filterSlice)
    const {items} = useSelector((state: StateType) => state.catalogSlice)
    const categoryUp = category.charAt(0).toUpperCase() + category.slice(1)

    const dispatch = useAppDispatch()
    let brands = [] as unknown as Array<string>
    items.forEach(obj => {
        if (obj.info.brands) {
            brands = obj.info.brands
        }
    })
    const changeCheckbox = (event: ChangeEvent) => {
        const att = event.target.getAttribute('value')
        dispatch(setCheckBoxValue(att))
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
            <SortBy setRating={setRating} brands={brands} changeCheckbox={changeCheckbox} setPrice={setPrice}
                    setMaxPrice={setMaxPrice} setMinPrice={setMinPrice}/>
        </div>
    )
}