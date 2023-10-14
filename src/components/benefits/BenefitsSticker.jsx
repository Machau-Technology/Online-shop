import React from 'react'
import styles from "./benefits.module.css"
import Image from 'next/image'

const BenefitsSticker = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image
                    src="/assets/muscle.gif"
                    width={75}
                    height={75}
                    alt='Muscle'
                    className={styles.gif}
                />
                <div className={styles.desc}>
                    <span className={styles.upper}>
                        Strong Adhesive
                    </span>
                    <span className={styles.lower}>
                        Long lasting | Easy Remove
                    </span>
                </div>
            </div>
            <div className={styles.item}>
                <Image
                    src="/assets/delivery-truck.gif"
                    width={75}
                    height={75}
                    alt='truck'
                    className={styles.gif}
                />
                <div className={styles.desc}>
                    <span className={styles.upper}>
                        Free Shipping
                    </span>
                    <span className={styles.lower}>
                        FREE Shipping + Live Tracking
                    </span>
                </div>
            </div>
            <div className={`${styles.item} ${styles.msLast}`}>
                <Image
                    src="/assets/shield.gif"
                    width={75}
                    height={75}
                    alt='certificate'
                    className={styles.gif}
                />
                <div className={styles.desc}>
                    <span className={styles.upper}>
                        Water Proof
                    </span>
                    <span className={styles.lower}>
                        Resistant | Tear Proof
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BenefitsSticker