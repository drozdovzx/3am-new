import React from 'react';
import {FormattedMessage} from "react-intl";
import CartItem from "../Components/CartItem";
import {useDispatch, useSelector} from "react-redux";
import { clearCart, removeCartItem } from '../redux/actions/cart';
import {HashLink} from "react-router-hash-link";


function Cart() {
    const dispatch = useDispatch();
    const onClearCart = () => {
        const locale = localStorage.locale;
        let message = ''
        if (locale === 'en-US'){
            message = 'Are you sure?'
        }
        if (locale === 'ru-RU'){
            message = 'Вы уверены?'
        }
        if (locale === 'et-EE'){
            message = 'Kas te olete kindel?'
        }
        if (window.confirm(message)) {
            dispatch(clearCart());
        }
    };
    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id));
    }
    const {totalPrice, totalCount, items} = useSelector(({cart}) => cart);
    const addedCookies = Object.keys(items).map(key => {
        return items[key].items[0];
    });
    return(
        <div className="cartContainer">
            {totalCount ?
                <div className="cartInnerContainer">
                    <span><FormattedMessage id="cart_1"/></span>
                    <div className="clearCart" onClick={onClearCart}><span><FormattedMessage id="cart_4"/></span></div>
                    <ul>
                        {
                            addedCookies.map(obj =>
                                <CartItem
                                    id={obj.id}
                                    key={obj.name}
                                    name={obj.name}
                                    urlMain={obj.urlMain}
                                    categoryPrice={items[obj.id].categoryPrice}
                                    categoryLength={items[obj.id].items.length}
                                    onRemove = {onRemoveItem}
                                />)
                        }
                    </ul>

                    <div className="cartCounters">
                        <div className="cookieCount"><FormattedMessage id="cart_2"/>: {totalCount}</div>
                        <div className="cookieCount"><FormattedMessage id="cart_3"/>: {totalPrice}</div>
                    </div>
                    <div className="cartOrder">
                        <button className="listContainerBtn"><FormattedMessage id="cart_order"/></button>
                    </div>
                </div>
                : <div className="emptyCart">
                    <div className="emptyCartText">
                        <span><FormattedMessage id="empty_cart"/></span>
                    </div>
                    <div className="emptyCartBtn">
                        <HashLink to="/list" className="buttonToMain">
                            <span><FormattedMessage id="empty_cart1"/></span>
                        </HashLink>
                    </div>
                </div>
            }
        </div>
    );
}
export default Cart;