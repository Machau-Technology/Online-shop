import React from 'react'
import styles from "./lost.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Lost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <span className={styles.lost}>Lost & Found Sticker!</span>
                <div className={styles.sticker}>
                    <span className={styles.stickerHead}>MasterSticker</span>
                    <div className={styles.stickerInfo}>
                        <span className={styles.infoHead}>
                            One Charge = 4-6 Months Life;
                        </span>
                        <p className={styles.stickerDesc}>
                            MasterTag is India’s first re-chargeable BLE
                            tracking device, powered by an inbuilt
                            Lithium-ion battery with magnetic charger.
                        </p>
                    </div>
                </div>
                <Link href="" className={styles.shopLink}>
                    <button className={styles.shop}>Shop now</button>
                </Link>
            </div>

            <Image
                src="/assets/LostAndFound.svg"
                width={346}
                height={341}
                alt="MasterSticker"
                priority
                quality={100}
                className={styles.image}
            />
        </div>
    )
}

export default Lost