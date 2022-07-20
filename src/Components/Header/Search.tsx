import search from '../../assets/img/search.png'
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../redux/redux-store";
import React, {ChangeEvent, useState} from "react";
import {setSearchValue} from "../../redux/filter-slice";
import debounce from 'lodash.debounce'


export const Search = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')

    const changeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str))
        }, 1000),
        []
    )

    const clickSearch = () => {
        setValue('')
    }

    return (
        <form className={'search'}>
                <input
                    value={value}
                    onChange={changeSearchValue}
                />
            <Link onClick={clickSearch} to={'/search'} >
                <img src={search}/>
            </Link>
        </form>
    )
}