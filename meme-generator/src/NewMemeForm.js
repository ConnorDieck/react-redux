import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewMemeForm.css";

const INITIAL_STATE = {
	url        : "",
	topText    : "",
	bottomText : ""
};

function NewMemeForm({ addMeme }) {
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
		addMeme({ ...formData, id: uuid() });
		setFormData(INITIAL_STATE);
	};

	return (
		<form className="newMemeForm" onSubmit={handleSubmit}>
			<label htmlFor="url">Image URL:</label>
			<input id="form_url" name="url" onChange={handleChange} value={formData.url} />

			<label htmlFor="topText">Top Text:</label>
			<input id="form_topText" name="topText" onChange={handleChange} value={formData.topText} />

			<label htmlFor="bottomText">Bottom Text:</label>
			<input id="form_bottomText" name="bottomText" onChange={handleChange} value={formData.bottomText} />

			<button>Submit Meme</button>
		</form>
	);
}

export default NewMemeForm;
