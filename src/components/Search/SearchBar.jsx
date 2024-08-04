import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import search from "../../assets/icons/search.png";
import Button from "../../shared/Button/Button";
const SearchBar = () => {
  const user = true;
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    if (!e.target.value) return;
    const newArray = skills?.filter((skill) => skill === e.target.value);
    !newArray.length && setSkills([...skills, e.target.value]);
  };
  const handleRemove = (selected) => {
    const newArr = skills.filter((skill) => skill != selected);
    setSkills(newArr);
  };
  return (
    <div className={styles.SearchBar}>
      <label htmlFor="" className={styles.SearchBox}>
        <img
          src={search}
          alt="serachlogo"
          width={30}
          height={30}
          style={{ cursor: "pointer" }}
        />
        <input
          type="text"
          name="serach"
          placeholder="Type any job title"
          // onChange={""}
          // value={""}
        />
      </label>
      <div className={styles.skill_section}>
        <div className={styles.skill_list}>
          <select name="selectSkill" onChange={handleChange}>
            <option value="">skills</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="Html">Html</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          {skills.map((skill) => (
            <div key={skill} className={styles.skills}>
              <h1>{skill}</h1>
              <button onClick={() => handleRemove(skill)}>X</button>
            </div>
          ))}

          <button className={styles.clear_btn} onClick={() => setSkills([])}>
            Clear
          </button>
        </div>
        {user && <Button name={"+ Add Job"} bg={"#ED5353"} text={"white"} />}
      </div>
    </div>
  );
};

export default SearchBar;
