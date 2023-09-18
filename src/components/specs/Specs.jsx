import React from 'react'
import styles from "./specs.module.css"

const Specs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.heading}>MasterTag Tech Specs</span>
                <span className={styles.headingDesc}>Detailed parameters of MasterTag device.</span>
            </div>

            <div className={styles.main}>
                <div className={styles.row}>
                    <span className={styles.topic}>Size and Weight</span>
                    <div className={styles.desc}>
                        <div className={styles.col}>
                            <span className={styles.sub}>Size</span>
                            <span className={styles.subDesc}>Length = Width: 38mm</span>
                            <span className={styles.subDesc}>Height: 5.5mm</span>
                        </div>
                        <div className={styles.col}>
                            <span className={styles.sub}>Weight</span>
                            <span className={styles.subDesc}>10 grams</span>
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <span className={styles.topic}>Splash, Water & Dust Resistance</span>
                    <div className={styles.desc}>
                        Rated IP67 (maximum depth of 1 metre up to 30 minutes)
                    </div>
                </div>

                <div className={styles.row}>
                    <span className={styles.topic}>Connectivity</span>
                    <div className={styles.desc}>
                        Bluetooth Low Energy 5.0 <br />
                        Range: Up to 262 foot (80m)
                    </div>
                </div>

                <div className={styles.row}>
                    <span className={styles.topic}>Speaker</span>
                    <div className={styles.desc}>
                        Built-in speaker <br />
                        Volume: 98dB
                    </div>
                </div>

                <div className={styles.row}>
                    <span className={styles.topic}>Light</span>
                    <div className={styles.desc}>
                        2 LEDs <br />
                        Blue and Red light
                    </div>
                </div>

                <div className={styles.row}>
                    <span className={styles.topic}>Battery</span>
                    <div className={styles.desc}>
                        Rechargeable built-in battery <br />
                        Life: 4-6 months per charge
                    </div>
                </div>

                <div className={styles.row}>
                    <span className={styles.topic}>Accessibility</span>
                    <div className={styles.desc}>
                        MasterTag App <br />
                        Supports both Android and iOS
                    </div>
                </div>

                <div className={styles.row}>
                    <span className={styles.topic}>Environmental Requirements</span>
                    <div className={styles.desc}>
                        Operating temperature: -40℃~+70℃ <br />
                        Storage temperature:
                    </div>
                </div>

                <div className={styles.row}>
                    <span className={styles.topic}>Accessories</span>
                    <div className={styles.desc}>
                        Charging cable | Tag | 3M Sticker
                    </div>
                </div>

                <div className={styles.row}>
                    <span className={styles.topic}>Certifications</span>
                    <div className={styles.desc}>
                        CE | FCC
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specs