const INITIAL_STATE = {
	todos : []
};

function rootReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ADD":
			return { ...state, todos: [ ...state.todos, { ...action.payload } ] };

		case "DELETE":
			return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };

		default:
			return state;
	}
}

export default rootReducer;
