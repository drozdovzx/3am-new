import React from 'react';
import CartImg from '../images/cart.svg';
import {HashLink} from "react-router-hash-link";
import {useSelector} from "react-redux";

const Cart = ({state}) => {

    const {totalPrice} = useSelector(({ cart }) => cart);

    return(
        <HashLink to="/cart">
        <div className="cartBtnContainer">
            <div className="cartBtnImg">
                <img style={state ? {filter: 'invert(1)'} : {transitionDelay: '.3s', filter: 'invert(1)'}} alt="cartImg" src={CartImg}/>
            </div>
            {/*<div className="cartBtnSum">
                <span style={state ? {filter: 'invert(1)'} : {transitionDelay: '.3s', filter: 'invert(1)'}}>
                    {totalPrice} €
                </span>
            </div>*/}
        </div>
        </HashLink>
    )

}
export default Cart;