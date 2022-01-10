import React from "react";
import MemeList from "./MemeList";
import NewMemeForm from "./NewMemeForm";
import { useSelector, useDispatch } from "react-redux";

function App() {
	const memes = useSelector(store => store.memes);
	const dispatch = useDispatch();

	const addMeme = newMeme => {
		dispatch({ type: "ADD", payload: newMeme });
	};

	const deleteMeme = id => {
		dispatch({ type: "REMOVE", id });
	};

	return (
		<div className="App">
			<NewMemeForm addMeme={addMeme} />
			<MemeList memes={memes} deleteMeme={deleteMeme} />
		</div>
	);
}

export default App;
