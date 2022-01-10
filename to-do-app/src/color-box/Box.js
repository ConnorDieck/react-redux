import React from "react";

const Box = ({ id, width, height, backgroundColor, handleRemove }) => {
	const boxStyle = {
		backgroundColor,
		height          : `${height}em`,
		width           : `${width}em`
	};
	return (
		<div>
			<div style={boxStyle} />
			<button onClick={() => handleRemove(id)}>Remove Box</button>
		</div>
	);
};

export default Box;
