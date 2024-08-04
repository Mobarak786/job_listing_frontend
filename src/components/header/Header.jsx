import React from "react";
import styles from "./header.module.css";
import Button from "../../shared/Button/Button";
import avatar from "../../assets/images/avatar.png";

const Header = () => {
  const user = false;
  return (
    <div className={styles.container}>
      <div className={styles.auth_section}>
        <h1>Jobfinder</h1>
        {user ? (
          <div className={styles.user_accounts}>
            <h2>Logout</h2>
            <p>Hello Requiter</p>
            <img src={avatar} alt="img" />
          </div>
        ) : (
          <div className={styles.btn_section}>
            <Button name={"Login"} bg={"transparent"} text={"white"} />
            <Button name={"Register"} bg={"white"} text={"#ed5353"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
