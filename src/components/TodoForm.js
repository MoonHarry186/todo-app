import { useState, useRef } from "react";

function TodoForm(props) {

	const [input, setInput] = useState(props.editValue ? props.editValue : '')
	const inputRef = useRef()

	const handleSubmit = e => {
		e.preventDefault()
		if (input !== '') {
			props.onSubmit(input)
			inputRef.current.focus()
			setInput('')
		}
	}

	const handleChange = e => {
		setInput(e.target.value)
	}

	return ( 
	<div className='form'>
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				value={input}
				ref={inputRef}
				onChange={e => handleChange(e)}
				placeholder="Add to do"
			/>
			<button>{props.editValue ? "Update" : "Add to do"}</button>
		</form>
	</div>

	);
}

export default TodoForm;