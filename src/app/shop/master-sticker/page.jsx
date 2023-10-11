import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

const MasterSticker = () => {
    return (
        <div className={styles.container}>
            <div className={styles.col}>
                <Image
                    src="/assets/col1.png"
                    width={292}
                    height={305}
                    className={styles.circ}
                />
                <Link href="/shop/master-sticker/ms-75">
                    <button className={styles.btn}>
                        Shop now
                    </button>
                </Link>
            </div>

            <div className={styles.col}>
                <Image
                    src="/assets/col2.png"
                    width={379}
                    height={403}
                    className={styles.circ2}
                />
                <Link href="/shop/master-sticker/ms-100">
                    <button className={styles.btn}>
                        Shop now
                    </button>
                </Link>
            </div>

            <div className={styles.col}>
                <Image
                    src="/assets/col3.png"
                    width={520}
                    height={480}
                    className={styles.circ3}
                />
                <Link href="/shop/master-sticker/ms-150">
                    <button className={styles.btn}>
                        Shop now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default MasterSticker