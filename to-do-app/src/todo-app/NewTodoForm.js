import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
	const INITIAL_STATE = {
		text : ""
	};
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = evt => {
		const { name, value } = evt.target;
		setFormData(formData => ({
			...formData,
			[name] : value
		}));
	};

	const handleSubmit = evt => {
		evt.preventDefault();
		addTodo({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="text">New Todo</label>
			<input //
				type="text"
				id="text"
				name="text"
				placeholder="Todo"
				value={formData.text}
				onChange={handleChange}
			/>
			<button>Submit</button>
		</form>
	);
};

export default NewTodoForm;
