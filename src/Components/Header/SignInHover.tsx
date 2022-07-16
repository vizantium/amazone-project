import React from "react";
import {Link} from "react-router-dom";


export const SignInHover = () => {
    return (
        <div className={'signInHover'}>
            <div className={'signInBlock'}>
                <Link to={'/login'} className={'aSign'}>Sign in</Link>
                <span>New costumer? <Link  to={'registration'} className={'aStart'}>Start here.</Link></span>
            </div>
            <div className={'signLineOne'}/>
            <div className={'signInfo'}>
                <div className={'firstSignUl'}>
                    <ul>
                        Your List
                        <li>Create a List</li>
                        <li>Find a List or Registry</li>
                        <li>AmazonSmile Charity Lists</li>
                    </ul>
                </div>
                <div className={'signLineTwo'}/>
                <div className={'secondSignUl'}>
                    <ul>
                        Your Account
                        <li>Account</li>
                        <li>Orders</li>
                        <li>Recommendations</li>
                        <li>Browsing History</li>
                        <li>Watchlist</li>
                        <li>Video Purchases & Rentals</li>
                        <li>Kindle Unlimited</li>
                        <li>Content & Devices</li>
                        <li>Subscribe & Save Items</li>
                        <li>Memberships & Subscriptions</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}