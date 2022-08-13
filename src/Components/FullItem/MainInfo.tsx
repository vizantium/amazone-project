import React from 'react';
import {PriceDiv} from "../../utils/priceDiv";
import {typeItem} from "../../redux/catalog-Slice";

type MainInfoType = {
    item: typeItem,
    discount: number,
    style: JSX.Element[],
    onClickAdd: () => void
}

const MainInfo:React.FC<MainInfoType> = ({item, discount, style, onClickAdd}) => {



    return (
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
    );
};

export default MainInfo;