import React from "react";
import styles from "./threeDView.module.css";
import Image from "next/image";
import Link from "next/link";
import Floor from "../Floor";
// import ThreeScene from './Threescene'

const ThreeDView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.heading}>
          <span className={styles.normal}>Tag it.</span>
          <span className={styles.bold}>Find it.</span>
        </div>
        <span className={styles.desc}>MasterTag 360 Degree View</span>
      </div>
      <div className={styles.threed}>
      <Floor />
      </div>
      <Link href="/shop">
        <button className={styles.shop}>Shop now</button>
      </Link>
    </div>
  );
};

export default ThreeDView;
