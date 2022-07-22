import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {useNavigate} from "react-router-dom";
import {SearchItems} from "./SearchItems";
import qs from "qs";
import {setSearchValue} from "../../redux/filter-slice";
import {getItemBySearch} from "../../redux/search-slice";
import {SearchSort} from "./SearchSort";


const SearchPage:React.FC = () => {
    const {items} = useSelector((state:StateType) => state.searchSlice)
    const navigate = useNavigate()
    const {searchValue} = useSelector((state:StateType) => state.filterSlice)
    const dispatch = useAppDispatch()
    const isSearch = useRef(false)
    const sortRef = useRef<HTMLDivElement>(null)
    const [minPrice, setMinPrice] = useState('0')
    const [maxPrice, setMaxPrice] = useState('999999999')
    const [rating, setRating] = useState('0')

    async function axiosGet() {
        dispatch(
            getItemBySearch({
                searchValue
            })
        );
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        if (window.location.search) {
            const params = (qs.parse(window.location.search.substring(1)) as unknown) as any
            dispatch(setSearchValue({...params}))
            isSearch.current = true
        }

    }, [])


    useEffect(() => {
        if (!isSearch.current) {
            axiosGet()
            const queryString = qs.stringify({
               searchValue
            });
            navigate(`?${queryString}`)
            window.scrollTo(0, 0)

        }
        isSearch.current = false
    }, [searchValue])

    return (
        <div className={'catalogContainer'}>
            <div className={'catalog__header'}>
                <div ref={sortRef} className={'catalog__header__info'}><span>1-{items.length} of {items.length} results</span>
                </div>
            </div>
            <div className={'catalog__content'}>
                <SearchSort setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setRating={setRating}/>
                <SearchItems minPrice={minPrice} maxPrice={maxPrice} rating={rating}/>
            </div>
        </div>
    )
}

export default SearchPage