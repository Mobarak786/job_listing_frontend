import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header/header";
import SearchBar from "../../components/Search/SearchBar";
import JobList from "../../components/jobList/JobList";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.search_section}>
        <SearchBar />
      </section>
      <section className={styles.job_section}>
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
        <JobList />
      </section>
    </div>
  );
};

export default Home;
