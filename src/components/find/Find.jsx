import React from 'react'
import styles from "./find.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Find = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.up}>
                    <span className={styles.track}>Track & Find</span>
                    <button className={styles.new}>NEW</button>
                </div>
                <div className={styles.down}>
                    <h1 className={styles.heading}>Find in a click!</h1>
                    <div className={styles.para}>
                        <span className={styles.bold}>
                            One Charge = 4-6 Months Life;
                        </span>
                        <p className={styles.normal}>
                            MasterTag is India’s first re-chargeable BLE
                            tracking device, powered by an inbuilt
                            Lithium-ion battery with magnetic charger.
                        </p>
                    </div>
                    <Link href="" className={styles.shopLink}>
                        <button className={styles.shop}>Shop now</button>
                    </Link>
                </div>
            </div>
            <div className={styles.right}>
                <Image
                    src="/assets/PhoneWithKey.svg"
                    width={684}
                    height={684}
                    quality={100}
                    alt='Phone with key'
                    priority
                />
            </div>
        </div>
    )
}

export default Find