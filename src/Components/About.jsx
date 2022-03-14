import React from 'react';
import Cookies2 from '../images/cookies-2.jpg';
import {FormattedMessage} from "react-intl";
import handleViewport from 'react-in-viewport';

const Text = (props: { inViewport: boolean }) => {
    const { inViewport, forwardedRef } = props;
    const translate = inViewport ? 'translateY(0)' : 'translateY(15vh)';
    const opacity = inViewport ? '1' : '0';
    return (
            <div className="text-about viewport-block animDuration" style={{position: 'relative', transform: translate, opacity: opacity}} ref={forwardedRef}>
                <h1><FormattedMessage id = "about_1"/></h1>
                <h2><FormattedMessage id = "about_2"/></h2>
            </div>
    );
};
const Img = (props: { inViewport: boolean }) => {
    const { inViewport, forwardedRef } = props;
    const translate = inViewport ? 'translateY(0)' : 'translateY(15vh)';
    const opacity = inViewport ? '1' : '0';
    return (
        <div className="about-con-pic animDuration" style={{position: 'relative', transform: translate, opacity: opacity}} ref={forwardedRef}>
            <img src={Cookies2} alt="cookies-2"/>
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
                <ViewportText />
                <div className='divider'>
                    <div className="dividerPoint" style={{top: "-4%"}}/>
                    <div className="dividerPoint" style={{bottom: "-102%"}}/>
                </div>
                <ViewportImg />
            </div>
        </section>
    )
}
export default About;