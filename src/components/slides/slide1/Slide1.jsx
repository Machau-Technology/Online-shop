import React from 'react'
import styles from "./slide1.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Slide1 = () => {
    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <div className={styles.line}></div>
                <div className={styles.contents}>
                    <span className={styles.modern}>India’s first user-friendly tracking solutions!</span>
                    <h2 className={styles.save}>Save flat 60% + get <br /> free accessories</h2>
                    <Link href="/shop" className={styles.shopLink}>
                        <button className={styles.btn}>Shop now</button>
                    </Link>
                </div>
                <div className={styles.line}></div>
            </div>

            <div className={styles.right}>
                <div className={styles.circle}>
                    <Image
                        src="/assets/TagHome.png"
                        alt='Device1'
                        width={430}
                        height={390}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>

            <Link href="/shop" className={styles.shopLink2}>
                <button className={styles.btn}>Shop now</button>
            </Link>

        </div>
    )
}

export default Slide1