import React, {useCallback, useEffect, useRef, useState} from "react";
import cart from '../../assets/img/cart.png'
import {useSelector} from "react-redux";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {getRegData, setEmail, setIsAuth, signOut} from "../../redux/Login-Slice";
import {setCategory} from "../../redux/filter-slice";
import Menu from "./Menu";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";


export const Header: React.FC = () => {
    const [isVisibleMenu, setVisibleMenu] = useState(false)
    const dispatch = useAppDispatch()
    const {isAuth} = useSelector((state: StateType) => state.LoginSlice)
    const {name} = useSelector((state: StateType) => state.LoginSlice?.regData[0])
    const {totalCount} = useSelector((state: StateType) => state.cartSlice)
    const isMounted = useRef(false)
    const {items} = useSelector((state: StateType) => state.cartSlice)

    React.useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(items)
            localStorage.setItem('cart', json)
        }
        isMounted.current = true
    }, [items])

    const auth = async () => {
        const email = localStorage.getItem('email')
        if (email) {
            const Email = email?.slice(1, -1)
            dispatch(setEmail(Email))
            await dispatch(getRegData())
            dispatch(setIsAuth(true))
        }
    }

    useEffect(() => {
        auth()
    }, [])

    const signOutClick = () => {
        dispatch(signOut())
    }

    const onClickHandler = useCallback((category: string) => {
        dispatch(setCategory(category))
        setVisibleMenu(false)
    }, [])

    return (
        <div className={'header'}>
            <TopHeader isAuth={isAuth} name={name} totalCount={totalCount}/>
            <BottomHeader setVisibleMenu={setVisibleMenu} isVisibleMenu={isVisibleMenu}/>
            <Menu isVisibleMenu={isVisibleMenu} setVisibleMenu={setVisibleMenu} isAuth={isAuth}
                  signOutClick={signOutClick} name={name} onClickHandler={onClickHandler}/>
        </div>
    )
}