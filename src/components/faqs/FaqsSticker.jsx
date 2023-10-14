import React from 'react'
import styles from "./faqs.module.css"
import Accordion from '../accordion/Accordion'

const FaqsSticker = () => {

    const data = [
        {
            title: "What will someone see when they scan my MasterSticker?",
            content: `After scanning MasterSticker, they can view your details on the display page, where you have the control to choose what you want to show and make edits anytime.`
        },
        {
            title: "Are the MasterSticker waterproof?",
            content: `Yes! MasterSticker is Water, Splash, Scratch and Tear Proof.`
        },
        {
            title: "Can I use multiple MasterSticker together?",
            content: `Yes! You have the flexibility to include as many MasterStickers as you like on your dashboard.`
        },
        {
            title: "Do I need to pay to use MasterSticker’s Anonymous Chat Bot?",
            content: `No! There is no requirement for any extra payment to use MasterSticker and its features. `
        },
        {
            title: "What phones and tablets are compatible with MasterSticker?",
            content: `Android, iOS and other web browsers are compatible with MasterSticker.`
        },
    ]
    return (
        <div className={styles.container}>
            <span className={styles.head}>FAQs</span>
            <div className={styles.main}>
                {data.map((item, index) => (
                    <Accordion
                        title={item.title}
                        content={item.content}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default FaqsSticker