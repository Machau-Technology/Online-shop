import React from 'react'
import styles from "./threeDView.module.css"
import Image from 'next/image'
import Link from 'next/link'
// import ThreeScene from './Threescene'

const ThreeDView = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.heading}>
                    <span className={styles.normal}>Tag it.</span>
                    <span className={styles.bold}>Find it.</span>
                </div>
                <span className={styles.desc}>MasterTag 360 Degree View</span>
            </div>
            {/* <ThreeScene/> */}
            <Image
                src="/assets/Device1.png"
                alt='Device1'
                width={320}
                height={320}
                className={styles.view}
            />
            <Link href="/shop">
                <button className={styles.shop}>Shop now</button>
            </Link>
        </div>
    )
}

export default ThreeDView