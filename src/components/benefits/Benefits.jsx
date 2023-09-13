import React from 'react'
import styles from "./benefits.module.css"
import Image from 'next/image'

const Benefits = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image
                    src="/assets/christmas-gift.gif"
                    width={75}
                    height={75}
                    alt='gift'
                    className={styles.gif}
                />
                <div className={styles.desc}>
                    <span className={styles.upper}>
                        Free Accessories
                    </span>
                    <span className={styles.lower}>
                        Charging Cable + Tag + 3M Sticker
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
                        FREE on All Orders
                    </span>
                </div>
            </div>
            <div className={styles.item}>
                <Image
                    src="/assets/certificate.gif"
                    width={75}
                    height={75}
                    alt='certificate'
                    className={styles.gif}
                />
                <div className={styles.desc}>
                    <span className={styles.upper}>
                        Worry Free Warranty
                    </span>
                    <span className={styles.lower}>
                        Tension free warrenty for 6 months
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Benefits