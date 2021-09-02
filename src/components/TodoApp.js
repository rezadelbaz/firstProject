import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
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
  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeTodo} onDelete={removeTodo} />
    </div>
  );
};

export default TodoApp;
