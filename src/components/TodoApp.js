import { useEffect, useState } from "react";
import NavBar from "./Navabr";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filterdTodos, setFilterTodos] = useState([]);
  const [selectsedOptions, setSelectsedOptions] = useState("All");

  useEffect(() => {
    filterTodos(selectsedOptions);
  }, [todos, selectsedOptions]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    // if (!product.isCompleted) {
    //   product.isCompleted = true;
    // }
  };

  const removeTodo = (id) => {
    const filter = todos.filter((todo) => todo.id !== id);
    // const updatedTodos = [...todos];
    // updatedTodos = filter;
    setTodos(filter);
  };

  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const selectHandler = (e) => {
    setSelectsedOptions(e.value);
    // filterTodos(e.target.value);
  };

  const filterTodos = (Status) => {
    switch (Status) {
      case "All":
        setFilterTodos(todos);
        break;
      case "completed":
        setFilterTodos(todos.filter((t) => t.isCompleted));
        break;
      case "unCompleted":
        setFilterTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilterTodos();
    }
  };
  return (
    <div className="container">
      <NavBar
        upCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        onChange={selectHandler}
        selectsedOptions={selectsedOptions}
      />
      <TodoForm addTodoHandler={addTodo} />
      <TodoList
        todos={filterdTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdata={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
