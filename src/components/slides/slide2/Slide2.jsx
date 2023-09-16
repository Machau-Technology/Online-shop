import React from 'react'
import styles from "./slide2.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Slide2 = () => {
    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <div className={styles.line}></div>
                <div className={styles.contents}>
                    <span className={styles.modern}>Modern solution for modern problem!</span>
                    <h2 className={styles.save}>Save flat 60% + get <br /> free accessories</h2>
                    <Link href="/shop/master-sticker" className={styles.shopLink}>
                        <button className={styles.btn}>Shop now</button>
                        </Link>
                </div>
                <div className={styles.line}></div>
            </div>

            <div className={styles.right}>
                <div className={styles.circle}>
                    <Image
                        src="/assets/StickerHome.svg"
                        alt='Device2'
                        width={390}
                        height={280}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>

            <Link href="/shop/master-sticker" className={styles.shopLink2}>
                <button className={styles.btn}>Shop now</button>
                </Link>
        </div>
    )
}

export default Slide2