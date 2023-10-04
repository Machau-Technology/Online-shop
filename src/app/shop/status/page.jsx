"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import styles from "./page.module.css"
import React from 'react'
import axios from 'axios'

const Status = async () => {

    const data = await axios.post("http://localhost:3000/shop/status");

    console.log(data);

    return (
        <div className={styles.container}>
            <h1>
                Status
            </h1>
        </div>
    )
}

export default Status