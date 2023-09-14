"use client"
import React, { useState } from 'react'
import styles from "./accordion.module.css"
import Image from 'next/image';

const Accordion = ({ title, content }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header} onClick={toggleAccordion}>
                <span className={styles.title}>{title}</span>
                <Image
                    src="/assets/AccordionArrow.svg"
                    width={15}
                    height={9}
                    alt='arrow'
                    className={`${styles.arrow} ${!isOpen ? styles.arrowUp : ""}`}
                />
            </div>

            {isOpen &&
                <div className={styles.contents}>
                    {content}
                </div>
            }
        </div>
    )
}

export default Accordion