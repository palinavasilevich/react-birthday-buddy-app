import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <ul>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </ul>
  );
};

export default List;
