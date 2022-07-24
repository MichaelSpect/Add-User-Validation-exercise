import React from "react";
import SearchHoc from "../HOC/SearchHoc";

const UsersForHoc = (data) => {
  console.log("data", data);
  return (
    <div>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

const EnhancedComponent = SearchHoc(UsersForHoc, "users");

export default EnhancedComponent;
