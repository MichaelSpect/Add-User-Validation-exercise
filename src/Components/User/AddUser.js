import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [errorModal, setErrorModal] = useState();

  const addUserHandler = function (e) {
    e.preventDefault();
    const userName = nameInputRef.current.value;
    const userAge = ageInputRef.current.value;
    console.log(typeof enteredAge);
    if (
      userName.trim().length === 0 ||
      userAge.trim().length === 0 ||
      userName.length < 3
    ) {
      setErrorModal({
        title: "Error Input!",
        message: "Please enter valid username",
      });
      return;
    }
    if (+userAge < 1) {
      setErrorModal({
        title: "Error Age Input!",
        message: "Please, enter a valid age number!",
      });
      return;
    }
    const id = Math.random().toString();
    const newUser = { username: userName, age: userAge, id: id };
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    props.addNewUser(newUser);
  };
  const modalHendler = function () {
    setErrorModal(null);
  };
  return (
    <Wrapper>
      {errorModal && (
        <ErrorModal
          title={errorModal.title}
          message={errorModal.message}
          errorConfirm={modalHendler}
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
            // value={enteredUsername}
            // onChange={usernameInputHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Enter age"
            // value={enteredAge}
            // onChange={ageInputHandler}
            ref={ageInputRef}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
