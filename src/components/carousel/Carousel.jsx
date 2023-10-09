"use client"
import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic'
// const Slider = dynamic(() => import('react-slick'), {
//     ssr: false,
// });
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.css"

const Carousel = ({ items }) => {

    const [showDots, setShowDots] = useState(false);

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 464) {
                setShowDots(false);
            } else {
                setShowDots(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: showDots,
        infinite: true,
        arrows: false,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };

    return (
        <Slider {...settings}>
            {items.map((item, index) => (
                <div key={index}>
                    {item.component}
                </div>
            ))}
        </Slider>
    );
};

export default Carousel
