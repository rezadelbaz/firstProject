import { useState } from "react";

const NavBar = ({ upCompletedTodos, filterTodos }) => {
  const [Status, setStatus] = useState("All");
  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };
  if (!upCompletedTodos) return <h2>set your todos</h2>;
  return (
    <header>
      <span>{upCompletedTodos}</span> <h2> is not completed</h2>
      <select onChange={changeHandler} value={Status}>
        <option value="All">All</option>
        <option value="completed">completed</option>
        <option value="unCompleted">unCompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
