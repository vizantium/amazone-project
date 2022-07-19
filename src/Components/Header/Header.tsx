import React, {useEffect, useRef, useState} from "react";
import location from '../../assets/img/location.png'
import {Search} from "./Search";
import down from '../../assets/img/down.png'
import cart from '../../assets/img/cart.png'
import menu from '../../assets/img/menu.png'
import {SignInHover} from "./SignInHover";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {getRegData, setEmail, setIsAuth, signOut} from "../../redux/Login-Slice";
import {SignInHoverAuth} from "./SignInHoverAuth";

type PopupClick = MouseEvent & {
    path: Node[]
}

export const Header: React.FC = () => {
    const [isVisibleMenu, setVisibleMenu] = useState(false)
    const dispatch = useAppDispatch()
    const {isAuth} = useSelector((state:StateType) => state.LoginSlice)
    const {name} = useSelector((state:StateType) => state.LoginSlice?.regData[0])
    const {totalCount} = useSelector((state:StateType) => state.cartSlice)
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

    return (
        <div className={'header'}>
            <div className={'topHeader'}>
                <Link to={'/'}>
                    <img className={'headerLogo'} src={'https://pngimg.com/uploads/amazon/amazon_PNG11.png'}/>
                </Link>
                <div className={'headerDelivery'}>
                    <img className={'locationIcon'} src={location}/>
                    <div className={'textDelivery'}>
                        <span className={'textOne'}>Deliver to</span>
                        <span className={'textTwo'}>Moldova, Republic of</span>
                    </div>
                </div>
                <Search/>
                <div className={'language'}>
                    <img className={'flag'}
                         src={'https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg'}/>
                    <img className={'down'} src={down}/>
                </div>

                <div>
                    <div className={'SignIn'}>
                        <div className={'SignInBlock'}>
                            <div className={'helloSign'}>Hello, {isAuth ? ' ' + name : 'Sign in'}</div>
                            <div className={'AccountSign'}>Account & List</div>
                        </div>
                        <div className={'hover'}>
                            {isAuth ? <SignInHoverAuth/> : <SignInHover/>}
                        </div>
                    </div>
                </div>
                <div className={'returnOrders'}>
                    <span>Return</span>
                    <span>& Orders</span>
                </div>
                <Link to={'cart'} className={'cart'}>
                    <div><img src={cart}/></div>
                    <span className={'spanCart'}>{totalCount}</span>
                </Link>
            </div>
            <div className={'bottomHeader'}>
                <div onClick={() => setVisibleMenu(!isVisibleMenu)} >
                    <img src={menu}/>
                    <span>All</span>
                </div>
                <div>
                    Today's Deals
                </div>
                <div>
                    Customer Service
                </div>
                <div>
                    Gift Cards
                </div>
                <div>
                    Sell
                </div>
            </div>
                <div className={isVisibleMenu ? 'menu active' : 'menu'}>
                    <div className={'brightness'} onClick={() => setVisibleMenu(false)}/>
                    <div className={'menu__info'}>
                        <div className={'menu__header'}>Hello, {isAuth ? ' ' + name : 'Sign in'}</div>
                        <div className={'menu__shop'}>
                            <span>Shop by department</span>
                            <a>Smartwatches</a>
                            <a>Kindle E readers</a>
                            <a>Gaming accessories</a>
                            <a>Computers & Accessories</a>
                            <a>For your Fitness Needs</a>
                            <a>Health & Personal Care</a>
                            <a>Toys</a>
                            <a>Pet supplies</a>
                        </div>
                        <div className={'menu__line'}/>
                        <div className={'menu__help'}>
                            <span>Help & Settings</span>
                            <a>Your account</a>
                            <a>English</a>
                            <a>Costumer Service</a>
                            {isAuth ? <Link  onClick={signOutClick} className={'menu__link'} to={'/'}>Sign Out</Link> : <Link className={'menu__link'} to={'login'}>Sign In</Link> }
                        </div>
                    </div>
                </div>
        </div>
    )
}