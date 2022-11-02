import { useState } from "react";
import { FaWindowClose, FaEdit } from 'react-icons/fa'
import TodoForm from "./TodoForm";

function Todo({todoList, removeTodo, updateTodo, updateStatus}) {
	
	// State for updating action
	const [edit, setEdit] = useState({   
		id: null,
		value: ''
	})

	// When submit updated form
	const submitUpdate = value => {
		const newValue = {
			id: edit.id,
			value: value,
			status: edit.status
		}
		updateTodo(edit.id, newValue);
		setEdit({
			id: null,
			value: '',
			status: edit.status
		})
	}

	// Click onto todo
	const handleClick = (e, todo) => {
		if (todo.status === "uncompleted") {
			const newValue = {
				id: todo.id,
				value: todo.value,
				status: 'completed'
			}
			// Mark the work as "completed" or "uncompleted"
			updateStatus(todo.id, newValue)
			e.target.classList.add('completed')
		} else {
			const newValue = {
				id: todo.id,
				value: todo.value,
				status: 'uncompleted'
			}

			// Mark the work as "completed" or "uncompleted"
			updateStatus(todo.id, newValue)
			e.target.classList.remove('completed')

		}
	}
	
	// Update Mode
	if(edit.id) {
		return <TodoForm editValue={edit.value} onSubmit={submitUpdate}/>
	}
	
	// List works
	return (todoList.map((todo, index) => (
		<div key={todo.id} className={todo.status === "completed" ? "todo-box-child completed" : "todo-box-child"} onClick={(e) => handleClick(e, todo)}>
			<h2>{todo.value}</h2>
			<div className="icons">
				<span className="delete" onClick={() => removeTodo(todo.id)}><FaWindowClose /></span>
				<span className="edit" onClick={() => setEdit({id: todo.id, value: todo.value, status: todo.status})}><FaEdit /></span>
			</div>
		</div>
	)));
}

export default Todo;