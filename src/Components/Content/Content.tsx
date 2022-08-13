import React, {useCallback} from "react";
import {signOut} from "../../redux/Login-Slice";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {useSelector} from "react-redux";
import {setCategory} from "../../redux/filter-slice";
import TopBlock from "./TopBlock";
import BottomBlocks from "./BottomBlocks";
import ContentBottom from "./ContentBottom";
import ContentCarousel from "./ContentCarousel";

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
                    <TopBlock onClickHandler={onClickHandler}/>
                    <ContentCarousel/>
                    <div className={'advertising'}>
                        <img src={'https://m.media-amazon.com/images/I/51iLgsYQyXL.jpg'}/>
                    </div>
                    <BottomBlocks/>
                </div>
            </div>
            <ContentBottom signOutClick={signOutClick} isAuth={isAuth}/>
        </div>
    )
}