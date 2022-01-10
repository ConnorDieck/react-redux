import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = {
		width           : "",
		height          : "",
		backgroundColor : ""
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
		addBox({ ...formData });
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="width">Width</label>
			<input
				type="text"
				id="width"
				name="width"
				placeholder="Width"
				value={formData.width}
				onChange={handleChange}
			/>

			<label htmlFor="height">Height</label>
			<input
				type="text"
				id="height"
				name="height"
				placeholder="Height"
				value={formData.height}
				onChange={handleChange}
			/>

			<label htmlFor="backgroundColor">Color</label>
			<input
				type="text"
				id="backgroundColor"
				name="backgroundColor"
				placeholder="Color"
				value={formData.backgroundColor}
				onChange={handleChange}
			/>

			<button>Submit</button>
		</form>
	);
};

export default NewBoxForm;
