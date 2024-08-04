import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import styles from "./register.module.css";
const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.register_container}>
        <div className={styles.register}>
          <h1>Create an account</h1>
          <p>Your personal job finder is here</p>

          <form>
            <label htmlFor="name">
              <input type="text" placeholder="Name" />
            </label>

            <label htmlFor="email">
              <input type="email" placeholder="Email" />
            </label>

            <label htmlFor="number">
              <input type="number" placeholder="Mobile" />
            </label>

            <label htmlFor="password">
              <input type="text" placeholder="Password" />
            </label>

            <div className={styles.tandc}>
              <input type="checkbox" />
              <span>
                By creating an account, I agree to our terms of use and privacy
                policy
              </span>
            </div>

            <button type="submit">Create Account</button>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <a style={{ color: "black", fontWeight: "bold" }}>signIn</a>
              </Link>
            </p>
          </form>
        </div>
        <div className={styles.banner}>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Register;
