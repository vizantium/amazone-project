import React from "react";

export const Bottom: React.FC = () => {
    const scrollUp = () => {
        window.scrollTo(0, -200)
    }

    return (
        <div className={'bottom'}>
            <div className={'up__bottom'}>
                <div className={'scroll__up'} onClick={scrollUp}>
                    Back to top
                </div>
                <div className={'up__bottom__block'}>
                    <div className={'up__bottom__smallBlock'}>
                        <span>Get to Know Us</span>
                        <p className={'first__bottom__p'}>Careers</p>
                        <p>Blog</p>
                        <p>About Amazon</p>
                        <p>Investor Relations</p>
                        <p>Amazon Devices</p>
                        <p>Amazon Science</p>
                    </div>
                    <div className={'up__bottom__smallBlock'}>
                        <span>Make Money with Us</span>
                        <p className={'first__bottom__p'}>Sell products on Amazon</p>
                        <p>Sell on Amazon Business</p>
                        <p>Sell apps on Amazon</p>
                        <p>Become an Affiliate</p>
                        <p>Advertise Your Products</p>
                        <p>Self-Publish with Us</p>
                        <p>Host an Amazon Hub</p>
                        <p>›See More Make Money with Us</p>
                    </div>
                    <div className={'up__bottom__smallBlock'}>
                        <span>Amazon Payment Products</span>
                        <p className={'first__bottom__p'}>Amazon Business Card</p>
                        <p>Shop with Points</p>
                        <p>Reload Your Balance</p>
                        <p>Amazon Currency Converter</p>
                    </div>
                    <div className={'up__bottom__smallBlock'}>
                        <span>Let Us Help You</span>
                        <p className={'first__bottom__p'}>Amazon and COVID-19</p>
                        <p>Your Account</p>
                        <p>Your Orders</p>
                        <p>Shipping Rates & Policies</p>
                        <p>Returns & Replacements</p>
                        <p>Manage Your Content and Devices</p>
                        <p>Amazon Assistant</p>
                        <p>Help</p>
                    </div>
                </div>
                <div className={'bottom__line'}/>
                <div className={'bottom__image'}>
                <img src={'https://pngimg.com/uploads/amazon/amazon_PNG11.png'}/>
                </div>
            </div>
            <div className={'down__bottom__block'}>
                <div className={'down__bottom__block__info'}>
                    <p className={'bottom__hover'}>Conditions of Use</p>
                    <p className={'bottom__hover'}>Privacy Notice</p>
                    <p className={'bottom__hover'}>Interest-Based Ads</p>
                    <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    )
}