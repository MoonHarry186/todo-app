import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useState } from "react";

function TodoList() {

	const [todoList, setTodoList] = useState(() => {
		return JSON.parse(localStorage.getItem('jobs')) ?? []
	})

	const addTodo = (value) => {
		setTodoList(prev => {
			const newTodo = {
				id: Math.floor(Math.random() * 10000000),
				value: value,
				status: 'uncompleted'
			}
			localStorage.setItem('jobs', JSON.stringify([...prev, newTodo]) )
			return [...prev, newTodo]
		})
	}

	const removeTodo = id => {
		setTodoList(prev => {
			const newTodo = prev.filter((todo) => todo.id !== id)
			localStorage.setItem('jobs', JSON.stringify(newTodo) )
			return newTodo;
		})
	}

	const updateTodo = (id, newValue) => {
		setTodoList(prev => {
			const newList = prev.map(item => (item.id === id ? newValue : item));
			localStorage.setItem('jobs', JSON.stringify(newList) )
			return newList
		})
	}

	const updateStatus = (id, newValue) => {
		setTodoList(prev => {
			const newList = prev.map(item => (item.id === id ? newValue : item));
			localStorage.setItem('jobs', JSON.stringify(newList) )
			return newList
		})
	}

	return ( 
		<div className="todo-form">
			<div>
				<h1 className="title">Add your work today</h1>
			</div>
			<TodoForm onSubmit={addTodo}/>
			<Todo todoList={todoList} removeTodo={removeTodo} updateTodo={updateTodo} updateStatus={updateStatus}/>
		</div>
	 );
}

export default TodoList;