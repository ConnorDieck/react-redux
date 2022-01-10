import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, text = "wash feet") {
	const textInput = todoList.getByLabelText("New Todo");

	fireEvent.change(textInput, { target: { value: text } });

	const button = todoList.getByText("Submit");
	fireEvent.click(button);
}

it("renders without crashing", function() {
	render(<TodoList />);
});

it("matches snapshot", function() {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it("shows a todo after submitting", function() {
	const todoList = render(<TodoList />);

	// First, expect nothing
	expect(todoList.queryByText("Remove Todo")).not.toBeInTheDocument();

	addTodo(todoList);

	const removeBtn = todoList.getByText("Remove Todo");

	expect(removeBtn).toBeInTheDocument();
	expect(removeBtn.previousSibling).toContainHTML(`<div class="Todo">wash feet</div>`);

	expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
});

it("can remove a todo", function() {
	const todoList = render(<TodoList />);
	addTodo(todoList);

	const removeBtn = todoList.getByText("Remove Todo");

	fireEvent.click(removeBtn);
	expect(removeBtn).not.toBeInTheDocument();
});
