"use client"

import { useSearchParams } from 'next/navigation'
import styles from "./page.module.css"
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '@/components/Const'
import Image from 'next/image'

const Successful = () => {

    // const data = await axios.post("http://localhost:3000/shop/status");

    const query = useSearchParams();

    const transactionId = query.get("transactionId");
    console.log(transactionId);

    const [data, setData] = useState({});

    useEffect(() => {

        const getData = async () => {
            let temp = await axiosInstance.post("/payment-info", { transactionId: transactionId });
            temp = temp.data[0];
            setData(temp);
        }

        getData();
    }, [transactionId]);

    // console.log(data);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Image
                    src="/assets/Success.svg"
                    width={146}
                    height={146}
                    className={styles.success}
                />

            </div>
        </div>
    )
}

export default Successful