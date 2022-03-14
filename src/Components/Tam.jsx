import React from 'react';
import Team from '../images/team.jpg';
import {FormattedMessage} from "react-intl";
import {HashLink} from "react-router-hash-link";
import handleViewport from 'react-in-viewport';

const Text = (props: { inViewport: boolean }) => {
    const { inViewport, forwardedRef } = props;
    const translate = inViewport ? 'translateY(0)' : 'translateY(15vh)';
    const opacity = inViewport ? '1' : '0';
    return (
        <div className="text-about viewport-block animDuration" style={{position: 'relative', transform: translate, opacity: opacity}} ref={forwardedRef}>
            <h1><FormattedMessage id = "tam_title"/></h1>
            <h2><FormattedMessage id = "tam_about"/></h2>
            <div className="buttonContainer">
                <HashLink to="/contacts" className="btnSubLine">
                    <FormattedMessage id="order_button"/>
                </HashLink>
            </div>
        </div>
    );
};
const Img = (props: { inViewport: boolean }) => {
    const { inViewport, forwardedRef } = props;
    const translate = inViewport ? 'translateY(0)' : 'translateY(15vh)';
    const opacity = inViewport ? '1' : '0';
    return (
        <div className="about-con-pic animDuration" style={{position: 'relative', transform: translate, opacity: opacity}} ref={forwardedRef}>
            <img src={Team} alt="cookies-2"/>
        </div>
    );
};


const ViewportText = handleViewport(Text, /** options: {}, config: {} **/);
const ViewportImg = handleViewport(Img, /** options: {}, config: {} **/);



const About = () => {
    return (
        <section className="about size mob-el" id="sec-two">
            {/*<div style={{display: 'none'}} className="dividedBack"/>*/}
            <div className="about-con">
                <ViewportImg />
                <div className='divider'>
                    <div className="dividerPoint" style={{top: "-4%"}}/>
                    <div className="dividerPoint" style={{bottom: "-102%"}}/>
                </div>
                <ViewportText />
            </div>
        </section>
    )
}
export default About;