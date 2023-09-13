import React from 'react'
import styles from "./rechargeable.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Rechargeable = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.biggerCircle}>
                    <Image
                        src="/assets/Device4.png"
                        alt='Device4'
                        width={163}
                        height={165}
                        className={styles.device}
                    />
                </div>
                <div className={styles.circle}>
                    <Image
                        src="/assets/Usb.png"
                        alt='Usb'
                        width={225}
                        height={219}
                        className={styles.usb}
                    />
                </div>
            </div>
            <div className={styles.right}>
                <span className={styles.top}>Rechargeable</span>
                <div className={styles.bottom}>
                    <h1 className={styles.heading}>Life-Time Finding</h1>
                    <div className={styles.para}>
                        <span className={styles.bold}>One Charge = 4-6 Months Life;</span>
                        <p className={styles.normal}>
                            MasterTag is India’s first re-chargeable BLE tracking device,
                            powered by an inbuilt Lithium-ion battery with magnetic charger.
                        </p>
                    </div>
                    <Link href="" className={styles.shopLink}>
                        <button className={styles.shop}>Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Rechargeable