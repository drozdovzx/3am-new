import toTopBtn from "../images/toTopBtn.svg";
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [state, setState] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 10) {
            setState(true);
        } else {
            setState(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: "100px",
            behavior: "smooth"
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div onClick={scrollToTop} className={`topBtn ${state ? " topBtnMargin" : ""}`} title="Go to top">
            <img alt="toTopBtn" src={toTopBtn}/>
        </div>
    );
}

