"use client"
import React from 'react';
import dynamic from 'next/dynamic'
const Slider = dynamic(() => import('react-slick'), {
    ssr: false,
});
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./shopCarousel.module.css"
import "./shopCarousel.css"
import Image from 'next/image';

const ShopCarousel = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,

        prevArrow: (
            <Image
                src="/assets/NavLeft.png"
                alt="Previous"
                width={72}
                height={72}
                // className="arrow"
                priority
            />
        ),

        nextArrow: (
            <Image
                src="/assets/NavRight.png"
                alt="Next"
                width={72}
                height={72}
                // className="arrow"
                priority
            />
        )
    };

    return (
        <Slider {...settings} className={styles.slider}>
            {data.map((item, index) => (
                <div className={styles.imageSection} key={index} >
                    <Image
                        src={item.image}
                        width={item.width}
                        height={item.height}
                        alt="Product"
                        className={`${styles.image} ${styles[item.class]}`}
                        priority
                    />
                </div>
            ))}
        </Slider >
    );
};

export default ShopCarousel
