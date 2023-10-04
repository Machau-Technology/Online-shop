import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const About = () => {

    const valuesData = [
        {
            image: "/assets/rock-star.gif",
            title: "Must have vs Good to have",
            desc: "This helps in prioritizing the work right, building the most important things and keeping the pace up."
        },
        {
            image: "/assets/crown.gif",
            title: "User is the King",
            desc: "That's our thought process for decision making. Always think about the user first."
        },
        {
            image: "/assets/hands.gif",
            title: "We over me, always",
            desc: "We strongly believe in the power of team. Individually we are a drop, and together we are an ocean."
        },
        {
            image: "/assets/leo.gif",
            title: "Do whatever it takes",
            desc: "Nothing should stop the execution. Don't stop when you are tired, stop when you are done."
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.aboutUs}>
                <div className={styles.top}>
                    <span className={styles.heading}>About Us</span>
                    <p className={styles.headDesc}>
                        We help people locate the things that matter to them most.
                        We believe there’s a better, smarter way to find lost things,
                        one that takes all of us working together. Our aim is to make
                        that happen and give every item the power to speak and to be found.
                    </p>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.row}>
                        <Image
                            src="/assets/Girl.png"
                            width={396}
                            height={263}
                            alt='Girl holding keys'
                            className={styles.girl}
                        />
                        <div className={styles.info}>
                            <span className={styles.infoHead}>Our Mission</span>
                            <p className={styles.infoDesc}>
                                We are on an interesting journey to give an ability to be found
                                for every non-living things which lives with us and that matters to us.
                            </p>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <Image
                            src="/assets/Cup.png"
                            width={332}
                            height={329}
                            alt='Table with accessories'
                            className={styles.cup}
                        />
                        <div className={styles.info}>
                            <span className={styles.infoHead}>Our Story</span>
                            <p className={styles.infoDesc}>
                                It all began with our Founder's desire to solve an everyday
                                problem that everyone faces in their daily life...
                                Finding misplaced essentials. We believe that misplacing
                                something should not hinder anyone's ability to complete their day.
                                There is always a smart & easy way to find our stuff.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.valuesSection}>
                <span className={styles.valHead}>The values we live for</span>
                <div className={styles.values}>
                    {valuesData.map((item, index) => (
                        <div className={styles.valCard} key={index}>
                            <Image
                                src={item.image}
                                width={75}
                                height={75}
                                alt="Values"
                                className={styles.gif}
                            />
                            <span className={styles.valTitle}>{item.title}</span>
                            <p className={styles.valDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.familySection}>
                <div className={styles.nonColored}>
                    <span className={styles.famTitle}>MasterFamily</span>
                </div>
                <div className={styles.colored}>

                </div>
            </div>
        </div>
    )
}

export default About