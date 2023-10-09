import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/data");
        setdata(response.data);
      } catch (error) {
        console.error("Error retrieving employees", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <Dashboard data={data} />
    </div>
  );
};

export default App;
