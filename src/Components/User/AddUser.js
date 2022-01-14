import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ title: "", message: "" });

  const usernameInputHandler = function (e) {
    setEnteredUsername(e.target.value);
  };
  const ageInputHandler = function (e) {
    setEnteredAge(e.target.value);
  };

  const addUserHandler = function (e) {
    e.preventDefault();
    console.log(typeof enteredAge);
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredUsername.length < 3
    ) {
      setErrorModal({
        title: "Error Input!",
        message: "Please enter valid username",
      });
      setIsModal(true);
      return;
    }
    if (+enteredAge < 1) {
      setErrorModal({
        title: "Error Age Input!",
        message: "Please, enter a valid age number!",
      });
      setIsModal(true);
      return;
    }
    const id = Math.random().toString();
    const newUser = { username: enteredUsername, age: enteredAge, id: id };
    // console.log(newUser);
    setEnteredUsername("");
    setEnteredAge("");
    props.addNewUser(newUser);
  };
  return (
    <>
      {isModal && (
        <ErrorModal
          title={errorModal.title}
          message={errorModal.message}
          setIsModal={setIsModal}
        />
      )}
      <Card className={classes.input}>
        <form action="" className="user-input-form" onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={enteredUsername}
            onChange={usernameInputHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Enter age"
            value={enteredAge}
            onChange={ageInputHandler}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
