import React from 'react';
import {Link} from "react-router-dom";

type MenuType = {
    isVisibleMenu: boolean,
    setVisibleMenu:  React.Dispatch<React.SetStateAction<boolean>>,
    isAuth: boolean,
    signOutClick: () => void,
    onClickHandler: (category: string) => void,
    name: string
}

const Menu:React.FC<MenuType> = ({isVisibleMenu, setVisibleMenu, isAuth,
                                     onClickHandler, name, signOutClick }) => {
    return (
        <div className={isVisibleMenu ? 'menu active' : 'menu'}>
            <div className={'brightness'} onClick={() => setVisibleMenu(false)}/>
            <div className={'menu__info'}>
                <div className={'menu__header'}>Hello, {isAuth ? ' ' + name : 'Sign in'}</div>
                <div className={'menu__shop'}>
                    <span>Shop by department</span>
                    <Link to={'/catalog'} onClick={() => onClickHandler('accessories')}>Computers & Accessories</Link>
                    <Link to={'/catalog'} onClick={() => onClickHandler('televisions')}>Television & Video</Link>
                    <Link to={'/catalog'} onClick={() => onClickHandler('laptop')}>Computers & Tablets</Link>
                    <Link to={'/catalog'} onClick={() => onClickHandler('monitor')}>Monitors</Link>
                </div>
                <div className={'menu__line'}/>
                <div className={'menu__help'}>
                    <span>Programs & Features</span>
                    <a>Gift Cards</a>
                    <a>#FoundItOnAmazon</a>
                    <a>Amazon Live</a>
                    <a>International Shopping</a>
                    <a>See All</a>
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
    );
};

export default Menu;