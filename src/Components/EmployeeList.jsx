import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import {useEffect} from 'react';
import {useState} from 'react';

export const EmployeeList = ({ records }) => {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {records.map(record => (
          <Employee key={record.id} employee={record} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
