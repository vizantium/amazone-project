import React from 'react';
import {Link} from "react-router-dom";

const BottomBlocks = () => {
    return (
        <div className={'blocks'}>
            <div className={'block-1'}>
                <div className={'smallBlock'}><p className={'nameBlock'}>Toshiba 43" 4K | $229.99</p><img
                    src={'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjNhY2Q4ZDgt/NjNhY2Q4ZDgt-YjkxMTliODct-w379._SY304_CB633776880_.jpg'}/>
                    <Link to={''} className={'linkBlock'}>See More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>Smart TVs as low as $89.99</p><img
                    src={'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjNhY2Q4ZDgt/NjNhY2Q4ZDgt-OTk0MTNjOTYt-w379._SY304_CB633621377_.jpg'}/>
                    <Link to={''} className={'linkBlock'}>See More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>Insignia 50" Smart TV | $239</p>
                    <img
                        src={'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjNhY2Q4ZDgt/NjNhY2Q4ZDgt-ZjdmYzI4MWIt-w379._SY304_CB633769411_.jpg'}/>
                    <Link to={''} className={'linkBlock'}>See More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>Kindle</p><img
                    src={'https://m.media-amazon.com/images/I/31CbsZFQc0L._SX370_.jpg'}/>
                    <Link to={''} className={'linkBlock'}>See More</Link></div>
            </div>
            <div className={'block-2'}>
                <div className={'smallBlock'}><p className={'nameBlock'}>Smartwatches</p><img
                    src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg'}/>
                    <Link to={''} className={'linkBlock'}>See More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>Kindle E readers</p><img
                    src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_1x._SY304_CB639752818_.jpg'}/>
                    <Link to={''} className={'linkBlock'}>See More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>New arrivals in Toys</p><img
                    src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg'}/>
                    <Link to={''} className={'linkBlock'}>See More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>Shop Pet supplies</p><img
                    src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_1X._SY304_CB639746743_.jpg'}/>
                    <Link to={''} className={'linkBlock'}>See More</Link></div>
            </div>
        </div>
    );
};

export default BottomBlocks;