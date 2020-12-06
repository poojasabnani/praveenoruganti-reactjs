import React, { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext";

const Navbar = () => {
  const { Todo } = useContext(TodoContext);
  const date = new Date();
  const formattedDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;

  return (
    <div className="navbar ">
      <div>
        <h1>Praveen Oruganti Todo List App</h1>
        <p className="date">{formattedDate}</p>
      </div>
      <p>{Todo.length} work is remaining. </p>
    </div>
  );
};
export default Navbar;
