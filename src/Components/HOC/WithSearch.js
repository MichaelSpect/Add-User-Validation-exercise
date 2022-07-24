import React, { useState, useEffect } from "react";

const WithSearch = (WrappedComponent, entity) => {
  const [data, setData] = useState([]);
  const [inputTerm, setInputTerm] = useState("");

  const inputHandler = (e) => {
    setInputTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/${entity}`
      );
      const dataJson = await resp.json();
      console.log(dataJson);
      setData(dataJson);
    };
    fetchData();
  }, []);
  return (props) => {
    const filteredData = data.filter((d) => {
      if (entity === "users") {
        const { name } = d;
        return (
          name.toLowerCase().indexOf(inputTerm) >= 0 ||
          name.indexOf(inputTerm) >= 0
        );
      }
    });

    return (
      <div>
        <input type="text" value={inputTerm} onChange={inputHandler} />
        <WrappedComponent data={filteredData} {...props} />;
      </div>
    );
  };
};

export default WithSearch;
