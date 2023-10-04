"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import ShopCarousel from '@/components/shopCarousel/ShopCarousel'
import Benefits from '@/components/benefits/Benefits'
import Link from 'next/link'
import { useFormData } from '@/context/shoppingContext/ShoppingContext'
import Image from 'next/image'

const MasterSticker150 = () => {

    const shopData = [
        {
            id: "1",
            image: "/assets/ShopStick1.svg",
            width: 577,
            height: 509,
            class: "sticker7"
        },
        {
            id: "2",
            image: "/assets/Ms150dim.svg",
            width: 577,
            height: 389,
            class: "sticker8"
        },
        {
            id: "3",
            image: "/assets/ShopStick4.svg",
            width: 577,
            height: 573,
            class: "sticker9"
        }
    ];

    const { formData, setFormData } = useFormData();
    const [stickerCount150, setStickerCount150] = useState(formData.stickerCount150);
    const [tagShop, setTagShop] = useState(formData.tagShop);
    const [stickerShop150, setStickerShop150] = useState(formData.stickerShop150);
    const [stickerShop75, setStickerShop75] = useState(formData.stickerShop75);
    const [stickerShop100, setStickerShop100] = useState(formData.stickerShop100);
    const [stickerPrice150, setStickerPrice150] = useState(formData.stickerPrice150);

    const updateStickerCount = (count) => {

        if (count < 1) {
            return;
        }

        setStickerCount150(count);
        setStickerPrice150(count * 99);
        setFormData({ ...formData, stickerCount150: count, stickerPrice150: count * 99 });
    };

    const addToCart = () => {

        // if (cart.indexOf("sticker75") != -1) {
        //     const updatedCart = [...cart, "sticker75"];
        //     setCart(updatedCart);
        // }

        setStickerShop150(true);
        setFormData({ ...formData, stickerShop150: true });

    };

    const updateCategory = () => {

        setStickerShop150(true);
        setTagShop(false);
        setStickerPrice150(stickerCount150 * 99);
        setFormData({
            ...formData,
            stickerShop150: true,
            stickerShop75: false,
            stickerShop100: false,
            tagShop: false,
            stickerPrice150: stickerCount150 * 99
        });
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
                        <span className={styles.amount}>₹{stickerPrice150}</span>
                        <button className={styles.btn1}>
                            <span
                                className={styles.calc}
                                onClick={() => updateStickerCount(stickerCount150 - 1)}
                            ><b>--</b></span>
                            <span className={styles.calc}>{stickerCount150}</span>
                            <span
                                className={styles.calc}
                                onClick={() => updateStickerCount(stickerCount150 + 1)}
                            >
                                <b>+</b>
                            </span>
                        </button>
                        <Link
                            href="/shop/cart"
                            className={styles.shopLink}
                        >
                            <button
                                className={styles.btn2}
                                onClick={addToCart}
                            >Add to cart
                            </button>
                        </Link>
                        <Link
                            href="/shop/shipping"
                            className={styles.shopLink}
                        >
                            <button
                                className={styles.btn2}
                                onClick={updateCategory}
                            >Buy now
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
                    <span className={styles.name}>MasterSticker 75</span>
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
                        src="/assets/CircleTag.svg"
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

export default MasterSticker150