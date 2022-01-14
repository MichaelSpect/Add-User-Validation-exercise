import React, { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  // console.log(usersData);
  const addNewUser = function (newUser) {
    setUsersData((prevUserData) => [...prevUserData, newUser]);
  };
  return (
    <main>
      <AddUser addNewUser={addNewUser} />
      <UserList usersData={usersData} />
    </main>
  );
}

export default App;
