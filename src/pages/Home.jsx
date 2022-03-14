import React, {useState} from 'react';
import { Intro, About, Contact, TwoWays, Tam, Border } from '../Components/';
import Footer from "../Components/Footer";


const Home = ({ offsetY }) => {
    return (
        <div>
            <Intro offsetY={offsetY}/>
            <Border />
            <About/>
            <Border />
            <Contact />
            <Border />
            <Tam offsetY={offsetY}/>
            <Border />
            <Footer />
            {/*<Intro />
            <Contact />
            <TwoWays />
            <About />
            <Tam />*/}
        </div>
    )
}
export default Home;