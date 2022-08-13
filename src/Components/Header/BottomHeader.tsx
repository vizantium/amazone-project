import React from 'react';
import menu from "../../assets/img/menu.png";

type BottomHeaderType = {
    setVisibleMenu: React.Dispatch<React.SetStateAction<boolean>>,
    isVisibleMenu: boolean
}

const BottomHeader:React.FC<BottomHeaderType> = ({setVisibleMenu, isVisibleMenu}) => {
    return (
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
    );
};

export default BottomHeader;