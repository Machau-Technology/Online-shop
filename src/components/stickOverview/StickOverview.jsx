import React from 'react'
import styles from "./stickOverview.module.css"
import Image from 'next/image'

const StickOverview = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image
                    src="/assets/StickOverview1.png"
                    width={569}
                    height={604}
                    alt="overview"
                    className={styles.image1}
                    priority
                />
            </div>
            <div className={styles.right}>
                <div className={styles.row}>
                    <Image
                        src="/assets/StickOverview5.png"
                        width={270}
                        height={284}
                        alt='overview'
                        className={styles.image2}
                    />
                    <Image
                        src="/assets/StickOverview2.png"
                        width={270}
                        height={284}
                        alt='overview'
                        className={styles.image2}
                    />
                </div>
                <div className={styles.row}>
                    <Image
                        src="/assets/StickOverview3.png"
                        width={270}
                        height={284}
                        alt='overview'
                        className={styles.image2}
                    />
                    <Image
                        src="/assets/StickOverview4.png"
                        width={270}
                        height={284}
                        alt="overview"
                        className={styles.image2}
                    />
                </div>
            </div>
        </div>
    )
}

export default StickOverview