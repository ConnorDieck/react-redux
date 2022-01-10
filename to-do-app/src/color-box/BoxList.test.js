import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// Info on firing events: https://testing-library.com/docs/dom-testing-library/api-events/
function addBox(boxList, height = "2", width = "2", color = "purple") {
	const widthInput = boxList.getByLabelText("Width");
	const heightInput = boxList.getByLabelText("Height");
	const colorInput = boxList.getByLabelText("Color");
	fireEvent.change(widthInput, { target: { value: width } });
	fireEvent.change(heightInput, { target: { value: height } });
	fireEvent.change(colorInput, { target: { value: color } });
	const button = boxList.getByText("Submit");
	fireEvent.click(button);
}

it("renders without crashing", function() {
	render(<BoxList />);
});

it("matches snapshot", function() {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it("shows a box after submitting", function() {
	const boxList = render(<BoxList />);

	// First, expect nothing
	expect(boxList.queryByText("Remove Box")).not.toBeInTheDocument();

	addBox(boxList);

	const removeBtn = boxList.getByText("Remove Box");

	expect(removeBtn).toBeInTheDocument();
	expect(removeBtn.previousSibling).toHaveStyle(`
    width: 2em;
    height: 2em;
    background-color: purple;
  `);

	expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
});

it("can remove a box", function() {
	const boxList = render(<BoxList />);
	addBox(boxList);

	const removeBtn = boxList.getByText("Remove Box");

	fireEvent.click(removeBtn);
	expect(removeBtn).not.toBeInTheDocument();
});
