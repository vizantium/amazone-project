import React, {useEffect, useRef, useState} from "react";
import qs from "qs";
import {typeItem} from "../../redux/catalog-Slice";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {addItem} from "../../redux/cart-slice";
import {useSelector} from "react-redux";
import MainInfo from "./MainInfo";
import FullItemHeader from "./FullItemHeader";


type infoType = {
    size?: Array<string>
    style?: Array<string>
}

const FullItem: React.FC = () => {
    const [item, setItem] = useState<typeItem>()
    const [activeType, setActiveType] = useState(0)
    const cartItem = useSelector((state: StateType) => state.cartSlice.items.find(obj => obj.item?.info.id === item?.info.id))
    const dispatch = useAppDispatch()
    const refDiv = useRef<HTMLDivElement>(null)
    const count = cartItem ? cartItem.count : 0
    const {isAuth} = useSelector((state:StateType) => state.LoginSlice)
    const navigate = useNavigate()
    const isMounted = useRef(false)

    const onClickAdd = () => {
        if (!isAuth) {
            navigate('/login')
        } else {
            const options = refDiv.current?.outerText
            const itemAdd = {item, count, options}

            dispatch(addItem(itemAdd))
        }
    }

    useEffect(() => {
            let curId = ''
            if (window.location.search) {
                const params = (qs.parse(window.location.search.substring(1)) as unknown) as any
                curId = params.item
            }
            window.scrollTo(0, 0)

            async function getFullItem() {
                try {
                    let {data} = await axios.get<typeItem[]>(`https://62c84bd50f32635590d618e2.mockapi.io/computers`)
                    data = data.filter(item => item.info.id === curId)
                    if (data) {
                        setItem(data[0])
                    }
                } catch (error) {
                    alert(error)
                }
            }
            getFullItem()
    }, [])

    const discount = Number(item?.price.toString().slice(0,2))

    if (!item) {
        return <div>Loading...</div>
    }

    let info = item.info
    const style = Object.keys(item.info).map((key: string, index) =>
        <div key={index} className={'fullItem__style__block'}>
            {key !== 'id' && key !== 'brands' &&
                <div className={'fullItem__style'}>
                    <div ref={refDiv} className={'fullItem__style__name__block'} ><span
                        className={'fullItem__style__name'}>{key[0].toUpperCase() + key.slice(1)}: </span>{item.info[key as keyof infoType][activeType]}
                    </div>
                    <div className={'fullItem__style__option'}>{info[key as keyof infoType].map((elem, index) =>
                        <div onClick={() => setActiveType(index)} key={index}
                             className={activeType === index ? 'fullItem__style__option__active' : 'fullItem__style__option__elem'}>{elem}</div>)}</div>
                </div>
            }
        </div>
    )


    return (
        <div className={'fullItem__container'}>
            <FullItemHeader/>
            <div className={'fullItem__cat'}>{item.category}</div>
            <MainInfo item={item} discount={discount} style={style} onClickAdd={onClickAdd} />
            <div className={'fullItem__line'}/>
            <div className={'question'}>
                <div className={'title__q'}>Have a question?</div>
                <div className={'small__q'}>Find answers in product info, Q&As, reviews</div>
                <input placeholder={'Type your question or keyword'} className={'input__q'}/>
            </div>
        </div>
    )
}

export default FullItem
