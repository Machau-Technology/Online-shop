"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import ShopCarousel from '@/components/shopCarousel/ShopCarousel'
import Benefits from '@/components/benefits/Benefits'
import Link from 'next/link'
import { useFormData } from '@/context/shoppingContext/ShoppingContext'
import Image from 'next/image'

const MasterSticker100 = () => {

    const shopData = [
        {
            id: "1",
            image: "/assets/ShopStick1.svg",
            width: 577,
            height: 509,
            class: "sticker4"
        },
        {
            id: "2",
            image: "/assets/Ms100dim.svg",
            width: 577,
            height: 389,
            class: "sticker5"
        },
        {
            id: "3",
            image: "/assets/ShopStick3.svg",
            width: 490,
            height: 500,
            class: "sticker6"
        }
    ];

    const { formData, setFormData } = useFormData();
    const [stickerCount100, setStickerCount100] = useState(formData.stickerCount100);
    const [tagShop, setTagShop] = useState(formData.tagShop);
    const [stickerShop100, setStickerShop100] = useState(formData.stickerShop100);
    const [stickerShop75, setStickerShop75] = useState(formData.stickerShop75);
    const [stickerShop150, setStickerShop150] = useState(formData.stickerShop150);
    const [stickerPrice100, setStickerPrice100] = useState(formData.stickerPrice100);

    const updateStickerCount = (count) => {

        if (count < 1) {
            return;
        }

        setStickerCount100(count);
        setStickerPrice100(count * 99);
        setFormData({ ...formData, stickerCount100: count, stickerPrice100: count * 99 });
    };

    const addToCart = () => {

        // if (cart.indexOf("sticker75") != -1) {
        //     const updatedCart = [...cart, "sticker75"];
        //     setCart(updatedCart);
        // }

        setStickerShop100(true);
        setFormData({ ...formData, stickerShop100: true });

    };

    const updateCategory = () => {

        setStickerShop100(true);
        setStickerShop75(false);
        setStickerShop150(false);
        setTagShop(false);
        setStickerPrice100(stickerCount100 * 99);
        setFormData({
            ...formData,
            stickerShop100: true,
            stickerShop75: false,
            stickerShop150: false,
            tagShop: false,
            stickerPrice100: stickerCount100 * 99
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
                        <span className={styles.amount}>₹{stickerPrice100}</span>
                        <button className={styles.btn1}>
                            <span
                                className={styles.calc}
                                onClick={() => updateStickerCount(stickerCount100 - 1)}
                            ><b>--</b></span>
                            <span className={styles.calc}>{stickerCount100}</span>
                            <span
                                className={styles.calc}
                                onClick={() => updateStickerCount(stickerCount100 + 1)}
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
                        src="/assets/Circle75.svg"
                        alt='Product'
                        width={246}
                        height={246}
                        className={styles.circle}
                    />
                    <span className={styles.name}>MasterSticker 75</span>
                    <Link
                        href="/shop/master-sticker/ms-75"
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
                    <span className={styles.name}>MasterSticker 150</span>
                    <Link
                        href="/shop/master-sticker/ms-150"
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
                        href="/shop"
                        className={styles.circLink}
                    >
                        <button className={styles.circShop}>Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MasterSticker100