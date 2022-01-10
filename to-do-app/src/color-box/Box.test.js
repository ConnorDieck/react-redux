import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", function() {
	render(<Box />);
});

it("matches snapshot", function() {
	const { asFragment } = render(<Box />);
	expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function() {
	const { asFragment } = render(<Box width={10} height={10} backgroundColor="red" />);
	expect(asFragment()).toMatchSnapshot();
});
