import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";

const AddUser = ({ newUserHandler, closeModal }) => {
  const [input, setInput] = useState({
    id: "",
    name: "",
    phone: "",
    age: "",
    address: "",
    type: "",
  });

  const inputHandler = (e) => {
    input.id = Math.round(Math.random() * 100);
    const key = e.target.id;
    const value = e.target.value;
    setInput((prevState) => ({ ...prevState, [key]: value }));
  };

  const onSubmitHandler = (event) => {
    newUserHandler (input);
    event.preventDefault();
    setInput({
      id: "",
      name: "",
      phone: "",
      age: "",
      address: "",
      type: "",
    });
    closeModal()
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Form.Controller>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={input.name}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="type">Gender</label>
        <input
          type="text"
          id="type"
          placeholder="Enter Gender"
          value={input.type}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter Phone"
          value={input.phone}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          placeholder="Enter Age"
          value={input.age}
          onChange={inputHandler}
        />
      </Form.Controller>
      <Form.Controller>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Enter Address"
          value={input.address}
          onChange={inputHandler}
        />
      </Form.Controller>

      <div style={{ margin: "20px 0 10px", textAlign: "center" }}>
        <Button type="submit">Save</Button>
        <Button type="reset" style={{ marginLeft: "20px" }}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default AddUser;
