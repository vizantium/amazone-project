import React from "react";
import {Item} from "./Item";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";

type catalogItemsProps = {
    minPrice: string,
    maxPrice: string,
    rating: string
}

export const CatalogItems:React.FC<catalogItemsProps> = ({minPrice, maxPrice, rating}) => {
    const {items} = useSelector((state:StateType) => state.catalogSlice)
    const {checkBoxValue} = useSelector((state:StateType) => state.filterSlice)

    let CheckItems = items

    if(checkBoxValue.length > 0) {
        CheckItems = items.filter(item => checkBoxValue.includes(item.brand))
    }

    let CheckItemsAfterPrice = CheckItems

    CheckItemsAfterPrice = CheckItems.filter(item => Number(minPrice + '00') < Number(item.price) && Number(item.price) < Number(maxPrice + '00') )

    let SortItemsByRating = CheckItemsAfterPrice

    SortItemsByRating = CheckItemsAfterPrice.filter(item => Number(item.rating) > Number(rating))

    const catalog = SortItemsByRating.map ((obj: any) => <Item key={obj.info.id} {...obj}/>)
    return (
        <div className={'catalog__items'}>
            <div className={'catalog__items__header'}>
                RESULTS
            </div>
            <div className={'catalog__items__list'}>
                {catalog}
            </div>
        </div>
    )
}