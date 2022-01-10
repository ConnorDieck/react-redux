import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
	const INITIAL_STATE = [
		// { id: uuid(), width: 10, height: 10, backgroundColor: "red" },
		// { id: uuid(), width: 20, height: 20, backgroundColor: "blue" }
	];

	const [ todos, setTodos ] = useState(INITIAL_STATE);

	const addTodo = newTodo => {
		setTodos(todos => [ ...todos, { ...newTodo, id: uuid() } ]);
	};
	const remove = todoId => {
		setTodos(todos.filter(todo => todo.id !== todoId));
	};

	return (
		<div>
			<NewTodoForm addTodo={addTodo} />
			<div>
				{todos.map(({ id, text }) => (
					<Todo //
						id={id}
						text={text}
						key={id}
						handleRemove={remove}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;
