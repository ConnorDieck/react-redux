import React from "react";
import TodoList from "./todo-app/TodoList";
import NewTodoForm from "./todo-app/NewTodoForm";
import "./App.css";
import { useDispatch } from "react-redux";

function App() {
	const dispatch = useDispatch();

	const addTodo = newTodo => {
		dispatch({ type: "ADD", payload: newTodo });
	};

	const deleteTodo = id => {
		dispatch({ type: "DELETE", id });
	};

	return (
		<div className="App">
			<NewTodoForm addTodo={addTodo} />
			<TodoList addTodo={addTodo} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
