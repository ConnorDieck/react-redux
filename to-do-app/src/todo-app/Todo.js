import React from "react";

const Todo = ({ id, text, handleRemove }) => {
	return (
		<div>
			<div className="Todo">{text}</div>
			<button onClick={() => handleRemove(id)}>Remove Todo</button>
		</div>
	);
};

export default Todo;
