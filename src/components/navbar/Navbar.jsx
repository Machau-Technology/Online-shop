"use client";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  // console.log(pathName);

  const [openPod, setOpenPod] = useState(false);
  const [openRes, setOpenRes] = useState(false);
  const [openCom, setOpenCom] = useState(false);
  const [visible, setVisible] = useState(false);

  const handlePodClick = () => {
    setOpenRes(false);
    setOpenCom(false);
    setOpenPod(!openPod);
  };

  const handleResClick = () => {
    setOpenPod(false);
    setOpenCom(false);
    setOpenRes(!openRes);
  };

  const handleComClick = () => {
    setOpenPod(false);
    setOpenRes(false);
    setOpenCom(!openCom);
  };

  const handleMobClick = () => {
    setVisible(!visible);
  };

  console.log(visible);

  useEffect(() => {
    setOpenPod(false);
    setOpenRes(false);
    setOpenCom(false);
  }, [pathName]);

  return (
    <>
      <div className={styles.empty}></div>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.limg}
            src="/assets/Logo.png"
            alt="MasterTag"
            width={59}
            height={58}
          />
        </Link>
        <div className={styles.links}>
          <div className={styles.pod}>
            <span className={styles.linkName} onClick={handlePodClick}>
              Products
            </span>
            <Image
              src="/assets/ArrowDown.png"
              alt="ArrowDown"
              width={8}
              height={6}
              onClick={(e) => setOpenPod(!openPod)}
            />
            {openPod && (
              <div className={styles.options}>
                <Link href="/shop">
                  <span
                    className={`${styles.option} ${
                      pathName === "/shop" ? styles["active"] : ""
                    }`}
                  >
                    MasterTag
                  </span>
                </Link>

                <Link href="/shop/master-sticker/ms-75">
                  <span
                    className={`${styles.option} ${
                      pathName === "/shop/master-sticker/ms-75"
                        ? styles["active"]
                        : ""
                    }`}
                  >
                    MasterSticker 075
                  </span>
                </Link>

                <Link href="/shop/master-sticker/ms-100">
                  <span
                    className={`${styles.option} ${
                      pathName === "/shop/master-sticker/ms-100"
                        ? styles["active"]
                        : ""
                    }`}
                  >
                    MasterSticker 100
                  </span>
                </Link>

                <Link href="/shop/master-sticker/ms-150">
                  <span
                    className={`${styles.option} ${
                      pathName === "/shop/master-sticker/ms-150"
                        ? styles["active"]
                        : ""
                    }`}
                  >
                    MasterSticker 150
                  </span>
                </Link>
              </div>
            )}
          </div>

          <div className={styles.res}>
            <span className={styles.linkName} onClick={handleResClick}>
              Resources
            </span>
            <Image
              src="/assets/ArrowDown.png"
              alt="ArrowDown"
              width={8}
              height={6}
              onClick={handleResClick}
            />
            {openRes && (
              <div className={styles.options}>
                <span
                  className={`${styles.option} ${
                    pathName === "/shop" ? styles["active"] : ""
                  }`}
                >
                  Help
                </span>
                <span
                  className={`${styles.option} ${
                    pathName === "/shop/master-sticker/ms-75"
                      ? styles["active"]
                      : ""
                  }`}
                >
                  How it works
                </span>
                <span
                  className={`${styles.option} ${
                    pathName === "/shop/master-sticker/ms-100"
                      ? styles["active"]
                      : ""
                  }`}
                >
                  Compare with
                </span>
              </div>
            )}
          </div>

          <div className={styles.com}>
            <span className={styles.linkName} onClick={handleComClick}>
              Community
            </span>
            <Image
              src="/assets/ArrowDown.png"
              alt="ArrowDown"
              width={8}
              height={6}
              onClick={handleComClick}
            />
            {openCom && (
              <div className={styles.options}>
                <span
                  className={`${styles.option} ${
                    pathName === "/shop" ? styles["active"] : ""
                  }`}
                >
                  Join community
                </span>
                <span
                  className={`${styles.option} ${
                    pathName === "/shop/master-sticker/ms-75"
                      ? styles["active"]
                      : ""
                  }`}
                >
                  About community
                </span>
              </div>
            )}
          </div>

          <Link href="/tagStick" className={styles.link}>
            <button className={styles.shopBtn}>Shop now</button>

            <Image
              className={styles.shopBtnMob}
              src="/assets/micon.svg"
              alt="icon"
              width={40}
              height={40}
            />
          </Link>

          <Image
            src="/assets/ThreeLines.png"
            width={20}
            height={15}
            alt="ThreeLines"
            className={styles.three}
            onClick={handleMobClick}
          />
        </div>
        
        {visible && (
          <div className={styles.mpod}>
                <Link href="/shop">
                  <span
                    className={`${styles.option} ${
                      pathName === "/shop" ? styles["active"] : ""
                    }`}
                  >
                    MasterTag
                  </span>
                </Link>
<br/>
                <Link href="/shop/master-sticker/ms-75">
                  <span
                    className={`${styles.option} ${
                      pathName === "/shop/master-sticker/ms-75"
                        ? styles["active"]
                        : ""
                    }`}
                  >
                    MasterSticker 075
                  </span>
                </Link>
<br/>
                <Link href="/shop/master-sticker/ms-100">
                  <span
                    className={`${styles.option} ${
                      pathName === "/shop/master-sticker/ms-100"
                        ? styles["active"]
                        : ""
                    }`}
                  >
                    MasterSticker 100
                  </span>
                </Link>
<br/>
                <Link href="/shop/master-sticker/ms-150">
                  <span
                    className={`${styles.option} ${
                      pathName === "/shop/master-sticker/ms-150"
                        ? styles["active"]
                        : ""
                    }`}
                  >
                    MasterSticker 150
                  </span>
                </Link>
              </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
