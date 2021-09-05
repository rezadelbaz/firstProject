const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <div className={todo.isCompleted ? "completed" : ""} onClick={onComplete}>
        {todo.text}
      </div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
