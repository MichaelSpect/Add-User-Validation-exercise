import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  console.log(props.usersData.length);
  return (
    <Card className={classes.users}>
      <ul>
        {props.usersData.length > 0 &&
          props.usersData.map((user) => (
            <li key={user.id}>{`${user.username} (${user.age} years old)`}</li>
          ))}
      </ul>
    </Card>
  );
};

export default UserList;
