import React from "react";
import styles from "./Button.module.css";

const Button = ({ name, text, bg }) => {
  return (
    <>
      <button
        style={{ backgroundColor: bg, color: text }}
        className={styles.btn}
        type="submit"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
