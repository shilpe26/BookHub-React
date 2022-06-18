import { createContext, useContext, useReducer } from "react";
import { cartFunction } from "./cartFunction";

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cartState, cartDispatch] = useReducer(cartFunction, {
		quantity: 0,
		items: [],
	});

	return (
		<CartContext.Provider value={{ cartState, cartDispatch }}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
