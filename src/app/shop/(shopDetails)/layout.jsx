"use client"
import Image from "next/image";
import styles from "./shopDetailsLayout.module.css"
import { useFormData } from "@/context/shoppingContext/ShoppingContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ShopDetailsLayout({ children }) {

    const router = useRouter();
    const { activeStep, stepStatus } = useFormData();

    const handleAccountClick = () => {
        if (activeStep === "payment") {
            router.push('/shop/account');
        }
    }

    const handleShippingClick = () => {
        if (activeStep === "account" || activeStep === "payment") {
            router.push('/shop/shipping');
        }
    }

    const { formData, setFormData } = useFormData();
    const [tagCount, setTagCount] = useState(formData.tagCount);
    const [stickerCount, setStickerCount] = useState(formData.stickerCount);
    const [tagShop, setTagShop] = useState(formData.tagShop);
    const [stickerShop, setStickerShop] = useState(formData.stickerShop);

    const updateTagCountTag = (count) => {

        // console.log("called");

        if (count < 1) {
            return;
        }
        setTagCount(count);
        setFormData({ ...formData, tagCount: count });
    };

    const updateTagCountSticker = (count) => {

        if (count < 1) {
            return;
        }
        setStickerCount(count);
        setFormData({ ...formData, stickerCount: count });
    };

    return (
        <div className={styles.container}>
            <div className={styles.procedures}>
                <div className={styles.steps}>
                    <span className={`${styles.step} ${activeStep === 'shipping' && styles.active}`} onClick={handleShippingClick}>Shipping</span>
                    <span className={styles.line}>----</span>
                    {stepStatus.shipping ?
                        <Image
                            src="/assets/CheckGreen.png"
                            width={30}
                            height={30}
                            alt="check"
                        /> :
                        <Image
                            src="/assets/CheckBlack.png"
                            width={30}
                            height={30}
                            alt="check"
                        />
                    }

                    <span className={styles.line}>----</span>
                    <span className={`${styles.step} ${activeStep === 'account' && styles.active}`} onClick={handleAccountClick}>Account</span>
                    <span className={styles.line}>----</span>
                    {stepStatus.account ?
                        <Image
                            src="/assets/CheckGreen.png"
                            width={30}
                            height={30}
                            alt="check"
                        /> :
                        <Image
                            src="/assets/CheckBlack.png"
                            width={30}
                            height={30}
                            alt="check"
                        />
                    }
                    <span className={styles.line}>----</span>
                    <span className={`${styles.step} ${activeStep === 'payment' && styles.active}`}>Payment</span>
                </div>
                {children}
            </div>

            <div className={styles.summarySection}>
                <div className={styles.products}>
                    <span className={styles.summary}>Order Summary</span>
                    <div className={styles.productList}>
                        <div className={styles.product}>
                            <div className={styles.icon}></div>
                            <div className={styles.productDetails}>
                                {(tagShop) &&
                                    <span className={styles.productCat}>
                                        MasterTag
                                    </span>
                                }
                                {(stickerShop) &&
                                    <>
                                        <span className={styles.productCat}>
                                            MasterSticker Free Bucket
                                        </span>
                                        <span className={styles.productName}>MS075 + MS100 + MS150</span>
                                    </>
                                }
                            </div>

                            {(tagShop) &&
                                <button className={styles.btn1}>
                                    <span
                                        className={styles.calc}
                                        onClick={() => updateTagCountTag(tagCount - 1)}
                                    ><b>--</b></span>
                                    <span className={styles.calc}>{tagCount}</span>
                                    <span
                                        className={styles.calc}
                                        onClick={() => updateTagCountTag(tagCount + 1)}
                                    >
                                        <b>+</b>
                                    </span>
                                </button>
                            }
                            {(stickerShop) &&
                                <button className={styles.btn1}>
                                    <span
                                        className={styles.calc}
                                        onClick={() => updateTagCountSticker(stickerCount - 1)}
                                    ><b>--</b></span>
                                    <span className={styles.calc}>{stickerCount}</span>
                                    <span
                                        className={styles.calc}
                                        onClick={() => updateTagCountSticker(stickerCount + 1)}
                                    >
                                        <b>+</b>
                                    </span>
                                </button>
                            }
                        </div>
                    </div>
                </div>

                <div className={styles.billing}>
                    <div className={styles.billRow}>
                        <span className={styles.billCat}>Sub total</span>
                        <span className={styles.billAmt}>₹0.00</span>
                    </div>
                    <div className={styles.billRow}>
                        <span className={styles.billCat}>Tax</span>
                        <span className={styles.billAmt}>Included</span>
                    </div>
                    <div className={styles.billRow}>
                        <span className={styles.billCat}>Shipping</span>
                        <span className={styles.shipAmt}>₹100</span>
                    </div>
                    <div className={styles.totRow}>
                        <span className={styles.tot}>Total</span>
                        <span className={styles.totAmt}>₹100.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}