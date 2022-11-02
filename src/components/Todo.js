import { useState } from "react";
import { FaWindowClose, FaEdit } from "react-icons/fa";
import TodoForm from "./TodoForm";

function Todo({ todoList, removeTodo, updateTodo, updateStatus, updateMessage }) {
  // State for updating action
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  // When submit updated form
  const submitUpdate = (value) => {
    const newValue = {
      id: edit.id,
      value: value,
      status: edit.status,
    };
    updateTodo(edit.id, newValue);
    setEdit({
      id: null,
      value: "",
      status: edit.status,
    });
		updateMessage('updated');
  };

  // Click onto todo
  const handleStatus = (e, todo) => {
		if (e.target.classList.length === 0) {
			return
		}
    if (todo.status === "uncompleted") {
      const newValue = {
        id: todo.id,
        value: todo.value,
        status: "completed",
      };
      // Mark the work as "completed" or "uncompleted"
      updateStatus(todo.id, newValue);
      e.target.classList.add("completed");
    } else {
      const newValue = {
        id: todo.id,
        value: todo.value,
        status: "uncompleted",
      };

      // Mark the work as "completed" or "uncompleted"
      updateStatus(todo.id, newValue);
      e.target.classList.remove("completed");
    }
  };

  // Update Mode
  if (edit.id) {
    return <TodoForm editValue={edit.value} onSubmit={submitUpdate} />;
  }

	const handleDelete = (todo) => {
		if (window.confirm('Are you sure to delete this work') === true) {
			removeTodo(todo.id)
			updateMessage('deleted');
		} else {
			// Still error
			return;
		}
	}

  // List works
  return (
    <div className="total-list">
      {todoList.map((todo, index) => (
        <div
          key={todo.id}
          className={
            todo.status === "completed"
              ? "todo-box-child completed"
              : "todo-box-child"
          }
          onClick={(e) => handleStatus(e, todo)}
        >
          <h2>{todo.value}</h2>
          <div className="icons">
            <span className="delete" onClick={() => handleDelete(todo)}>
              <FaWindowClose />
            </span>
            <span
              className="edit"
              onClick={() =>
                setEdit({ id: todo.id, value: todo.value, status: todo.status })
              }
            >
              <FaEdit />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
