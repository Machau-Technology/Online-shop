import React from 'react'
import styles from "./faqs.module.css"
import Accordion from '../accordion/Accordion'

const Faqs = () => {

    const data = [
        {
            title: "What is MasterTag’s Bluetooth finding range?",
            content: `Our MasterTag has a range up to 262ft / 80m. However, as with all wireless technologies, 
            different environments impact the effective range of Bluetooth signals. If your MasterTag is
            out of Bluetooth range, you can check its last known location on the app. This information is 
            automatically updated whenever anyone in the MasterTag community comes within Bluetooth 
            range of your MasterTag. All location and user information is secure and used exclusively for 
            finding accuracy. MasterTag does not sell any user data.`
        },
        {
            title: "How does this compare to a GPS device?",
            content: `Bluetooth and GPS trackers differ in many ways. In general, GPS trackers maintain a constant
            connection via satellite and provide real-time tracking. Bluetooth trackers work within a
            shorter range and are dependent on a connection to a Bluetooth enabled device. Bluetooth 
            trackers typically cost less, are lighter, and use less power. Our tiny MasterTag is designed to 
            fit on a variety of assets, including a TV remote!`
        },
        {
            title: "How can I attach a MasterTag to my items?",
            content: `There are three different ways to attach your MasterTag to an asset.
            1. Stick MasterTag to your items like a laptop, camera, chargers, etc.
            2. Slide MasterTag into your backpack, purse, or luggage pockets.
            3. Tag MasterTag to your items/pets/kids using the MasterTag hole.`
        },
        {
            title: "What is MasterTag’s battery duration?",
            content: ``
        },
        {
            title: "Can I use multiple MasterTags together?",
            content: ``
        },
        {
            title: "Do I need to pay to use MasterTag’s finding features?",
            content: `No, the app is free to use for our core finding features like ring MasterTag , find my phone, 
            see its location on a map, share with a friend, and community find.
            Premium unlocks more features like MasterTag Alerts, 30 Day Location History, Unlimited Sharing,
            Warranty and Premium Customer Care.`
        },
        {
            title: "What phones and tablets are compatible with MasterTag?",
            content: `MasterTag works with most iOS and Android devices.`
        }
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

export default Faqs