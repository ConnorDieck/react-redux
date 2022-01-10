import React from "react";
import Meme from "./Meme";
import { useSelector } from "react-redux";

function MemeList({ deleteMeme }) {
	const memes = useSelector(store => store.memes);
	console.log(memes);
	return (
		<div className="memeList">
			{memes.map(meme => {
				return (
					<Meme
						deleteMeme={deleteMeme}
						url={meme.url}
						topText={meme.topText}
						bottomText={meme.bottomText}
						id={meme.id}
						key={meme.id}
					/>
				);
			})}
		</div>
	);
}

export default MemeList;
