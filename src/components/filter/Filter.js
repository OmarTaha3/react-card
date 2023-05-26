import React, { useState } from "react";
import styles from "./filter.module.css";
const Filter = ({ filteration }) => {
  const [filter, setFilter] = useState("");
  return (
    <div className={styles.mb}>
      <input
        type="text"
        placeholder="Text"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          filteration(e.target.value);
        }}
      />
    </div>
  );
};

export default Filter;
