import React from 'react';
import {Link} from "react-router-dom";

type ContentBottomType = {
    isAuth: boolean,
    signOutClick: () => void
}

const ContentBottom:React.FC<ContentBottomType> = ({isAuth, signOutClick}) => {
    return (
        <div className={'content__bottom'}>
            <div className={'bottom__line__top'}/>
            <div className={'bottom__info'}>
                <p>See personalized recommendations</p>
                <div className={'bottom__button'}>
                    {isAuth ?
                        <Link onClick={signOutClick} className={'bottom__button__sign'} to={'/'}>Sign Out</Link> :
                        <Link className={'bottom__button__sign'} to={'login'}>Sign In</Link>}
                </div>
                {isAuth ? <p className={'bottom__start__hidden'}>.</p> :
                    <p>New customer? <Link to={'registration'} className={'bottom_start'}>Start here.</Link></p>}
            </div>
            <div className={'bottom__line'}/>
        </div>
    );
};

export default ContentBottom;