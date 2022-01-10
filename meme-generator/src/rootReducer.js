// import bigmouf from "./images/big-mouf.jpeg";
// import openmouf from "./images/cat-open-mouth.jpeg";

const INITIAL_STATE = {
	memes : [
		// { topText: "can i haz", url: openmouf, bottomText: "CHEEZBURGER" },
		// { topText: "hey", url: bigmouf, bottomText: "like my nose?" }
	]
};

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ADD":
			return { ...state, memes: [ ...state.memes, { ...action.payload } ] };

		case "REMOVE":
			return { ...state, memes: state.memes.filter(meme => meme.id !== action.id) };

		default:
			return state;
	}
}

export default rootReducer;
