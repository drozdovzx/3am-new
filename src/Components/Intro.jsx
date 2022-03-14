import React from 'react'
import Text from "../images/3amtext.svg";
import Pic from "../images/3ampic.jpg";
import {HashLink} from "react-router-hash-link";
import {FormattedMessage} from "react-intl";
import Logo from "../images/logo.svg";
import handleViewport from "react-in-viewport";


const shopPoints = (props: { inViewport: boolean }) => {
    const { inViewport, forwardedRef } = props;
    const scale = inViewport ? '' : 'scale(0)';
    const opacity = inViewport ? '1' : '0';
    return (
    <div className="shopPoints animDuration" style={{transform: scale, opacity: opacity}} ref={forwardedRef}/>
    );
};

const ShopPoints = handleViewport(shopPoints, /** options: {}, config: {} **/);


const Intro = ({ offsetY }) => {
    return (
        <section className="intro" name="myScrollToElement" id="sec-one">
            <div className="intro-text">
                <div className="frstImg"
                     style={{transform: `translateY(-${offsetY * 1.4}px)`}}
                >
                    <FormattedMessage id = "welcome_1"/>
                    <br/>
                    <span>3AM </span>
                    <FormattedMessage id = "welcome_2"/>
                </div>
                <img className="secImg" alt="3ampic" src={Pic}
                     style={{transform: `translate(-50%, -${offsetY * 0.8}px)`}}
                />
            </div>

            <div className="introButtonContainer">
                <ShopPoints />
                <ShopPoints />
                <ShopPoints />
                <div className="shop">
                    <HashLink to="/list">
                        <span><FormattedMessage id="order_button"/></span>
                    </HashLink>
                </div>
            </div>

            <div className="introNool"/>

            <div className="aboutMoto1"  style={{transform: `translateY(-${offsetY * 1.2}px)`}}>
                <FormattedMessage id = "about_3"/>
            </div>
            <div className="aboutMoto2"  style={{transform: `translateY(-${offsetY * 1.2}px)`}}>
                <FormattedMessage id = "about_4"/>
            </div>
        </section>
    )
}
export default Intro;