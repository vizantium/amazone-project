import React from 'react';
import {Link} from "react-router-dom";

type TopBlockType = {
    onClickHandler: (category: string) => void
}

const TopBlock:React.FC<TopBlockType> = ({onClickHandler}) => {
    return (
        <div className={'blocks'}>
            <Link
                // onClick={() => onClickHandler('accessories')}
                to={'/catalog?category=accessories'}
                className={'content__image__block'}
            >

                <img className={'content__image'}
                     src={'https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg'}/>
            </Link>
            <div className={'block-1'}>
                <div className={'smallBlock'}><p className={'nameBlock'}>Television & Video</p><img
                    src={'https://i5.walmartimages.com/asr/0640e78a-2a0a-4b22-a43b-508ff415289b_1.446eccee6eb5ae0cf461509de6749da3.jpeg'}/>
                    <Link to={'/catalog?category=televisions'} className={'linkBlock'}
                        // onClick={() => onClickHandler('televisions')}
                    >See
                        More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>Computers & Accessories</p><img
                    src={'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg'}/>
                    <Link to={'/catalog?category=accessories'} className={'linkBlock'}
                        // onClick={() => onClickHandler('accessories')}
                    >See
                        More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>Computers & Tablets</p><img
                    src={'https://myofficeandhome.co.uk/wp-content/uploads/2020/10/shutterstock_172245692.jpg'}/>
                    <Link to={'/catalog'} className={'linkBlock'} onClick={() => onClickHandler('laptop')}>See
                        More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>Monitors</p><img
                    src={'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u3223qe/media-gallery/monitor-u3223qe-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3469&hei=3195&qlt=100,0&resMode=sharp2&size=3469,3195'}/>
                    <Link to={'/catalog'} className={'linkBlock'} onClick={() => onClickHandler('monitor')}>See
                        More</Link></div>
            </div>
            <div className={'block-2'}>
                <div className={'smallBlock'}><p className={'nameBlock'}>TCL 32" 4K | $134.95</p><img
                    src={'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjNhY2Q4ZDgt/NjNhY2Q4ZDgt-YjkxMTliODct-w379._SY304_CB633776880_.jpg'}/>
                    <Link to={'/fullItem?item=28'} className={'linkBlock'}>See More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>Smart TVs as low as $399.99</p><img
                    src={'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjNhY2Q4ZDgt/NjNhY2Q4ZDgt-OTk0MTNjOTYt-w379._SY304_CB633621377_.jpg'}/>
                    <Link to={'/fullItem?item=32'} className={'linkBlock'}>See More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>ATYME 40" Smart TV | $470</p>
                    <img
                        src={'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NjNhY2Q4ZDgt/NjNhY2Q4ZDgt-ZjdmYzI4MWIt-w379._SY304_CB633769411_.jpg'}/>
                    <Link to={'/catalog'} className={'linkBlock'}>See More</Link></div>
                <div className={'smallBlock'}><p className={'nameBlock'}>AMD</p><img
                    src={'https://m.media-amazon.com/images/I/616VM20+AzL._AC_SX425_.jpg'}/>
                    <Link to={'/fullItem?item=25'} className={'linkBlock'}>See More</Link></div>
            </div>
        </div>
    );
};

export default TopBlock;