import React from 'react';
import { useState } from 'react';
import {useEffect} from 'react';

export const PetList = ({ empId }) => {
  console.log({ empId });

  const [pet, setPet] = useState([])
  useEffect(() => {
    fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${empId}`)
      .then(response => response.json())
      .then(data => setPet(data))
      .catch(err => console.log(err))

  }, [])
  //console.log({ pet });
  return (

    <aside className="pets-list">
      { pet.length > 0 ?
        <p> {pet.map(pet => pet.name).join(", ")} </p> :
        <p>No pets listed for this employee.</p>
      }
    </aside>
  );
};

export default PetList;
