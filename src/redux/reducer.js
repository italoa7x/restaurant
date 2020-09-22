const { ADD_CART } = require('./actions');

const initialState = {
	cart : []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CART:
			return {
				...state,
				cart : [ ...state.cart, action.id ]
			};
		default:
			return state;
	}
};

export default reducer;
