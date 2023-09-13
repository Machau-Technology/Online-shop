"use client"
import Image from "next/image";
import styles from "./shopDetailsLayout.module.css"
import { useFormData } from "@/context/shoppingContext/ShoppingContext";
import { useRouter } from "next/navigation";

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
                            <Image
                                src="/assets/Cup.png"
                                width={70}
                                height={70}
                                alt="product"
                            />
                            <div className={styles.productDetails}>
                                <span className={styles.productCat}>MasterSticker Free Bucket</span>
                                <span className={styles.productName}>MS075 + MS100 + MS150</span>
                            </div>
                            <button className={styles.qt}>1 Pack</button>
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