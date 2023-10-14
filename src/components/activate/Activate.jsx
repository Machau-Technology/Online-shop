import React from 'react'
import styles from "./activate.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Activate = () => {
    return (
        <div className={styles.container}>
            <span className={styles.head}>
                Activate MasterSticker
            </span>
            <p className={styles.desc}>
                Please visit <Link className={styles.msLink} href="https://www.mastersticker.com">www.mastersticker.com</Link> to activate your MasterSticker.
            </p>
            <Link href="https://www.mastersticker.com">
                <Image
                    src="/assets/Go.png"
                    className={styles.go}
                    width={120}
                    height={52}
                    alt='Go'
                />
            </Link>
        </div>
    )
}

export default Activate