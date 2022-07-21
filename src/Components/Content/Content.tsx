import React, {useCallback} from "react";
import {Carousel} from "../../utils/Carousel";
import {Link} from "react-router-dom";
import {signOut} from "../../redux/Login-Slice";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {useSelector} from "react-redux";
import {setCategory} from "../../redux/filter-slice";

export const Content: React.FC = () => {

    const dispatch = useAppDispatch()
    const {isAuth} = useSelector((state: StateType) => state.LoginSlice)


    const signOutClick = () => {
        dispatch(signOut())
    }
    const onClickHandler = useCallback((category: string) => {
        dispatch(setCategory(category))
    }, [])

    return (
        <div className={'container'}>

            <div className={'content'}>

                <div className={'blocks__relative'}>
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
                    <Carousel>
                        <img src={'https://m.media-amazon.com/images/I/91cqEsyjd-L._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81t-IstQ+ZL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/71DVgaO+EnL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/811ftjOO5FL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/71aLultW5EL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81e4jgomhKL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81FxtWFGiiL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81a5KHEkwQL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81nzxODnaJL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/81CEbNSfXiL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/71hZD6S5MmL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/51o4b5AdNLL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/61zGOvBSgAL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/711c-uf6AFL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/91EBoiR3+eL._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/8185mTvyhML._AC_SY200_.jpg'}/>
                        <img src={'https://m.media-amazon.com/images/I/91Q77BBgGbL._AC_SY200_.jpg'}/>
                    </Carousel>
                    <div className={'advertising'}>
                        <img src={'https://m.media-amazon.com/images/I/51iLgsYQyXL.jpg'}/>
                    </div>
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
                </div>

            </div>
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

        </div>
    )
}