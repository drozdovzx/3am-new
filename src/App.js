import React, { useState, useEffect } from "react"
import {Header, SmoothScroll} from './Components/';
import {Home, List, Cart, Contacts } from "./pages";
import {Route} from 'react-router-dom';
import {IntlProvider} from 'react-intl'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'


const App = () => {

    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.ENGLISH
    }
    const [cookies, setCookies] = React.useState([]);
    const [currentLocale, setCurrentLocale] = React.useState(getInitialLocale());
    const handleChange = ({ target: { alt } }) => {
        setCurrentLocale(alt);
        localStorage.setItem('locale', alt)
    }
    React.useState(() => {
        fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
            setCookies(json.cookies);
        });
    }, [])

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
            <SmoothScroll>
                <IntlProvider messages={messages[getInitialLocale()]} locale={getInitialLocale()}
                              defaultLocale='LOCALES.ENGLISH'>
                    <Header currentLocale={currentLocale} handleChange={handleChange}/>
                    <Route exact path='/' render={() => <Home offsetY={offsetY}/>}/>
                    <Route exact path='/list' render={() => <List items={cookies}/>}/>
                    <Route exact path='/cart' render={() => <Cart items={cookies}/>}/>
                    <Route exact path='/contacts' render={() => <Contacts items={cookies}/>}/>
                    {/*<Footer/>*/}
                </IntlProvider>
            </SmoothScroll>
    );
}

export default App;
