import PetList from "./PetList";
import "./Employee.css";
import React from "react";
import { useState } from 'react';

export const Employee = ({ employee }) => {
  console.log({ employee })
  const [toggle, setToggle] = useState(false)

  function toggleVariable() {
    setToggle(!toggle);
  }

  return (
    <article className="employee">
      <h3>{employee.prefix != "" ? employee.postfix != '' ? employee.prefix + employee.firstName + ' ' + employee.lastName + ', ' + employee.postfix : employee.prefix + employee.firstName + ' ' + employee.lastName :
        employee.postfix != '' ? employee.firstName + ' ' + employee.lastName + ', ' + employee.postfix : employee.firstName + ' ' + employee.lastName}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={toggleVariable}>Show Pets</button>
      {toggle ?
        <PetList empId={employee.id} /> :
        <p></p>}

    </article>
  );
};

export default Employee;
