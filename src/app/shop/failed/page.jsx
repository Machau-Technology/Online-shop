import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Failed = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Image
                    src="/assets/Failed.svg"
                    width={180}
                    height={180}
                    className={styles.failed}
                />
                <div className={styles.contents}>
                    <span className={styles.title}>Payment Unsuccessful</span>
                    <p className={styles.desc}>
                        Oops! It seems like something went wrong with your payment.
                    </p>
                </div>
                <button className={styles.btn}>
                    Retry Payment
                </button>
            </div>
        </div>
    )
}

export default Failed