import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
	const INITIAL_STATE = [
		// { id: uuid(), width: 10, height: 10, backgroundColor: "red" },
		// { id: uuid(), width: 20, height: 20, backgroundColor: "blue" }
	];

	const [ boxes, setBoxes ] = useState(INITIAL_STATE);
	const addBox = newBox => {
		setBoxes(boxes => [ ...boxes, { ...newBox, id: uuid() } ]);
	};
	const remove = boxId => {
		setBoxes(boxes.filter(box => box.id !== boxId));
	};

	return (
		<div>
			<NewBoxForm addBox={addBox} />
			<div>
				{boxes.map(({ id, width, height, backgroundColor }) => (
					<Box //
						id={id}
						width={width}
						height={height}
						backgroundColor={backgroundColor}
						key={id}
						handleRemove={remove}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;
