import React from "react";
import "./Meme.css";

function Meme({ url, topText, bottomText, deleteMeme, id }) {
	const handleDelete = () => {
		deleteMeme(id);
	};
	return (
		<div className="Meme">
			<h5 className="topText">{topText}</h5>
			<img className="meme-img" src={url} />
			<h5 className="bottomText">{bottomText}</h5>
			<button id="meme_deleteBtn" onClick={handleDelete}>
				DELETE
			</button>
		</div>
	);
}

export default Meme;
