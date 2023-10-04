import React from 'react'
import styles from "./rechargeable.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Rechargeable = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/assets/Finding.svg"
                width={498}
                height={398}
                className={styles.image}
                alt='Finding'
            />
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
                    <Link href="/tagStick" className={styles.shopLink}>
                        <button className={styles.shop}>Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Rechargeable