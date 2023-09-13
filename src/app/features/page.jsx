import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.heading}>How we solve?</span>
                <span className={styles.headDesc}>MasterTag helps you to keep track of your assets! </span>
                <div className={styles.links}>
                    <span className={styles.link1}>Main Features</span>
                    <Link href="" className={styles.link2}>
                        <button className={styles.yt}>Watch Video {">"}</button>
                    </Link>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.row}>
                    <Image
                        src="/assets/Track.svg"
                        alt='Track'
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                    <div className={styles.contents}>
                        <span className={styles.topic}>Keep Track</span>
                        <p className={styles.desc}>
                            Mastertag is a simple way to keep track of your stuff.
                            Tag one on your keys. Put one in your backpack.
                            Stick another on your TV remote.
                            And there they are in the MasterTag app.
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image
                        src="/assets/TableWithKey.svg"
                        alt='Board'
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                    <div className={styles.contents}>
                        <span className={styles.topic}>Find Your Stuff!</span>
                        <p className={styles.desc}>
                            Why spend your time searching for lost assets when they can speak
                            and tell you where they are. Here is the smart & easy way to
                            find your everyday essentials with MasterTag!
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image
                        src="/assets/Speak.svg"
                        alt='Speak'
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                    <div className={styles.contents}>
                        <span className={styles.topic}>Assets Speaks</span>
                        <p className={styles.desc}>
                            Misplacing something like your wallet doesn’t have to be a big deal
                            when it has a MasterTag attached. Just tap “Play Sound” in the
                            MasterTag app and the MasterTag on your keys will ring.
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image
                        src="/assets/Alerts.svg"
                        alt='Alerts'
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                    <div className={styles.contents}>
                        <span className={styles.topic}>Master Alerts</span>
                        <p className={styles.desc}>
                            MasterTag alerts you leave anything behind, no matter where you are or where
                            you move. We will make sure that you leave that location with all of the
                            MasterTaged items you brought with you.
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image
                        src="/assets/History.svg"
                        alt='History'
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                    <div className={styles.contents}>
                        <span className={styles.topic}>Master History</span>
                        <p className={styles.desc}>
                            If you lose something when you're out and about, MasterTag can help you
                            locate it. View its most recent location on maps. It'll show you
                            the last time when it was with you and also you can see the
                            last 30 days location history.
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image
                        src="/assets/Find.svg"
                        alt='Find'
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                    <div className={styles.contents}>
                        <span className={styles.topic}>Find Your Phone</span>
                        <p className={styles.desc}>
                            Lost your phone? Make your phone ring by using MasterTag, like the
                            ones on your keys or wallet. Press the MasterTag button twice.
                            It works even if your phone is on silent.
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image
                        src="/assets/Together.svg"
                        alt='Together'
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                    <div className={styles.contents}>
                        <span className={styles.topic}>Find Together</span>
                        <p className={styles.desc}>
                            ‘MasterTag Community’ helps to find;
                            When you lose your MasterTag, enable Lost Mode in the MasterTag app,
                            whenever any MasterTag app detects it, you'll receive an
                            automatic notification of its location!
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <Image
                        src="/assets/Scan.svg"
                        alt='Scan'
                        width={400}
                        height={400}
                        className={styles.image}
                    />
                    <div className={styles.contents}>
                        <span className={styles.topic}>Master Scan</span>
                        <p className={styles.desc}>
                            This feature enables you to quickly scan and detect any
                            unknown MasterTags that may be traveling with you.
                            MasterTag is designed to locate lost or misplaced items, not to track people.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About