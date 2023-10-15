"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useFormData } from "@/context/shoppingContext/ShoppingContext";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { formData, setFormData } = useFormData();
  const [tagCount, setTagCount] = useState(formData.tagCount);
  const [stickerCount75, setStickerCount75] = useState(formData.stickerCount75);
  const [stickerCount100, setStickerCount100] = useState(
    formData.stickerCount100
  );
  const [stickerCount150, setStickerCount150] = useState(
    formData.stickerCount150
  );
  const [tagShop, setTagShop] = useState(formData.tagShop);
  const [stickerShop75, setStickerShop75] = useState(formData.stickerShop75);
  const [stickerShop100, setStickerShop100] = useState(formData.stickerShop100);
  const [stickerShop150, setStickerShop150] = useState(formData.stickerShop150);
  const [tagPrice, setTagPrice] = useState(formData.tagPrice);
  const [stickerPrice75, setStickerPrice75] = useState(formData.stickerPrice75);
  const [stickerPrice100, setStickerPrice100] = useState(
    formData.stickerPrice100
  );
  const [stickerPrice150, setStickerPrice150] = useState(
    formData.stickerPrice150
  );

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let amt = 0;
    if (tagShop) {
      amt += tagCount * 999;
    }
    if (stickerShop75) {
      amt += stickerCount75 * 99;
    }
    if (stickerShop100) {
      amt += stickerCount100 * 99;
    }
    if (stickerShop150) {
      amt += stickerCount150 * 99;
    }
    setTotal(amt);
  }, [formData]);

  const updateCountTag = (count) => {
    // console.log("called");

    if (count < 1) {
      setTagShop(false);
      setFormData({ ...formData, tagShop: false });
      return;
    }
    setTagCount(count);
    setTagPrice(count * 999);
    setFormData({ ...formData, tagCount: count, tagPrice: count * 999 });
  };

  const updateCountSticker75 = (count) => {
    if (count < 1) {
      setStickerShop75(false);
      setFormData({ ...formData, stickerShop75: false });
      return;
    }
    setStickerCount75(count);
    setStickerPrice75(count * 99);
    setFormData({
      ...formData,
      stickerCount75: count,
      stickerPrice75: count * 99,
    });
  };

  const updateCountSticker100 = (count) => {
    if (count < 1) {
      setStickerShop100(false);
      setFormData({ ...formData, stickerShop100: false });
      return;
    }
    setStickerCount100(count);
    setStickerPrice100(count * 99);
    setFormData({
      ...formData,
      stickerCount100: count,
      stickerPrice100: count * 99,
    });
  };

  const updateCountSticker150 = (count) => {
    if (count < 1) {
      setStickerShop150(false);
      // console.log(stickerShop150);
      setFormData({ ...formData, stickerShop150: false });
      // console.log("called");
      // console.log(formData);
      return;
    }
    setStickerCount150(count);
    setStickerPrice150(count * 99);
    setFormData({
      ...formData,
      stickerCount150: count,
      stickerPrice150: count * 99,
    });
  };

  const addTagToCart = () => {
    setTagShop(true);
    setFormData({ ...formData, tagShop: true });
  };

  const add75ToCart = () => {
    setStickerShop75(true);
    setFormData({ ...formData, stickerShop75: true });
  };

  const add100ToCart = () => {
    setStickerShop100(true);
    setFormData({ ...formData, stickerShop100: true });
  };

  const add150ToCart = () => {
    setStickerShop150(true);
    setFormData({ ...formData, stickerShop150: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <div className={styles.summarySection}>
          <div className={styles.products}>
            <span className={styles.summary}>Order Summary</span>
            <div className={styles.productList}>
              {tagShop && (
                <div className={styles.product}>
                  <div className={styles.icon}></div>
                  <div className={styles.productDetails}>
                    <span className={styles.productCat}>MasterTag</span>
                    <span className={styles.productName}>MT101</span>
                    <button className={styles.btn1}>
                      <span
                        className={styles.calc}
                        onClick={() => updateCountTag(tagCount - 1)}
                      >
                        <b>--</b>
                      </span>
                      <span className={styles.calc}>{tagCount}</span>
                      <span
                        className={styles.calc}
                        onClick={() => updateCountTag(tagCount + 1)}
                      >
                        <b>+</b>
                      </span>
                    </button>
                  </div>
                </div>
              )}
              {stickerShop75 && (
                <div className={styles.product}>
                  <div className={styles.icon}></div>
                  <div className={styles.productDetails}>
                    <span className={styles.productCat}>MasterSticker</span>
                    <span className={styles.productName}>MS75</span>
                    <button className={styles.btn1}>
                      <span
                        className={styles.calc}
                        onClick={() => updateCountSticker75(stickerCount75 - 1)}
                      >
                        <b>--</b>
                      </span>
                      <span className={styles.calc}>{stickerCount75}</span>
                      <span
                        className={styles.calc}
                        onClick={() => updateCountSticker75(stickerCount75 + 1)}
                      >
                        <b>+</b>
                      </span>
                    </button>
                  </div>
                </div>
              )}
              {stickerShop100 && (
                <div className={styles.product}>
                  <div className={styles.icon}></div>
                  <div className={styles.productDetails}>
                    <span className={styles.productCat}>MasterSticker</span>
                    <span className={styles.productName}>MS100</span>
                    <button className={styles.btn1}>
                      <span
                        className={styles.calc}
                        onClick={() =>
                          updateCountSticker100(stickerCount100 - 1)
                        }
                      >
                        <b>--</b>
                      </span>
                      <span className={styles.calc}>{stickerCount100}</span>
                      <span
                        className={styles.calc}
                        onClick={() =>
                          updateCountSticker100(stickerCount100 + 1)
                        }
                      >
                        <b>+</b>
                      </span>
                    </button>
                  </div>
                </div>
              )}
              {stickerShop150 && (
                <div className={styles.product}>
                  <div className={styles.icon}></div>
                  <div className={styles.productDetails}>
                    <span className={styles.productCat}>MasterSticker</span>
                    <span className={styles.productName}>MS150</span>
                    <button className={styles.btn1}>
                      <span
                        className={styles.calc}
                        onClick={() =>
                          updateCountSticker150(stickerCount150 - 1)
                        }
                      >
                        <b>--</b>
                      </span>
                      <span className={styles.calc}>{stickerCount150}</span>
                      <span
                        className={styles.calc}
                        onClick={() =>
                          updateCountSticker150(stickerCount150 + 1)
                        }
                      >
                        <b>+</b>
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.billing}>
              <div className={styles.billRow}>
                <span className={styles.billCat}>Sub total</span>
                <span className={styles.billAmt}>₹{total}</span>
              </div>
              <div className={styles.billRow}>
                <span className={styles.billCat}>Tax</span>
                <span className={styles.billAmt}>Included</span>
              </div>
              <div className={styles.billRow}>
                <span className={styles.billCat}>Shipping</span>
                <span className={styles.shipAmt}>FREE</span>
              </div>
              <div className={styles.totRow}>
                <span className={styles.tot}>Total</span>
                <span className={styles.totAmt}>₹{total}</span>
              </div>
            </div>

            <div className={styles.btns}>
              <Link href="/">
                <button className={styles.back}>Back</button>
              </Link>
              <Link href="/shop/shipping">
                <button className={styles.buy}>Buy now</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.others}>
          <span className={styles.summary}>MasterTag Products</span>
          <div className={styles.circleSection}>
            {!tagShop && (
              <div className={styles.col}>
                <Image
                  src="/assets/CircleTag.png"
                  alt="Product"
                  width={176}
                  height={176}
                  className={`${styles.circle} ${styles.zero}`}
                />
                <span className={styles.name}>MasterTag</span>
                <button className={styles.circShop} onClick={addTagToCart}>
                  Add to cart
                </button>
              </div>
            )}

            {!stickerShop75 && (
              <div className={styles.col}>
                <Image
                  src="/assets/Circle75.png"
                  alt="Product"
                  width={176}
                  height={176}
                  className={`${styles.circle} ${styles.one}`}
                />
                <span className={styles.name}>MasterSticker 75</span>
                <button className={styles.circShop} onClick={add75ToCart}>
                  Add to cart
                </button>
              </div>
            )}

            {!stickerShop100 && (
              <div className={styles.col}>
                <Image
                  src="/assets/Circle100.png"
                  alt="Product"
                  width={176}
                  height={176}
                  className={`${styles.circle} ${styles.two}`}
                />
                <span className={styles.name}>MasterSticker 100</span>
                <button className={styles.circShop} onClick={add100ToCart}>
                  Add to cart
                </button>
              </div>
            )}

            {!stickerShop150 && (
              <div className={styles.col}>
                <Image
                  src="/assets/Circle150.png"
                  alt="Product"
                  width={176}
                  height={176}
                  className={`${styles.circle} ${styles.three}`}
                />
                <span className={styles.name}>MasterSticker 150</span>
                <button className={styles.circShop} onClick={add150ToCart}>
                  Add to cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
