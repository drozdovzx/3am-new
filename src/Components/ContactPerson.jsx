import {FormattedMessage} from "react-intl";
import handleViewport from "react-in-viewport";

const Text = (props: { inViewport: boolean, text: string }) => {
    const { inViewport, forwardedRef } = props;
    const translate = inViewport ? 'translateY(0)' : 'translateY(15vh)';
    const opacity = inViewport ? '1' : '0';
    const text1 = 'contact1_' + props.text;
    const text2 = 'contact2_' + props.text;
    return (
        <div className="text-about viewport-block animDuration" style={{position: 'relative', transform: translate, opacity: opacity}} ref={forwardedRef}>
            <h1><FormattedMessage id = { text1 }/></h1>
            <h2><FormattedMessage id = { text2 }/></h2>
            <div className="buttonContainer">
            </div>
        </div>
    );
};

const Img = (props: { inViewport: boolean, src: any}) => {
    const { inViewport, forwardedRef } = props;
    const translate = inViewport ? 'translateY(0)' : 'translateY(15vh)';
    const opacity = inViewport ? '1' : '0';
    const src = props.src;
    return (
        <div className="about-con-pic animDuration" style={{position: 'relative', transform: translate, opacity: opacity}} ref={forwardedRef}>
            <div><img src={src} alt="cookies-2"/></div>
        </div>
    );
};

const ViewportText = handleViewport(Text, /** options: {}, config: {} **/);
const ViewportImg = handleViewport(Img, /** options: {}, config: {} **/);


const ContactPerson = ({ src, text }) => {
    return (
        <section className="about size mob-el aboutReverse" id="sec-two">
            {/*<div style={{display: 'none'}} className="dividedBack"/>*/}
            <div className="about-con">
                <ViewportImg src={src}/>
                <div className='divider'>
                    <div className="dividerPoint" style={{top: "-4%"}}/>
                    <div className="dividerPoint" style={{bottom: "-102%"}}/>
                </div>
                <ViewportText text={text}/>
            </div>
        </section>
    )
}
export default ContactPerson;