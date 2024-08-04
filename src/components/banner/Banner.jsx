import React from "react";
import bannerImage from "../../assets/images/banner.png";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={bannerImage} alt="bannerImage" />
      <h1>Your Personal Job Finder</h1>
    </div>
  );
};

export default Banner;
