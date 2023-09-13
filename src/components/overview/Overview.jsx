import React from 'react'
import styles from "./overview.module.css"
import Image from 'next/image'

const Overview = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image
                    src="/assets/Dimensions.svg"
                    width={569}
                    height={604}
                    alt="Dimensions"
                />
            </div>
            <div className={styles.right}>
                <Image
                    src="/assets/Bluetooth.png"
                    width={575}
                    height={289}
                    alt='Bluetooth'
                />
                <div className={styles.bottom}>
                    <Image
                        src="/assets/Battery.png"
                        width={270}
                        height={284}
                        alt='Battery'
                    />
                    <Image
                        src="/assets/Waterproof.png"
                        width={269}
                        height={284}
                        alt="Waterproof"
                    />
                </div>
            </div>
        </div>
    )
}

export default Overview