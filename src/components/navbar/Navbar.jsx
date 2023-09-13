import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <div className={styles.empty}></div>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/assets/Logo.png"
                        alt='MasterTag'
                        width={59}
                        height={58}
                    />
                </Link>
                <div className={styles.links}>
                    <Link href="/" className={styles.link}>
                        <span className={styles.linkName}>Products</span>
                        <Image
                            src="/assets/ArrowDown.png"
                            alt='ArrowDown'
                            width={8}
                            height={6}
                        />
                    </Link>
                    <Link href="/" className={styles.link}>
                        <span className={styles.linkName}>Resources</span>
                        <Image
                            src="/assets/ArrowDown.png"
                            alt='ArrowDown'
                            width={8}
                            height={6}
                        />
                    </Link>
                    <Link href="/" className={styles.link}>
                        <span className={styles.linkName}>Community</span>
                        <Image
                            src="/assets/ArrowDown.png"
                            alt='ArrowDown'
                            width={8}
                            height={6}
                        />
                    </Link>
                    <Link href="/shop" className={styles.link}>
                        <button className={styles.shopBtn}>Shop now</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar