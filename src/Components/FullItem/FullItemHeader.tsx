import React from 'react';
import {Link} from "react-router-dom";

const FullItemHeader = () => {
    return (
            <div className={'fullItem__Header'}>
                <div className={'fullItem__header__cont'}>
                    <div><img className={'fullItem__img1'}
                              src={'https://m.media-amazon.com/images/I/7189iXimfWL._AC_SX425_.jpg'}/></div>
                    <div>
                        <div>Acer Aspire 5 A515-46-R3UB | 15.6 Full HD IPS Display</div>
                        <div>AMD Ryzen 3 3350U Quad-Core Mobile Processor</div>
                    </div>
                    <div className={'fullItem__header__price'}><span className={'fullItem__header__priceD'}>$</span>
                        <span className={'fullItem__header__priceB'}>357</span><span
                            className={'fullItem__header__priceM'}>99</span></div>
                    <div><img className={'fullItem__img2'}
                              src={'https://m.media-amazon.com/images/I/7189iXimfWL._AC_SX425_.jpg'}/></div>
                    <Link to={'/'} className={'fullItem__header__button'}>Shop now</Link>
                </div>
            </div>
    );
};

export default FullItemHeader;