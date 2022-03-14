import React, {useState} from 'react';
import { Footer, ContactPerson, Border } from "../Components";
import Alex from "../images/Alex.jpg";
import Artjom from "../images/Artjom.jpg";
import Fara from "../images/Fara.jpg";
import Mark from "../images/Mark.jpg";

const Contacts = () => {
    return (
        <div>
            <ContactPerson src={Alex} text="alex"/>
            <Border />
            <ContactPerson src={Artjom} text="artjom"/>
            <Border />
            <ContactPerson src={Fara} text="fara"/>
            <Border />
            <ContactPerson src={Mark} text="mark"/>
            <Border />
            <Footer />
        </div>
    )
};
export default Contacts;