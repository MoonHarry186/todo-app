import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useState } from "react";
import Message from "./Message";

function TodoList() {

	const [todoList, setTodoList] = useState(() => {
		return JSON.parse(localStorage.getItem('jobs')) ?? []
	})

	const [message, setMessage] = useState('')

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

	const updateMessage = messageType => {
		setMessage(messageType)
		
		// message disapears after 3s
		// setTimeout(() => {setMessage('')}, 3000)
	}

	return ( 
	<>
			<div className="todo-form">
				<div>
					<h1 className="title">Add your work today</h1>
				</div>
				<TodoForm onSubmit={addTodo} updateMessage={updateMessage}/>
				<Todo todoList={todoList} removeTodo={removeTodo} updateTodo={updateTodo} updateStatus={updateStatus} updateMessage={updateMessage}/>
			</div>
			{message && <Message messageType={message}/>}
	</>

	 );
}

export default TodoList;