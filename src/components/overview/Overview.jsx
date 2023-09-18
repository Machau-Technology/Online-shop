import React from 'react'
import styles from "./overview.module.css"
import Image from 'next/image'

const Overview = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/assets/Dimensions.svg"
                width={569}
                height={604}
                alt="Dimensions"
                className={styles.left}
            />
            <div className={styles.right}>
                <Image
                    src="/assets/Bluetooth.png"
                    width={575}
                    height={289}
                    alt='Bluetooth'
                    className={styles.bt}
                />
                <div className={styles.bottom}>
                    <Image
                        src="/assets/Battery.png"
                        width={270}
                        height={284}
                        alt='Battery'
                        className={styles.battery}
                    />
                    <Image
                        src="/assets/Waterproof.png"
                        width={269}
                        height={284}
                        alt="Waterproof"
                        className={styles.wp}
                    />
                </div>
            </div>
        </div>
    )
}

export default Overview