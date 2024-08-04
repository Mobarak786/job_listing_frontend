import React from "react";
import { Link } from "react-router-dom";
import styles from "./JobList.module.css";
import companylogo from "../../assets/icons/logo.png";
import countryLogo from "../../assets/icons/country.png";
import peopleLogo from "../../assets/icons/people.png";
import Button from "../../shared/Button/Button";

const JobList = () => {
  const user = true;
  return (
    <div className={styles.jobBox}>
      <div className={styles.container1}>
        <img
          src={companylogo}
          alt="company-logo"
          style={{ height: "55px", width: "55px", objectFit: "contain" }}
        />
        <div className={styles.container1_details}>
          <h2>Frontend deveoper</h2>
          <div className={styles.company_details}>
            <span>
              <img
                alt="icon"
                src={peopleLogo}
                style={{ height: "16px", width: "16px", objectFit: "contain" }}
              />
              <p>11-50</p>
            </span>

            <span>
              <p>₹ 50000</p>
            </span>

            <span>
              <img
                src={countryLogo}
                alt="countrylogo"
                style={{ height: "33px", width: "33px", objectFit: "contain" }}
              />
              <p>India</p>
            </span>
          </div>
          <div className={styles.job_type}>
            <p>Office</p>
            <p>Fulltime</p>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.skills}>
          <button>css</button>
          <button>cvg</button>
          <button>css</button>
        </div>
        <div className={styles.btns}>
          {user && <Button name={"Edit job"} bg={"white"} text={"#ED5353"} />}
          <Link to="/jobdetails">
            <Button name={"View Details"} bg={"#ED5353"} text={"white"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobList;
