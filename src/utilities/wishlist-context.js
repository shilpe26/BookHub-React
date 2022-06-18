import { createContext, useContext, useReducer } from "react";
import { wishlistFunction } from "./wishlistFunction";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
	const [wishlistState, wishlistDispatch] = useReducer(wishlistFun, {
		msg: "",
		quantity: 0,
		items: [],
	});

	return (
		<WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
			{children}
		</WishlistContext.Provider>
	);
};

const useWishlist = () => useContext(WishlistContext);
export { useWishlist, WishlistProvider };
