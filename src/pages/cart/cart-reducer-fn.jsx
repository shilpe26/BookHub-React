const ACTIONS = {
	ADD_TO_CART: "add-to-cart",
	REMOVE_FROM_CART: "remove-from-cart",
	DECREASE_COUNT: "decrease-count-of-item",
	INCREASE_COUNT: "increase-count-of-item",
};
export const reducer = (cart_state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TO_CART:
			if (
				cart_state.items.filter((item) => item._id === action.payload._id)
					.length !== 0
			) {
				return { ...cart_state, msg: "Product is already in your Cart!" };
			} else {
				return {
					...cart_state,
					msg: "Product added",
					quantity: cart_state.quantity + 1,
					items: [...cart_state.items, action.payload],
				};
			}
		case ACTIONS.REMOVE_FROM_CART:
			return {
				...cart_state,
				quantity: cart_state.quantity - 1,
				items: cart_state.items.filter((item) => item._id !== action.payload),
			};
		case ACTIONS.DECREASE_COUNT:
			return {
				...cart_state,
				items: cart_state.items.map((item) =>
					item._id === action.payload
						? {
								...item,
								productCount: item.productCount > 1 ? item.productCount - 1 : 1,
						  }
						: item
				),
			};
		case ACTIONS.INCREASE_COUNT:
			return {
				...cart_state,
				items: cart_state.items.map((item) =>
					item._id === action.payload
						? { ...item, productCount: item.productCount + 1 }
						: item
				),
			};
		default:
			return cart_state;
	}
};
