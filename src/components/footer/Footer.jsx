import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.up}>
                <div className={styles.left}>
                    <div className={styles.first}>
                        <span className={styles.start}>Start</span>
                        <span className={styles.finding}>finding</span>
                    </div>
                    <span className={styles.second}>with MasterTag</span>
                </div>
                <Link href="/tagStick" className={styles.right} >
                    <button className={styles.shop}>Shop now</button>
                </Link>
            </div>
            <div className={styles.down}>
                <div className={styles.links}>
                    <div className={styles.master}>
                        <span className={styles.heading}>MasterTag</span>
                        <div className={styles.socialLinks}>
                            <Link href="" className={styles.socialLink} >
                                <Image
                                    src="/assets/Twitter.png"
                                    alt='Twitter'
                                    width={16}
                                    height={16}
                                />
                                <span className={styles.socialName}>Twitter</span>
                            </Link>
                            <Link href="" className={styles.socialLink} >
                                <Image
                                    src="/assets/Youtube.png"
                                    alt='Youtube'
                                    width={16}
                                    height={16}
                                />
                                <span className={styles.socialName}>YouTube</span>
                            </Link>
                            <Link href="" className={styles.socialLink} >
                                <Image
                                    src="/assets/Instagram.png"
                                    alt='Instagram'
                                    width={16}
                                    height={16}
                                />
                                <span className={styles.socialName}>Instagram</span>
                            </Link>
                            <Link href="" className={styles.socialLink} >
                                <Image
                                    src="/assets/Facebook.png"
                                    alt='Facebook'
                                    width={16}
                                    height={16}
                                />
                                <span className={styles.socialName}>Facebook</span>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.linkSection}>
                        <div className={`${styles.col} ${styles.hide}`}>
                            <span className={styles.topic}>Use Cases</span>
                            <div className={styles.pgLinks}>
                                <span className={styles.pgLink}>Key Bunch</span>
                                <span className={styles.pgLink}>Find Phone</span>
                                <span className={styles.pgLink}>Purse & Handbags</span>
                                <span className={styles.pgLink}>Cardholders</span>
                                <span className={styles.pgLink}>Backpacks</span>
                                <span className={styles.pgLink}>Pets & Training</span>
                                <span className={styles.pgLink}>Books & Files</span>
                                <span className={styles.pgLink}>Laptops & Speakers</span>
                                <span className={styles.pgLink}>Tools & Equipment</span>
                                <span className={styles.pgLink}>Communication</span>
                                <span className={styles.pgLink}>Track Distance</span>
                                <span className={styles.pgLink}>Other Essentials</span>
                            </div>
                        </div>
                        <div className={`${styles.col} ${styles.hide}`}>
                            <span className={styles.topic}>Explore</span>
                            <div className={styles.pgLinks}>
                                <span className={styles.pgLink}>How It Works</span>
                                <span className={styles.pgLink}>Master Community</span>
                                <span className={styles.pgLink}>About MasterFam</span>
                                <span className={styles.pgLink}>FAQs & Discussion</span>
                                <span className={styles.pgLink}>Hiring & Careers</span>
                            </div>
                        </div>
                        <div className={styles.colRes}>
                            <div className={styles.col}>
                                <span className={styles.topic}>Resources</span>
                                <div className={styles.pgLinks}>
                                    <span className={styles.pgLink}>Order Status</span>
                                    <span className={styles.pgLink}>Blogs & News</span>
                                    <span className={styles.pgLink}>Help & Contact</span>
                                    <span className={styles.pgLink}>Whats' New</span>
                                    <span className={styles.pgLink}>Download</span>
                                    <span className={styles.pgLink}>Our Story</span>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <span className={styles.topic}>Explore</span>
                                <div className={styles.pgLinks}>
                                    <span className={styles.pgLink}>How It Works</span>
                                    <span className={styles.pgLink}>Master Community</span>
                                    <span className={styles.pgLink}>About MasterFam</span>
                                    <span className={styles.pgLink}>FAQs & Discussion</span>
                                    <span className={styles.pgLink}>Hiring & Careers</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.colLast}>
                            <div className={styles.col}>
                                <span className={styles.topic}>Compare</span>
                                <div className={styles.pgLinks}>
                                    <span className={styles.pgLink}>AirTag</span>
                                    <span className={styles.pgLink}>Tile</span>
                                    <span className={styles.pgLink}>SmartTag</span>
                                    <span className={styles.pgLink}>Chipolo</span>
                                    <span className={styles.pgLink}>JioTag</span>
                                    <span className={styles.pgLink}>Vaya</span>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <span className={styles.topic}>Policies</span>
                                <div className={styles.pgLinks}>
                                    <span className={styles.pgLink}>Privacy & Data</span>
                                    <span className={styles.pgLink}>Terms & Conditions</span>
                                    <span className={styles.pgLink}>Shipping</span>
                                    <span className={styles.pgLink}>Return & Refund</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={styles.foot}>© 2023 Machau Technology | All rights reserved | Made with ❤️</span>
            </div>
        </div>
    )
}

export default Footer