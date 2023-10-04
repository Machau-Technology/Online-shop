"use client"

import { useSearchParams } from 'next/navigation'
import styles from "./page.module.css"
import React, { useEffect } from 'react'
import { axiosInstance } from '@/components/Const'

const Status = () => {

    // const data = await axios.post("http://localhost:3000/shop/status");

    const query = useSearchParams();

    const transactionId = query.get("transactionId");
    console.log(transactionId);

    let data = {};

    useEffect(() => {

        const getData = async () => {
            data = await axiosInstance.get("/payment-info", transactionId);
            console.log(data);
        }

        getData();
    }, []);

    return (
        <div className={styles.container}>
            <h1>
                {data.userId}
            </h1>
        </div>
    )
}

export default Status