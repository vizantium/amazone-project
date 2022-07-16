import React from "react";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../redux/redux-store";
import {signOut} from "../../redux/Login-Slice";



export const SignInHoverAuth = () => {
    const dispatch = useAppDispatch()

    const signOutClick = () => {
      dispatch(signOut())
    }

    return (
        <div className={'signInHover signAuthHover'}>
            <div className={'signInfo signAuth'}>
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
                        <li className={'signOut'} onClick={signOutClick}>Sign out</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}