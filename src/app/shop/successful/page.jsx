"use client";

import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/components/Const";
import Image from "next/image";

const Successful = () => {
  // const data = await axios.post("http://localhost:3000/shop/status");

  const query = useSearchParams();

  const transactionId = query.get("transactionId");
  console.log(transactionId);

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      let temp = await axiosInstance.post("/payment-info", {
        transactionId: transactionId,
      });
      temp = temp.data[0];
      setData(temp);
    };

    getData();
  }, [transactionId]);

  // console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <center>
          <Image
            src="/assets/Success.svg"
            width={146}
            height={146}
            className={styles.success}
          />
        </center>

        <div className={styles.head1}>Payment Successful</div>

        <div className={styles.head2}>
          Invoice & shipping details will be <br />
          emailed to you shortly. Thank you!
        </div>
        <br />
        <center>
          <div className={styles.head3}>Order Details</div>
        </center>

        <div className={styles.detail}>
          <div className={styles.det1}>
            <div className={styles.detA}>Name:</div>
            <div className={styles.detA}>Phone Number:</div>
            <div className={styles.detA}>#Transaction ID:</div>
            <hr className={styles.hr} />
            <div className={styles.detA}>MasterTag:</div>
            <div className={styles.detA}>MasterSticker:</div>
            <hr className={styles.hr} />
          </div>
          <div className={styles.det2}>
            <div className={styles.detA}></div>
            <div className={styles.detB}>{data.name}</div>
            <div className={styles.detB}>{data.mobileNumber}</div>
            <div className={styles.detB}>{data.transactionId}</div>
            <hr className={styles.hr} />
            <div className={styles.detB}>₹ {data.tagAmount/100}</div>
            <div className={styles.detB}>
              ₹{" "}
              {data.stickerAmount/100}
            </div>
            <hr className={styles.hr} />
          </div>
        </div>

        <div className={styles.head5}>
        Amount Paid: ₹{data.totAmount/100}
        </div>

        <center>
          <Image
            src="/assets/sum.svg"
            width={40}
            height={300}
            className={styles.hep}
          />
        </center>

      </div>
    </div>
  );
};

export default Successful;
