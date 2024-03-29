import { useCart } from "./cart-context";
import { useAlert } from "react-alert";
import axios from "axios";

function useCartServerCalls() {
	const token = localStorage.getItem("ecommToken");
	const { cart_state, cart_dispatch } = useCart();
	const alert = useAlert();

	const getCart = async () => {
		if (token) {
			try {
				const response = await axios.get("/api/user/cart", {
					headers: { authorization: token },
				});
				if (response.status === 200 && response.data.cart.length !== 0) {
					cart_dispatch({
						type: "ADD-TO-CART",
						payload: response.data.cart,
					});
				}
			} catch (error) {
				alert.show("Internal Server Error", { type: "error" });
			}
		}
	};
	const addToCart = async (product, setActivateBtn) => {
		setActivateBtn(true);
		try {
			if (cart_state.items.find((item) => item._id === product._id)) {
				alert.show("Already In Cart", { type: "info" });
			} else {
				const response = await axios.post(
					"/api/user/cart",
					{ product },
					{
						headers: { authorization: token },
					}
				);
				cart_dispatch({
					type: "ADD-TO-CART",
					payload: response.data.cart,
				});
				alert.show("Added To Cart", { type: "success" });
			}
		} catch (err) {
			alert.show("Server Error: Cannot be Added!", { type: "error" });
		} finally {
			setActivateBtn(false);
		}
	};

	const deleteFromCart = async (productId) => {
		try {
			const response = await axios.delete(`/api/user/cart/${productId}`, {
				headers: { authorization: token },
			});
			cart_dispatch({
				type: "REMOVE-FROM-CART",
				payload: response.data.cart,
			});
			alert.show("Removed from Cart", { type: "success" });
		} catch (err) {
			alert.show("Server Error: Cannot be removed!", { type: "error" });
		}
	};

	const increaseQuantity = async (productId) => {
		try {
			const response = await axios.post(
				`/api/user/cart/${productId}`,
				{ action: { type: "increment" } },
				{ headers: { authorization: token } }
			);
			cart_dispatch({
				type: "INCREMENT-DECREMENT",
				payload: response.data.cart,
			});
		} catch (err) {
			alert.show("Server Error: Can't increase quantity!", { type: "error" });
		}
	};

	const decreaseQuantity = async (productId, setActivateBtn) => {
		setActivateBtn(true);
		try {
			const response = await axios.post(
				`/api/user/cart/${productId}`,
				{ action: { type: "decrement" } },
				{ headers: { authorization: token } }
			);
			cart_dispatch({
				type: "INCREMENT-DECREMENT",
				payload: response.data.cart,
			});
		} catch (err) {
			alert.show("Server Error: Can't decrease quantity!", { type: "error" });
		} finally {
			setActivateBtn(false);
		}
	};
	return {
		getCart,
		addToCart,
		deleteFromCart,
		increaseQuantity,
		decreaseQuantity,
	};
}

export { useCartServerCalls };
