import React, { useEffect, useRef } from "react";
import { Switch, Route, withRouter } from 'react-router-dom';

import "./SmoothScroll.css";
import useWindowSize from "../hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
    // 1.
    const windowSize = useWindowSize();

    //2.
    const scrollingContainerRef = useRef();

    // 3.
    const data = {
        ease: 0.05,
        current: 0,
        previous: 0,
        rounded: 0,
    };

    // 4.
    useEffect(() => {
        setBodyHeight();
    }, [windowSize.height]);

    const setBodyHeight = () => {
        document.body.style.height = `${
            scrollingContainerRef.current.getBoundingClientRect().height
        }px`;
    };

    // 5.
    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    }, []);

    const smoothScrollingHandler = () => {
        setBodyHeight();
        data.current = window.scrollY;
        data.previous += Math.trunc(data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;
        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
        // Recursive call
        requestAnimationFrame(() => smoothScrollingHandler());
    };

    return (
        <div className="parent">
            <div ref={scrollingContainerRef}>{children}</div>
            <div className="parentStrips"/>
            <div className="parentStrips"/>
        </div>
    );
};

export default withRouter(SmoothScroll);