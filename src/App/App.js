import React, { useState } from "react";
import CardList from "../components/CardList/CardList";
import "./App.css";
import Filter from "../components/filter/Filter";
import Model from "../components/Modal/Modal";
import Button from "../components/Layout/Button";
import AddUser from "../components/AddUser/AddUser";

function App() {
  const [cardToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState([
    {
      id: 1,
      name: "Omar",
      phone: "01276412078",
      age: 22,
      address: "Alex",
      type: "boy",
    },
    {
      id: 2,
      name: "Mariem",
      phone: "0987654321",
      age: 23,
      address: "Earth",
      type: "girl",
    },
    {
      id: 3,
      name: "Ahmed",
      phone: "0123456789",
      age: 26,
      address: "El-montaza",
      type: "boy",
    },
    {
      id: 4,
      name: "Esraa",
      phone: "0987654321",
      age: 21,
      address: "Agamy",
      type: "girl",
    },
  ]);

  const deleteHandler = (clickedId) => {
    setState((prevState) => {
      return prevState.filter((el) => el.id !== clickedId);
    });
  };

  const filterName = (txt) => {
    setFilter(txt);
  };

  const nameHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return state;
  };

  const newUserHandler = (data) => {
    console.log(data);
    setState((prevState) => [...prevState, { ...data }]);
  };

  return (
    <>
      <div className="mainContainer">
        <h1>List of Data</h1>

        <div>
          <Button
            style={{ marginBottom: "20px" }}
            onClick={() => {
              setCardToggle(!cardToggle);
            }}
          >
            {cardToggle ? "Hide Cards" : "Show Cards"}
          </Button>

          <Button
            style={{ marginLeft: "20px" }}
            onClick={() => {
              setShowModal(true);
            }}
          >
            New Record
          </Button>
        </div>

        <div className={cardToggle ? "show" : "hide"}>
          <div style={{ marginBottom: "10px" }}>
            <Filter filteration={filterName} />
          </div>
          <CardList nameList={nameHandler()} deleteFunc={deleteHandler} />
        </div>
      </div>

      <Model show={showModal} closeModal={() => setShowModal(false)}>
        <AddUser
          newUserHandler={newUserHandler}
          closeModal={() => setShowModal(false)}
        />
      </Model>
    </>
  );
}

export default App;
