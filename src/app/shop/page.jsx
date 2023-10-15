"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import ShopCarousel from "@/components/shopCarousel/ShopCarousel";
import Benefits from "@/components/benefits/Benefits";
import Overview from "@/components/overview/Overview";
import Reviews from "@/components/reviews/Reviews";
import Link from "next/link";
import { useFormData } from "@/context/shoppingContext/ShoppingContext";
import Specs from "@/components/specs/Specs";
import Faqs from "@/components/faqs/Faqs";

const Shop = () => {
  const shopData = [
    {
      id: "1",
      image: "/assets/Device1.png",
      width: 470,
      height: 470,
      class: "tag1",
    },
    {
      id: "2",
      image: "/assets/Device2.png",
      width: 470,
      height: 470,
      class: "tag2",
    },
    {
      id: "3",
      image: "/assets/DeviceSide.png",
      width: 120,
      height: 470,
      class: "tag3",
    },
    {
      id: "4",
      image: "/assets/DeviceTilted.png",
      width: 470,
      height: 470,
      class: "tag4",
    },
  ];

  const { formData, setFormData } = useFormData();
  const [tagCount, setTagCount] = useState(formData.tagCount);
  const [tagShop, setTagShop] = useState(formData.tagShop);
  const [stickerShop, setStickerShop] = useState(formData.stickerShop);
  const [tagPrice, setTagPrice] = useState(formData.tagPrice);

  const updateTagCount = (count) => {
    if (count < 1) {
      return;
    }
    setTagCount(count);
    setTagPrice(count * 999);
    setFormData({ ...formData, tagCount: count, tagPrice: count * 999 });
  };

  const addToCart = () => {
    // if (cart.indexOf("sticker75") != -1) {
    //     const updatedCart = [...cart, "sticker75"];
    //     setCart(updatedCart);
    // }

    setTagShop(true);
    setFormData({ ...formData, tagShop: true });
  };

  const updateCategory = () => {
    setStickerShop(false);
    setTagShop(true);
    setTagPrice(999 * tagCount);
    setFormData({
      ...formData,
      stickerShop: false,
      tagShop: true,
      tagPrice: 999 * tagCount,
    });
  };

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
            <span className={styles.amount}>₹{tagPrice}</span>
            <button className={styles.btn1}>
              <span
                className={styles.calc}
                onClick={() => updateTagCount(tagCount - 1)}
              >
                <b>--</b>
              </span>
              <span className={styles.calc}>{tagCount}</span>
              <span
                className={styles.calc}
                onClick={() => updateTagCount(tagCount + 1)}
              >
                <b>+</b>
              </span>
            </button>
            <Link href="/shop/cart" className={styles.shopLink2}>
              <button className={styles.btn2} onClick={addToCart}>
                Add to cart
              </button>
            </Link>
            <Link href="/shop/shipping" className={styles.shopLink}>
              <button className={styles.btn2} onClick={updateCategory}>
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Benefits />
      <div className={styles.overview}>
        <Overview />
      </div>
      <Specs />
      <Faqs />
      <Reviews />
    </div>
  );
};

export default Shop;
