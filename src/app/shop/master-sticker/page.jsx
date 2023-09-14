"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import ShopCarousel from '@/components/shopCarousel/ShopCarousel'
import Benefits from '@/components/benefits/Benefits'
import Reviews from '@/components/reviews/Reviews'
import Link from 'next/link'
import StickOverview from '@/components/stickOverview/StickOverview'
import { useFormData } from '@/context/shoppingContext/ShoppingContext'

const MasterStickerShop = () => {

    const shopData = [
        {
            id: "1",
            image: "/assets/ShopStick1.svg",
            width: 577,
            height: 509,
            class: "sticker1"
        },
        {
            id: "2",
            image: "/assets/ShopStick2.svg",
            width: 577,
            height: 389,
            class: "sticker2"
        },
        {
            id: "3",
            image: "/assets/ShopStick3.svg",
            width: 577,
            height: 573,
            class: "sticker3"
        },
        {
            id: "4",
            image: "/assets/ShopStick4.svg",
            width: 577,
            height: 715,
            class: "sticker4"
        }
    ];

    const { formData, setFormData } = useFormData();
    const [tagCount, setTagCount] = useState(formData.tagCount);
    const [tagShop, setTagShop] = useState(formData.tagShop);
    const [stickerShop, setStickerShop] = useState(formData.stickerShop);

    const updateCategory = () => {
        setStickerShop(true);
        setTagShop(false);
        setFormData({ ...formData, stickerShop: true, tagShop: false });
    }

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.slideProduct}>
                    <span className={styles.head}>MasterSticker</span>
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
                        <button className={styles.btn1}>Free</button>
                        <Link
                            href="/shop/shipping"
                            className={styles.shopLink}
                        >
                            <button
                                className={styles.btn2}
                                onClick={updateCategory}
                            >
                                Buy now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Benefits />
            <div className={styles.overview}>
                <StickOverview />
            </div>
            <Reviews />
        </div>
    )
}

export default MasterStickerShop