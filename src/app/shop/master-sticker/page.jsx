import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

const MasterSticker = () => {
    return (
        <div className={styles.container}>
            <div className={styles.col}>
                <Image
                    src="/assets/Circle75.svg"
                    width={374}
                    height={374}
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
                    src="/assets/Circle100.svg"
                    width={374}
                    height={374}
                    className={styles.circ}
                />
                <Link href="/shop/master-sticker/ms-100">
                    <button className={styles.btn}>
                        Shop now
                    </button>
                </Link>
            </div>

            <div className={styles.col}>
                <Image
                    src="/assets/Circle150.svg"
                    width={374}
                    height={374}
                    className={styles.circ}
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