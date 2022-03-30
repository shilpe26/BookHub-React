const ACTIONS = {
	ADD_TO_WISHLIST: "add-to-wishlist",
	REMOVE_FROM_WISHLIST: "remove-from-wishlist",
};
export const reducer = (wishlist_state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TO_WISHLIST:
			if (
				wishlist_state.items.filter((item) => item._id === action.payload._id)
					.length !== 0
			) {
				return {
					...wishlist_state,
					msg: "Product is already in your wishlist!",
				};
			} else {
				return {
					...wishlist_state,
					msg: "Product added",
					quantity: wishlist_state.quantity + 1,
					items: [...wishlist_state.items, action.payload],
				};
			}
		case ACTIONS.REMOVE_FROM_WISHLIST:
			return {
				...wishlist_state,
				quantity: wishlist_state.quantity - 1,
				items: wishlist_state.items.filter(
					(item) => item._id !== action.payload
				),
			};
		default:
			return wishlist_state;
	}
};
