import React, { useState, useEffect } from "react";

const UserListHoc = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");

  const filteredUsers = users.filter(
    ({ name }) =>
      name.toLowerCase().indexOf(term) >= 0 || name.indexOf(term) >= 0
  );

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const usersJson = await resp.json();
      //   console.log(usersJson);
      setUsers(usersJson);
      //   const data = usersJson.data();
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>
        {filteredUsers.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default UserListHoc;
