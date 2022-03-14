import React from 'react';
import Inst from "../images/inst.svg";
import {FormattedMessage} from "react-intl";

const Footer = () => {
    return (
        <section className="footer">
            {/*<button className="soc-link"
            >
                <img alt="preloader1" src={Inst}/>
            </button>
            <div className="rights">
                <span>Created and designed by <a href="#">Aleksandr Drozdov</a> 2021</span>
            </div>*/}

            <div className="footerContainer">

                <div className="textFooter">
                    <div className="textFooterContainer">
                        <div className="footerHeader">
                            3AM <FormattedMessage id="welcome_2"/>
                        </div>
                        <div className="footerContent">
                            <div>
                                <div>
                                    <FormattedMessage id="footer_address"/>
                                </div>
                                <div>
                                    <FormattedMessage id="footer_address2"/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <FormattedMessage id="footer_tel"/>
                                </div>
                                <div>
                                    <FormattedMessage id="footer_email"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='divider' style={{height: '70%', margin: 'auto'}}>
                </div>

                <div className="textFooter">
                    <div className="textFooterContainer">
                        <div className="footerHeader">
                            <FormattedMessage id="footer_social"/>
                        </div>
                        <div className="footerContent">
                            <div>
                                <div>
                                    <FormattedMessage id="footer_contact"/>
                                </div>
                                <div>
                                    <FormattedMessage id="footer_buy"/>
                                </div>
                                <div>
                                    <FormattedMessage id="footer_about"/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <FormattedMessage id="footer_inst"/>
                                </div>
                                <div>
                                    <FormattedMessage id="footer_facebook"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}
export default Footer;