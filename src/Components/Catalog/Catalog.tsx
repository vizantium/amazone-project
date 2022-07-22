import React, {useCallback, useEffect, useRef, useState} from "react";
import {Sort} from "./Sort";
import {CatalogItems} from "./CatalogItems";
import {useSelector} from "react-redux";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import qs from "qs";
import {useNavigate} from "react-router-dom";
import {setFilters, setOrder, setSort} from "../../redux/filter-slice";
import {getCatalogByCategory} from "../../redux/catalog-Slice";

type PopupClick = MouseEvent & {
    path: Node[]
}

const Catalog: React.FC = () => {
    const {items} = useSelector((state:StateType) => state.catalogSlice)
    const navigate = useNavigate()
    const {category, searchValue, sort, order} = useSelector((state:StateType) => state.filterSlice)
    const dispatch = useAppDispatch()
    const isSearch = useRef(false)
    const isMounted = useRef(false)
    const [isVisible, setVisible] = useState(false)
    const [value, setValue] = useState('Featured')
    const sortRef = useRef<HTMLDivElement>(null)
    const [minPrice, setMinPrice] = useState('0')
    const [maxPrice, setMaxPrice] = useState('999999999')
    const [rating, setRating] = useState('0')


    async function axiosGet() {
        const search = searchValue ? `&search=${searchValue}` : ''
        dispatch(
            getCatalogByCategory({
                category,
                sort,
                order
            })
        );
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        if (window.location.search) {
            const params = (qs.parse(window.location.search.substring(1)) as unknown) as any
            dispatch(setFilters({...params}))
            isSearch.current = true
        }

    }, [])


    useEffect(() => {
        if (!isSearch.current) {
            axiosGet()
            const queryString = qs.stringify({
                category,
                sort,
                order
            });
            navigate(`?${queryString}`)
        window.scrollTo(0, 0)

        }
        isSearch.current = false
    }, [category, sort, order])

    const onClickHandler = useCallback((category: any, order: any, value: any) => {
        dispatch(setSort(category))
        dispatch(setOrder(order))
        setVisible(false)
        setValue(value)
    },[])

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const _event = event as PopupClick
            if(sortRef.current && !_event.path.includes(sortRef.current)){
                setVisible(false)
            }
        };
        document.body.addEventListener('click', handleClick)
        return () => (document.body.removeEventListener("click", handleClick))
    },[])


    return (
        <div className={'catalogContainer'}>
            <div className={'catalog__header'}>
                <div ref={sortRef} className={'catalog__header__info'}><span>1-{items.length} of {items.length} results</span>
                    <button className={'catalog__header__sort'} onClick={() => setVisible(!isVisible)}>{value}</button>
                    {isVisible && <div className={'catalog__sort'}>
                        <div className={'catalog__sort__block'} onClick={() => onClickHandler('', '', 'Featured')}>Featured</div>
                        <div className={'catalog__sort__block'} onClick={() => onClickHandler('price', '', 'Price: Low to High')}>Price: Low to High</div>
                        <div className={'catalog__sort__block'} onClick={() => onClickHandler('price', 'desc', 'Price: High to Low')}>Price: High to Low</div>
                        <div className={'catalog__sort__block'} onClick={() => onClickHandler('rating', '', 'Rating: Low to Low')}>Rating: Low to Low</div>
                        <div className={'catalog__sort__block'} onClick={() => onClickHandler('rating', 'desc', 'Rating: High to Low')}>Rating: High to Low</div>
                    </div>}
                </div>
            </div>
            <div className={'catalog__content'}>
                <Sort setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setRating={setRating}/>
                <CatalogItems minPrice={minPrice} maxPrice={maxPrice} rating={rating}/>
            </div>
        </div>
    )
}

export default Catalog