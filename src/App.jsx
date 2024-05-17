import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import {useEffect} from 'react';
import {useState} from 'react';

function App () {
  // Youtube video , CrtmSbz6k5E&t=11s 
  const [records, setRecords] = useState([])
  useEffect (()=>{
    fetch('https://vet-app-0obi.onrender.com/api/employees')
    .then(response => response.json())
    .then(data => setRecords(data))
    .catch(err => console.log(err))

  }, [])
  
  return (
    <>
      <NavBar />
      <EmployeeList records={records}  />
    </>
  );
};

export default App;
