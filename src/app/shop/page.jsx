import React from 'react'
import styles from "./page.module.css"
import ShopCarousel from '@/components/shopCarousel/ShopCarousel'
import Benefits from '@/components/benefits/Benefits'
import Overview from '@/components/overview/Overview'
import Reviews from '@/components/reviews/Reviews'
import Link from 'next/link'

const Shop = () => {

    const shopData = [
        {
            id: "1",
            image: "/assets/Device1.png",
            width: 470,
            height: 470,
            class: "normal"
        },
        {
            id: "2",
            image: "/assets/Device2.png",
            width: 470,
            height: 470,
            class: "normal"
        },
        {
            id: "3",
            image: "/assets/DeviceSide.png",
            width: 120,
            height: 470,
            class: "sideView"
        },
        {
            id: "4",
            image: "/assets/DeviceTilted.png",
            width: 470,
            height: 470,
            class: "normal"
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.slideProduct}>
                    <span className={styles.head}>MasterTag</span>
                    <div className={styles.pCarousel}>
                        <ShopCarousel data={shopData} />
                    </div>
                </div>
                <div className={styles.liner}>
                    <div className={styles.left}>
                        <span className={styles.info}>Overview</span>
                        <span className={styles.info}>Tech specs</span>
                    </div>
                    <div className={styles.right}>
                        <span className={styles.amount}>₹999</span>
                        <button className={styles.btn1}>
                            <span className={styles.calc}><b>--</b></span>
                            <span className={styles.calc}>1</span>
                            <span className={styles.calc}><b>+</b> </span>
                        </button>
                        <Link href="/shop/shipping" className={styles.shopLink}><button className={styles.btn2}>Shop now</button></Link>
                    </div>
                </div>
            </div>

            <Benefits />
            <div className={styles.overview}>
                <Overview />
            </div>
            <Reviews />
        </div>
    )
}

export default Shop