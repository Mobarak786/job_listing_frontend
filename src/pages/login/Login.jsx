import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import Banner from "../../components/banner/Banner";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <form>
          <h1>Already have an account?</h1>
          <p>Your personal job finder is here</p>
          <label htmlFor="email">
            <input type="email" value={""} placeholder="Email" onChange={""} />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              value={""}
              placeholder="Password"
              onChange={""}
            />
          </label>
          <button type="submit" onClick={""}>
            Sign In
          </button>
          <p>
            Don’t have an account?
            <Link to="/register">
              <a style={{ color: "black", fontWeight: "bolder" }}>signUp</a>
            </Link>
          </p>
        </form>
        <div className={styles.banner}>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Login;
