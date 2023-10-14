import React from 'react'
import styles from "./stickerLayout.module.css"
import StickOverview from '@/components/stickOverview/StickOverview';
import Reviews from '@/components/reviews/Reviews';
import Image from 'next/image';
import Faqs from '@/components/faqs/Faqs';
import FaqsSticker from '@/components/faqs/FaqsSticker';
import Activate from '@/components/activate/Activate';

export default function StickerLayout({ children }) {

    return (
        <div className={styles.container}>
            {children}
            <StickOverview />
            <div className={styles.specs}>
                <div className={styles.header}>
                    <span className={styles.head}>Sticker Specifications</span>
                </div>
                <div className={styles.main}>
                    <div className={styles.row}>
                        <Image
                            src="/assets/Adhesive.png"
                            width={150}
                            height={150}
                        />
                        <span className={styles.name}>Adhesive back</span>
                    </div>
                    <div className={styles.row}>
                        <Image
                            src="/assets/Water.png"
                            width={150}
                            height={150}
                        />
                        <span className={styles.name}>Water Proof</span>
                    </div>
                    <div className={styles.row}>
                        <Image
                            src="/assets/Tear.png"
                            width={150}
                            height={150}
                        />
                        <span className={styles.name}>Tear Resistant</span>
                    </div>
                    <div className={styles.row}>
                        <Image
                            src="/assets/AndroidSticker.png"
                            width={150}
                            height={150}
                        />
                        <span className={styles.name}>Android & IOS</span>
                    </div>
                </div>
            </div>
            <FaqsSticker />
            {/* <Reviews /> */}
            <Activate />
        </div>
    );
}