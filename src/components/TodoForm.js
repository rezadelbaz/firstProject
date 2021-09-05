import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("add a todo mashti");
      return;
    }
    props.addTodoHandler(input);
    setInput("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder={props.edit ? "Update todo" : "Add todo"}
        ref={inputRef}
      />
      <button type="submit">{props.edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
