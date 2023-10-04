"use client"

import { useSearchParams } from 'next/navigation'
import styles from "./page.module.css"
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '@/components/Const'

const Status = () => {

    // const data = await axios.post("http://localhost:3000/shop/status");

    const query = useSearchParams();

    const transactionId = query.get("transactionId");
    console.log(transactionId);

    const [data, setData] = useState({});

    useEffect(() => {

        const getData = async () => {
           let temp = await axiosInstance.post("/payment-info", { transactionId: transactionId });
            temp = temp.data[0]
            setData(temp);
        }

        getData();
    }, [transactionId]);

    // console.log(data);

    return (
        <div className={styles.container}>
            <h1>
                {data.mobileNumber}
            </h1>

        
        </div>
    )
}

export default Status