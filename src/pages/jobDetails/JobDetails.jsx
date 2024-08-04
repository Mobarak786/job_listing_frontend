import React from "react";
import styles from "./JobDetails.module.css";

import money from "../../assets/icons/money.png";
import date from "../../assets/icons/date.png";

import Header from "../../components/header/Header";
import Button from "../../shared/Button/Button";

const JobDetails = () => {
  return (
    <>
      <header style={{ background: "#ffefef" }}>
        <Header />
      </header>
      <div className={styles.container}>
        <div className={styles.job_Heading}>
          WordPress Development work from home job/internship at Adyaka Infosec
          Private Limited
        </div>
        <div className={styles.job_body}>
          <div className={styles.top_details}>
            <span>1h ago</span>
            <span>.</span>
            <span>Fulltime</span>
            <img
              alt="company-logo"
              src="data:image/jpeg;base64,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"
            />
            <span>google</span>
          </div>
          <div className={styles.title_section}>
            <h1>html developement</h1>
            <Button name={"Edit job"} bg={"#ED5353"} text={"white"} />
          </div>
          <p className={styles.job_location}>kolkata | india</p>

          <div className={styles.salary_details}>
            <div>
              <span>
                <img alt="money" src={money} /> Stipened
              </span>
              <h3>Rs 25000/month</h3>
            </div>
            <div>
              <span>
                <img alt="date" src={date} /> Duration
              </span>
              <h3>6 Months</h3>
            </div>
          </div>

          <div className={styles.company_details}>
            <h1>About Company</h1>
            <p>
              We provide technology-based services to help businesses and
              organizations achieve their goals. We offer a wide range of
              services, including software development, system integration,
              network and security services, cloud computing, and data
              analytics. Our primary focus is on leveraging technology to
              streamline business processes, improve productivity, and enhance
              overall efficiency.
            </p>
          </div>

          <div className={styles.company_details}>
            <h1>About the job/internship</h1>
            <p>
              We are looking for a responsible PHP/WordPress/Laravel/Shopify
              Developer. He/She will be liable for managing services and
              therefore the interchange of knowledge between the server and the
              users. The candidate's primary focus is going to be the event of
              all server-side logic, definition, and maintenance of the central
              database and ensuring high performance and responsiveness to
              requests from the front end. Selected intern's day-to-day
              responsibilities include: 1. Work on the development of theme
              customization, liquid programming language, and corresponding apps
              2. Implement system integrations that are crucial to our success
              3. Contribute to the development of HTML5/CSS/JavaScript and
              standard web technologies integral to building seamless
              multi-channel experiences 4. Work on speed optimization and making
              a mobile-friendly website
            </p>
          </div>

          <div className={styles.company_details}>
            <h1>Skill(s) required</h1>
            <div className={styles.skills}>
              <button>skill</button>
              <button>javascript</button>
              <button>skill</button>
            </div>
          </div>
          <div className={styles.company_details}>
            <h1>Additional Information</h1>
            <p>
              Stipend structure: This is a performance-based internship. In
              addition to the minimum-assured stipend, you will also be paid a
              performance-linked incentive (₹ 2500 per design).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
