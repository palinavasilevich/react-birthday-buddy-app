import React from "react";

const Person = ({ name, age, image }) => {
  return (
    <li className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </li>
  );
};

export default Person;
