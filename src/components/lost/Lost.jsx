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
                            Peel It. Stick It. Get It.
                        </span>
                        <p className={styles.stickerDesc}>
                            Unlock the magic of MasterSticker, India's pioneering QR Sticker, reuniting lost treasures with their cherished owners in a snap. Stick it to be found!
                        </p>
                    </div>
                </div>
                <Link href="/shop/master-sticker" className={styles.shopLink}>
                    <button className={styles.shop}>Shop now</button>
                </Link>
            </div>

            <Image
                src="/assets/LostAndFound.png"
                width={410}
                height={425}
                alt="MasterSticker"
                priority
                className={styles.image}
            />
        </div>
    )
}

export default Lost