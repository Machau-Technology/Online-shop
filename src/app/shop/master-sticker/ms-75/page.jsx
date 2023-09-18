"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import ShopCarousel from '@/components/shopCarousel/ShopCarousel'
import Benefits from '@/components/benefits/Benefits'
import Link from 'next/link'
import { useFormData } from '@/context/shoppingContext/ShoppingContext'
import Image from 'next/image'

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
            image: "/assets/Ms75dim.svg",
            width: 577,
            height: 389,
            class: "sticker2"
        },
        {
            id: "3",
            image: "/assets/ShopStick2.svg",
            width: 700,
            height: 573,
            class: "sticker3"
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
            <div className={styles.others}>
                <div className={styles.col}>
                    <Image
                        src="/assets/Circle100.svg"
                        alt='Product'
                        width={246}
                        height={246}
                        className={styles.circle}
                    />
                    <span className={styles.name}>MasterSticker 100</span>
                    <Link
                        href=""
                        className={styles.circLink}
                    >
                        <button className={styles.circShop}>Shop now</button>
                    </Link>
                </div>
                <div className={styles.col}>
                    <Image
                        src="/assets/Circle100.svg"
                        alt='Product'
                        width={246}
                        height={246}
                        className={styles.circle}
                    />
                    <span className={styles.name}>MasterSticker 150</span>
                    <Link
                        href=""
                        className={styles.circLink}
                    >
                        <button className={styles.circShop}>Shop now</button>
                    </Link>
                </div>
                <div className={styles.col}>
                    <Image
                        src="/assets/Circle150.svg"
                        alt='Product'
                        width={246}
                        height={246}
                        className={styles.circle}
                    />
                    <span className={styles.name}>MasterTag</span>
                    <Link
                        href=""
                        className={styles.circLink}
                    >
                        <button className={styles.circShop}>Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MasterStickerShop