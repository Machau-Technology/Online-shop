"use client"
import React from 'react'
import styles from "./reviews.module.css"
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Slider = dynamic(() => import('react-slick'), {
    ssr: false,
});
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {

    const data = [
        {
            name: "Atul Singhal",
            position: "Founder & CEO, Cuvette Tech",
            star: "⭐⭐⭐⭐⭐",
            pic: "/assets/Review1.png",
            review: "“MasterTag is a super helpful product, the app keeps me connected to my belongings at all times, and I can locate them with just a click!”"
        },
        {
            name: "Amlan Kumar Sahu",
            position: "Analyst, AB InBev",
            star: "⭐⭐⭐⭐⭐",
            pic: "/assets/Review2.png",
            review: "“Most of the time I leave my phone on silent, but the MasterTag never fails to locate it. The reverse phone lookup is fantastic. MasterTag is a life saver.”"
        },
        {
            name: "Sourav K Sanjeev",
            position: "Student, NIT Puducherry",
            star: "⭐⭐⭐⭐⭐",
            pic: "/assets/Review3.png",
            review: "“I once lost my wallet, which contained my cards & some cash. Now that I have the MasterTag connected, I can find it within seconds if I lose it.”"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    }

    return (
        <div className={styles.container}>
            <div className={styles.reviews}>
                <span className={styles.head1}>Master Reviews</span>
                <div className={styles.cards}>
                    {data.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <p className={styles.review}>
                                {item.review}
                            </p>
                            <div className={styles.person}>
                                <Image src={item.pic}
                                    alt='Person'
                                    width={73}
                                    height={73}
                                    className={styles.personPic}
                                />
                                <div className={styles.personInfo}>
                                    <span className={styles.name}>{item.name}</span>
                                    <span className={styles.position}>{item.position}</span>
                                    <span className={styles.star}>{item.star}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.sliderReviews}>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div className={styles.slide}>
                                <div className={styles.card} key={index}>
                                    <p className={styles.review}>
                                        {item.review}
                                    </p>
                                    <div className={styles.person}>
                                        <Image src={item.pic}
                                            alt='Person'
                                            width={73}
                                            height={73}
                                            className={styles.personPic}
                                        />
                                        <div className={styles.personInfo}>
                                            <span className={styles.name}>{item.name}</span>
                                            <span className={styles.position}>{item.position}</span>
                                            <span className={styles.star}>{item.star}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className={styles.linkSection}>
                <span className={styles.head1}>MasterTag App</span>
                <p className={styles.appInfo}>
                    Our user-friendly app will be available on Google Play
                    and the Apple App Store.
                </p>
                <div className={styles.btns}>
                    <Link href="">
                        <button className={styles.btn}>
                            <Image
                                src="/assets/Android.png"
                                alt="Android"
                                width={121}
                                height={37}
                                className={styles.phone}
                            />
                        </button>
                    </Link>

                    <Link href="">
                        <button className={styles.btn}>
                            <Image
                                src="/assets/Apple.png"
                                alt="Apple"
                                width={118}
                                height={36}
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Reviews