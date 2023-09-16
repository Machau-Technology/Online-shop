"use client"
import React from 'react';
import dynamic from 'next/dynamic'
const Slider = dynamic(() => import('react-slick'), {
    ssr: false,
});
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.css"

const Carousel = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        
        appendDots: dots => (
            <div style={{ position: 'absolute', bottom: '45px', left: '50%', transform: 'translateX(-50%)' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {dots.map((dot, index) => (
                        <li key={index} style={{ display: 'inline-block', margin: '0 5px' }}>
                            {dot}
                        </li>
                    ))}
                </ul>
            </div>
        ),
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
