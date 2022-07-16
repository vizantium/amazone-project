import React, {ReactNode, useState} from 'react';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

type carouselType = {
    children: ReactNode[]
}

export const Carousel: React.FC<carouselType> = ({children}) => {
    const [offset, setOffset] = useState(0)
    const [pages, setPages] = useState([])

    const handleLeftArrow = () => {
        if (offset)
            setOffset(offset + 420)
    }

    const handleRightArrow = () => {
        if (offset > -3360)
            setOffset(offset - 420)
    }

    return (

        <div className={'main-container'}>
            <span>Top Sellers in Books for you</span>
            <div className={'contain'}>
                <div className={'arrow__left__block'} onClick={handleLeftArrow}>
                    <FaChevronLeft className={'arrow__left'}/>
                </div>
                <div className={'window'}>
                    <div className={'all-pages-container'}
                         style={{transform: `translateX(${offset}px)`}
                         }
                    >
                        {children}
                    </div>
                </div>
                <div className={'arrow__right__block'} onClick={handleRightArrow}>
                    <FaChevronRight className={'arrow__right'}/>
                </div>
            </div>
        </div>
    )
};