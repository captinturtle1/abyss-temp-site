import React, { useState, useEffect } from 'react';

const Background = () => {
    const [scrollNav, setScrollNav] = useState(0);

    const changeNav = () => {
        if (window.scrollY >= 230) {
          setScrollNav(window.scrollY);
        } else {
          setScrollNav(window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    console.log(scrollNav);

    return (
        <>
            <img src="fullPageBg.png" className="background-element"></img>
        </>
    );
}

export default Background;