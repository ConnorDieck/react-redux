import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = ({ deleteTodo }) => {
	const todos = useSelector(store => store.todos);

	return (
		<div>
			{todos.map(({ id, text }) => (
				<Todo //
					id={id}
					text={text}
					key={id}
					handleRemove={deleteTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;
