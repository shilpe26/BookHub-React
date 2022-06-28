import React from "react";
import { useCart } from "../cart/cart-context";
import { useWishlist } from "../wishlist/wishlist-context";

const ACTIONS = {
	ADD_TO_WISHLIST: "add-to-wishlist",
	REMOVE_FROM_CART: "remove-from-cart",
	DECREASE_COUNT: "decrease-count-of-item",
	INCREASE_COUNT: "increase-count-of-item",
};
function CartProducts() {
	const { cart_state, cart_dispatch } = useCart();
	const { wishlist_dispatch } = useWishlist();

	return (
		<div>
			{cart_state.items.map((item) => (
				<div key={item._id}>
					<div className="center3 cart-1">
						<div className="container cart-box">
							<div className="img_container">
								<img
									className="img1 imag-cart"
									src={item.productImage}
									alt="place-img"
								/>
								<div className="card">
									<h2 className="head2">{item.title}</h2>
									<h3 className="head3">by {item.author}</h3>
									<h3 className="price-tag">$ {item.price}</h3>
									<h3 className="publish-review">{item.rating} ⭐</h3>
									<div className="cart-quntity">
										<button
											className="item-quantity"
											onClick={() =>
												cart_dispatch({
													type: ACTIONS.DECREASE_COUNT,
													payload: item._id,
												})
											}
										>
											-
										</button>
										<p>{item.productCount}</p>
										<button
											className="item-quantity"
											onClick={() =>
												cart_dispatch({
													type: ACTIONS.INCREASE_COUNT,
													payload: item._id,
												})
											}
										>
											+
										</button>
									</div>
									<div className="buttons">
										<button
											onClick={() =>
												cart_dispatch({
													type: ACTIONS.REMOVE_FROM_CART,
													payload: item._id,
												})
											}
											type="button"
										>
											REMOVE
										</button>
										<button
											onClick={() => {
												wishlist_dispatch({
													type: ACTIONS.ADD_TO_WISHLIST,
													payload: {
														_id: item._id,
														title: item.title,
														author: item.author,
														inStock: item.inStock,
														rating: item.rating,
														productImage: item.productImage,
														isFastDelivery: item.isFastDelivery,
														categoryName: item.categoryName,
														price: item.price,
													},
												});
												cart_dispatch({
													type: ACTIONS.REMOVE_FROM_CART,
													payload: item._id,
												});
											}}
											type="button"
										>
											<i className="fas fa-heart"></i>Wishlist
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export { CartProducts };
