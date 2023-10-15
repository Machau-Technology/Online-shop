import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Help = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.head}>Browse our Topics</span>
        <div className={styles.main}>
          <div className={styles.section}>
            <Image
              src="/assets/idea.svg"
              alt="idea"
              width={70}
              height={70}
              className={styles.image}
            />
            <span className={styles.topic}>How To</span>
            <div className={styles.methods}>
              <span className={styles.method}>Get Started</span>
              <span className={styles.method}>Use the App</span>
            </div>
          </div>

          <div className={styles.section}>
            <Image
              src="/assets/settings.svg"
              alt="idea"
              width={70}
              height={70}
              className={styles.image}
            />
            <span className={styles.topic}>Troubleshooting</span>
            <div className={styles.methods}>
              <span className={styles.method}>Orders</span>
              <span className={styles.method}>Trackers & App</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.head2}>Need more help?</span>
        <span className={styles.desc}>
          Contact us at{" "}
          <Link href="mailto:support@mastertag.in" className={styles.mail}>
            support@mastertag.in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Help;
