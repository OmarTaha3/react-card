import React from "react";
import Card from "../Card/Card";

let CardList = ({ nameList, deleteFunc }) => {
  console.log(nameList);
  let cards = nameList.map(({ id, ...otherProps }) => (
    <Card key={id} {...otherProps} id={id} deleteFunc={deleteFunc} />
  ));
  return <div>{cards}</div>;
};

export default CardList;
