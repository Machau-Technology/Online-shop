"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import styles from "./page.module.css"
import React from 'react'

const Status = () => {

    // const router = useRouter();
    console.log(useSearchParams());
    const data = useSearchParams();
    console.log(data);

    let orderInfo;

    if (data)
        orderInfo = JSON.parse(data);

    return (
        <div className={styles.container}>
            <h1>
                {orderInfo?.userId}
            </h1>
        </div>
    )
}

export default Status