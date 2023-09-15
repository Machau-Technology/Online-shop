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
    const [stickerCount, setStickerCount] = useState(formData.stickerCount);
    const [tagShop, setTagShop] = useState(formData.tagShop);
    const [stickerShop, setStickerShop] = useState(formData.stickerShop);
    const [stickerPrice, setStickerPrice] = useState(formData.stickerPrice);

    const updateStickerCount = (count) => {

        if (count < 1) {
            return;
        }

        setStickerCount(count);
        setStickerPrice(count * 99);
        setFormData({ ...formData, stickerCount: count, stickerPrice: count * 99 });
    };

    const updateCategory = () => {

        setStickerShop(true);
        setTagShop(false);
        setStickerPrice(stickerCount * 99);
        setFormData({ ...formData, stickerShop: true, tagShop: false, stickerPrice: stickerCount * 99 });
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
                        <span className={styles.amount}>₹{stickerPrice}</span>
                        <button className={styles.btn1}>
                            <span
                                className={styles.calc}
                                onClick={() => updateStickerCount(stickerCount - 1)}
                            ><b>--</b></span>
                            <span className={styles.calc}>{stickerCount}</span>
                            <span
                                className={styles.calc}
                                onClick={() => updateStickerCount(stickerCount + 1)}
                            >
                                <b>+</b>
                            </span>
                        </button>
                        <Link
                            href="/shop/shipping"
                            className={styles.shopLink}
                        >
                            <button
                                className={styles.btn2}
                                onClick={updateCategory}
                            >Shop now
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