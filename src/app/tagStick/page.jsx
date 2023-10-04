import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

const TagStick = () => {
    return (
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.circle}>
                    <Image
                        src="/assets/TagHome.svg"
                        alt='Device1'
                        width={430}
                        height={390}
                        className={styles.image1}
                        priority
                    />
                </div>
                <Link href="/shop" className={styles.shopLink}><button className={styles.btn}>Shop now</button></Link>
            </div>

            <div className={styles.column}>
                <div className={styles.circle}>
                    <Image
                        src="/assets/StickerHome.svg"
                        alt='Device2'
                        width={390}
                        height={280}
                        className={styles.image2}
                        priority
                    />
                </div>
                <Link href="/shop/master-sticker" className={styles.shopLink}><button className={styles.btn}>Shop now</button></Link>
            </div>
        </div>
    )
}

export default TagStick