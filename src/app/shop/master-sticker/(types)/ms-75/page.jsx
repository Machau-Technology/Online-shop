"use client"
import React, { useState } from 'react'
import styles from "./page.module.css"
import ShopCarousel from '@/components/shopCarousel/ShopCarousel'
import Link from 'next/link'
import { useFormData } from '@/context/shoppingContext/ShoppingContext'
import Image from 'next/image'
import BenefitsSticker from '@/components/benefits/BenefitsSticker'

const MasterSticker75 = () => {

    const shopData = [
        {
            id: "1",
            image: "/assets/ShopStick1.png",
            width: 577,
            height: 509,
            class: "sticker1"
        },
        {
            id: "2",
            image: "/assets/Ms75dim.png",
            width: 325,
            height: 389,
            class: "sticker2"
        },
        {
            id: "3",
            image: "/assets/ShopStick2.png",
            width: 700,
            height: 573,
            class: "sticker3"
        }
    ];

    const { formData, setFormData } = useFormData();
    const [stickerCount75, setStickerCount75] = useState(formData.stickerCount75);
    const [tagShop, setTagShop] = useState(formData.tagShop);
    const [stickerShop75, setStickerShop75] = useState(formData.stickerShop75);
    const [stickerShop100, setStickerShop100] = useState(formData.stickerShop100);
    const [stickerShop150, setStickerShop150] = useState(formData.stickerShop150);
    const [stickerPrice75, setStickerPrice75] = useState(formData.stickerPrice75);
    // const [cart, setCart] = useState(formData.cart);

    const updateStickerCount = (count) => {

        if (count < 1) {
            return;
        }

        setStickerCount75(count);
        setStickerPrice75(count * 99);
        setFormData({ ...formData, stickerCount75: count, stickerPrice75: count * 99 });
    };

    const addToCart = () => {

        // if (cart.indexOf("sticker75") != -1) {
        //     const updatedCart = [...cart, "sticker75"];
        //     setCart(updatedCart);
        // }

        setStickerShop75(true);
        setFormData({ ...formData, stickerShop75: true });

    };

    const updateCategory = () => {

        setStickerShop75(true);
        setStickerShop100(false);
        setStickerShop150(false);
        setTagShop(false);
        setStickerPrice75(stickerCount75 * 99);
        setFormData({
            ...formData,
            stickerShop75: true,
            stickerShop100: false,
            stickerShop150: false,
            tagShop: false,
            stickerPrice75: stickerCount75 * 99
        });
        console.log(formData);
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
                        <span className={styles.amount}>₹{stickerPrice75}</span>
                        <button className={styles.btn1}>
                            <span
                                className={styles.calc}
                                onClick={() => updateStickerCount(stickerCount75 - 1)}
                            ><b>--</b></span>
                            <span className={styles.calc}>{stickerCount75}</span>
                            <span
                                className={styles.calc}
                                onClick={() => updateStickerCount(stickerCount75 + 1)}
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
                            >
                                Add to cart
                            </button>
                        </Link>
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

            <BenefitsSticker />
            <div className={styles.others}>
                <div className={styles.col}>
                    <Image
                        src="/assets/Circle100.png"
                        alt='Product'
                        width={326}
                        height={246}
                        className={styles.circle1}
                    />
                    <span className={styles.name}>MasterSticker 100</span>
                    <Link
                        href="/shop/master-sticker/ms-100"
                        className={styles.circLink}
                    >
                        <button className={styles.circShop}>Shop now</button>
                    </Link>
                </div>
                <div className={styles.col}>
                    <Image
                        src="/assets/Circle150.png"
                        alt='Product'
                        width={326}
                        height={246}
                        className={styles.circle2}
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
                        src="/assets/CircleTag.png"
                        alt='Product'
                        width={256}
                        height={246}
                        className={styles.circle3}
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

export default MasterSticker75