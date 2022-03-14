import React from 'react';
import {} from '../Components/';
import { ListItem } from '../Components/';
import {FormattedMessage} from "react-intl";
import {useDispatch, useSelector} from "react-redux";

function List({ items }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(({ cart }) => cart.items);
    console.log(cartItems);
    const addToCart = (obj) => {
        dispatch({
            type: 'ADD_COOKIE_CART',
            payload: obj,
        })
        console.log(obj);
    };
    return (
        <div className="listContainerMain">
            <span className="listContainerTitle"><FormattedMessage id="list_name_1"/></span>
            <ul className="listContainer">
                {items.map(obj => (
                    <ListItem
                        onAddCookie={addToCart}
                        key={obj.id}
                        {...obj}
                        addedCookies={cartItems[obj.id] && cartItems[obj.id].items.length}
                    />
                ))
                }
            </ul>
        </div>
    );
}

export default List;