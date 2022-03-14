import React from 'react';
import {FormattedMessage} from "react-intl";


function CartItem({id, imageUrl, name, text, urlMain, categoryPrice, categoryLength, onRemove}) {
    const handleRemoveClick = () => {
        onRemove(id);
    }
    return (
        <li>
            <div className="cartListImg">
                <img src={urlMain} alt={urlMain}/>
            </div>
            <div className="cartContainerText">
                <div className="cartContainerHeader"><FormattedMessage id={name}/></div>
                <div className="cartContainerContent"><FormattedMessage id="total_amount"/> -
                    <input type="number" defaultValue={categoryLength}/><FormattedMessage id="tk"/>
                </div>
                <div className="cartContainerContent"><FormattedMessage id="total_price"/> - {categoryPrice}€</div>
                <button className="listContainerBtn" onClick={handleRemoveClick}>
                    <FormattedMessage id="remove_from_cart"/>
                </button>
            </div>
        </li>
    )
}
export default CartItem;