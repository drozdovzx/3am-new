import React, {useState} from 'react';
import Th from "../images/logo.svg";
import Logo from "../images/3amtext.svg";
import Strips from "../images/Main-menu-strips.svg";
import Cart from "../Components/Cart"
import ToTopBtn from "../Components/ToTopBtn"
import MenuItem from "../Components/MenuItem";
import { LOCALES } from "../i18n/locales";
import {HashLink} from "react-router-hash-link";
import {FormattedMessage} from "react-intl";

const languages = [
    { name: 'eng', valueLang:"en-US", code: LOCALES.ENGLISH },
    { name: 'est', valueLang:"et-EE", code: LOCALES.ESTONIAN },
    { name: 'rus', valueLang:"ru-RU", code: LOCALES.RUSSIAN }
]

const Header = ({ currentLocale, handleChange }) => {
    const [state, setState] = useState(false);
    const mobMenuClick = () => {
        if (state) {
            setState(false);
        } else {
            setState(true);
        }
    }
    const langCheck = () => {
        for (let i = 0; i < languages.length; i++) {
            if (languages[i].valueLang === currentLocale){
                let a = languages[i].name;
                return(
                    <button className="langBtn" style={state ? {transitionDelay: '.3s', backgroundColor: 'white'} : {backgroundColor: 'transparent'}}>
                        <img alt={languages[i].valueLang} src={"../images/"+a+".svg"}/>
                    </button>
                )
            }
        }
    }
    const langChange = () => {
        const dataCollection = [];
        for (let i = 0; i < languages.length; i++) {
            if (languages[i].valueLang !== currentLocale){
                let a = languages[i].name;
                dataCollection.push(
                <button id={languages[i].code}
                        className="langBtn"
                        key={languages[i].code}
                        value={languages[i].code}
                        style={state ? {transitionDelay: '.3s', backgroundColor: 'white'} : {backgroundColor: 'transparent'}}>
                    <img className="=langImg" alt={languages[i].code} src={"../images/"+a+".svg"} onClick={handleChange}/>
                </button>
                )
            }
        }
        return dataCollection;
    }
    return (
        <section id="myHeader" className="header">

            <div className="lang">
                <div id="langChange" className="lang-change">
                    {langCheck()}
                    <div className="lang-change-window">
                        {langChange()}
                    </div>
                </div>
            </div>

            <div className="headerContainer">
                <ul>
                    <li>
                        <FormattedMessage id="menu_item_1"/>
                    </li>
                    <li>
                        <FormattedMessage id="menu_item_2"/>
                    </li>
                    <li>
                        <FormattedMessage id="menu_item_3"/>
                    </li>
                </ul>

                <button className="logo" id="logo">
                    <HashLink to="/#sec-one">
                        <img className="logo-img" alt="Logo" src={Logo}/>
                    </HashLink>
                </button>

                <ul>
                    <li>
                        <FormattedMessage id="menu_item_4"/>
                    </li>
                    <li>
                        <FormattedMessage id="menu_item_2"/>
                    </li>
                    <li>
                        <FormattedMessage id="menu_item_5"/>
                    </li>
                </ul>
            </div>

            <Cart state={state}/>

            {/*
            <div style={state ? {left: '100vw'} : {transitionDelay: '.3s', left: '0'}} id="white-back"/>
            <button className="menu-btn" id="menu-btn" onClick={mobMenuClick}>
                <img style={state ? {filter: 'invert(1)'} : {filter: 'invert(0)'}} alt="Strips" src={Strips} className="menu-btn-img"/>
            </button>

            <ToTopBtn/>
            */}
        </section>


    )
}
export default Header;