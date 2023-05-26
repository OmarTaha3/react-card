import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, name, phone, age, address, type, deleteFunc }) => {
  return (
    <div
      className={styles.cardWrapper}
      style={{ backgroundColor: type === "girl" ? "pink" : "aqua" }}
    >
      <div>Name: {name}</div>
      <div>Phone: {phone}</div>
      <div>Age: {age}</div>
      <div>Address: {address}</div>
      <div className={styles.deleteBtn} onClick={() => deleteFunc(id)}>
        x
      </div>
    </div>
  );
};

export default Card;
