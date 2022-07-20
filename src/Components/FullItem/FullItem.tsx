import React, {useEffect, useRef, useState} from "react";
import qs from "qs";
import {typeItem} from "../../redux/catalog-Slice";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {addItem} from "../../redux/cart-slice";
import {useSelector} from "react-redux";
import {PriceDiv} from "../../utils/priceDiv";


type infoType = {
    size?: Array<string>
    style?: Array<string>
}

export const FullItem: React.FC = () => {
    const [item, setItem] = useState<typeItem>()
    const [activeType, setActiveType] = useState(0)
    const cartItem = useSelector((state: StateType) => state.cartSlice.items.find(obj => obj.item.info.id === item?.info.id))
    const dispatch = useAppDispatch()
    const refDiv = useRef<HTMLDivElement>(null)
    const count = cartItem ? cartItem.count : 0
    const {isAuth} = useSelector((state:StateType) => state.LoginSlice)
    const navigate = useNavigate()
    console.log(count)

    const onClickAdd = () => {
        const options = refDiv.current?.outerText
        console.log(options)
        const itemAdd = { item, count, options}

        dispatch(addItem(itemAdd))
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
                    console.log(data, curId, item)
                } catch (error) {
                    alert(error)
                }
            }

            getFullItem()



    }, [])



    const getRandomIntInclusive = (min: number, max: number) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

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
            <div className={'fullItem__cat'}>{item.category}</div>
            <div className={'fullItem__mainInfo'}>
                <div className={'fullItem__photo'}><img src={item.imageUrl}/></div>
                <div className={'fullItem__info'}>
                    <div className={'fullItem__name'}>{item.name}</div>
                    <div className={'fullItem__visit'}>Visit the store</div>
                    <div className={'fullItem__infoRating'}>
                        <div>
                            <div className={`item__rating__${item.rating}`}/>
                        </div>
                        <div className={'fullItem__ratings'}>{item.ratings} ratings | 1000+ answered questions</div>
                    </div>
                    <div className={'fullItem__line'}/>
                    <div className={'fullItem__price'}>
                        <div className={'fullItem__price__sale'}>
                            <div className={'fullItem__discount'}>-{discount}%</div>
                            <PriceDiv price={item.price}/>
                        </div>
                        <div className={'fullItem__listPrice'}>List price: $<span
                            className={'listPrice'}>{Number(item.price.toString().slice(0, -2)) + (Number(item.price.toString().slice(0, -2)) * (discount / 100))}</span>
                        </div>
                    </div>
                    <div className={'fullItem__styleSize'}>
                        {style}
                    </div>
                    <div className={'fullItem__line'}/>
                    <div>
                        <div className={'aboutName'}>About this item</div>
                        <ul className={'aboutItem'}>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem justo, fringilla quis
                                vestibulum sed, sollicitudin sit amet sapien. Fusce tincidunt imperdiet aliquet. Proin
                                posuere ornare nulla et posuere. Aliquam ornare tristique nibh, nec porttitor elit
                                volutpat ac. Aliquam tristique sagittis sem, a fringilla diam bibendum ac. Proin lacinia
                                ligula eget est accumsan fermentum. Morbi viverra, libero quis iaculis
                            </li>
                            <li>Cras et bibendum sapien. Nullam bibendum magna id interdum dictum. Fusce sodales
                                volutpat urna, non venenatis mauris tincidunt quis. Ut a nibh nulla. Integer volutpat
                                nisl in purus ultrices bibendum. Quisque varius, nisi non scelerisque faucibus, sapien
                                nisl efficitur justo, vel lobortis neque urna cursus arcu. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Nulla malesuada, massa ac vulputate rutrum, diam mi
                                volutpat nibh, quis aliquet t
                            </li>
                            <li>Sed dignissim, erat et suscipit auctor, diam velit sagittis libero, vel tincidunt enim
                                urna at ante. Nullam volutpat placerat magna, et pharetra purus hendrerit id. Cras arcu
                                urna, pretium eu scelerisque vitae, viverra et risus. Sed lobortis arcu vitae dolor
                                tincidunt auctor. Etiam posuere id libero eu elementum. In ac sodales a
                            </li>
                            <li>Suspendisse facilisis nisl quis nulla ultrices tincidunt. Vivamus quis dolor ut elit
                                eleifend mollis. Duis porttitor nisi et libero faucibus, quis porta metus aliquet. Nulla
                                eu luctus massa. Donec vehicula velit nisi, at consequat diam rhoncus a. Fusce rutrum
                                pretium sodales. Proin venenatis ultricies nisi, cursus efficitur enim vehicula vitae.
                                Phasellus sed odio vitae ligula iaculis ultricies. Aenean interdum consequat mi, ac
                                sagittis risus.
                            </li>
                            <li>Duis condimentum, justo maximus tincidunt vehicula, dolor metus lacinia ipsum, in varius
                                diam ex ut odio. Integer libero elit, eleifend vel sagittis quis, dignissim eu metus.
                                Phasellus sagittis nulla sit amet mi varius euismod. Cras nulla sem, commodo sit
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'fullItem__buy'}>
                    <div className={'buy__block'}>
                        <PriceDiv price={item.price}/>
                        <div className={'buy__text__1'}>$6.76 delivery <span className={'buy__text__bold'}>August 9 - 30.</span> <span className={'buy__det'}>Details</span></div>
                        <div className={'buy__text__2'}>Or fastest delivery <span className={'buy__text__bold'}>July 25 - 28.</span> <span className={'buy__det'}>Details</span></div>
                        <div className={'buy__text__3'}><span className={'buy__det'}>Deliver to Moldova, Republic of</span></div>
                        <div className={'buy__text__4'}>Only 2 left in stock - order soon.</div>
                        <div className={'buy__text__5'} onClick={onClickAdd}>Add to cart</div>
                        <div className={'buy__text__6'}><span className={'buy__det'}>Secure transaction</span></div>
                        <div className={'buy__text__7'}>Ships from M + L</div>
                        <div className={'buy__text__8'}>Return policy: <span className={'buy__det'}>Eligible for Return, Refund or Replacement within 30 days of receipt</span></div>
                    </div>

                </div>
            </div>
            <div className={'fullItem__line'}/>
            <div className={'question'}>
                <div className={'title__q'}>Have a question?</div>
                <div className={'small__q'}>Find answers in product info, Q&As, reviews</div>
                <input placeholder={'Type your question or keyword'} className={'input__q'}/>
            </div>
        </div>
    )
}

