"use client";

import React from "react";
import styles from "./Logo.module.css";

const Logo = ({ size = "md", light = false }) => {
  return (
    <div className={`${styles.logoWrapper} ${styles[size]} ${light ? styles.light : ""}`}>
      <div className={styles.iconBox}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.brandName}>آرتي</span>
        <span className={styles.brandSub}>للبرمجيات</span>
      </div>
    </div>
  );
};

export default Logo;
