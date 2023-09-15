import React from 'react'
import styles from "./stickOverview.module.css"
import Image from 'next/image'

const StickOverview = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image
                    src="/assets/StickOverview1.svg"
                    width={569}
                    height={604}
                    alt="overview"
                />
            </div>
            <div className={styles.right}>
                <div className={styles.row}>
                    <Image
                        src="/assets/StickOverview5.svg"
                        width={270}
                        height={284}
                        alt='overview'
                    />
                    <Image
                        src="/assets/StickOverview2.svg"
                        width={270}
                        height={284}
                        alt='overview'
                    />
                </div>
                <div className={styles.row}>
                    <Image
                        src="/assets/StickOverview3.svg"
                        width={270}
                        height={284}
                        alt='overview'
                    />
                    <Image
                        src="/assets/StickOverview4.svg"
                        width={269}
                        height={284}
                        alt="overview"
                    />
                </div>
            </div>
        </div>
    )
}

export default StickOverview