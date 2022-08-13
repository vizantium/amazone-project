import React from 'react';
import {Link} from "react-router-dom";
import location from "../../assets/img/location.png";
import {Search} from "./Search";
import down from "../../assets/img/down.png";
import {SignInHoverAuth} from "./SignInHoverAuth";
import {SignInHover} from "./SignInHover";
import cart from "../../assets/img/cart.png";

type TopHeaderType = {
    isAuth: boolean,
    name: string,
    totalCount: number
}

const TopHeader:React.FC<TopHeaderType> = ({isAuth, name, totalCount}) => {
    return (
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
    );
};

export default TopHeader;