import { useState } from "react";

const NavBar = ({ upCompletedTodos, filterTodos, onChange, Status }) => {
  if (!upCompletedTodos) return <h2>set your todos</h2>;
  return (
    <header>
      <span>{upCompletedTodos}</span> <h2> is not completed</h2>
      <select onChange={onChange} value={Status}>
        <option value="All">All</option>
        <option value="completed">completed</option>
        <option value="unCompleted">unCompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
