import React from "react";
import { useWishlist } from "../../wishlist/wishlist-context";
import { useCart } from "../../cart/cart-context";

const ACTIONS = {
	ADD_TO_WISHLIST: "add-to-wishlist",
	REMOVE_FROM_WISHLIST: "remove-from-wishlist",
	ADD_TO_CART: "add-to-cart",
	REMOVE_FROM_CART: "remove-from-cart",
};
function ProductCard({
	_id,
	title,
	author,
	inStock,
	rating,
	productImage,
	isFastDelivery,
	categoryName,
	price,
}) {
	const { wishlist_dispatch } = useWishlist();
	const { cart_dispatch } = useCart();

	function wishListHandler() {
		wishlist_dispatch({
			type: ACTIONS.ADD_TO_WISHLIST,
			payload: {
				_id,
				title,
				author,
				inStock,
				rating,
				productImage,
				isFastDelivery,
				categoryName,
				price,
			},
		});
	}

	function cartHandler() {
		cart_dispatch({
			type: ACTIONS.ADD_TO_CART,
			payload: {
				_id,
				title,
				author,
				inStock,
				rating,
				productImage,
				isFastDelivery,
				categoryName,
				price,
				productCount: 1,
			},
		});
	}

	return (
		<div className="card-vertical flex-items">
			<div className="image-container badge-container">
				<img
					className="img-responsive card-img"
					src={productImage}
					alt="fiction_books"
				/>
				<span className="badge bg-primary">#1Bestseller</span>
			</div>
			<div className="text-container">
				<h3 className="price-tag">$ {price}</h3>
				<h4 className="heading-primary">{title}</h4>
				<p className="sub-heading">by {author}</p>
				<h3 className="price-tag">{rating}⭐</h3>
				<div className="buttons">
					<button onClick={wishListHandler} value="wishlist" type="button">
						<i className="fas fa-heart"></i>Wishlist
					</button>
					<button onClick={cartHandler} value="cart" type="button">
						Add to Cart
					</button>
				</div>
			</div>
			{!inStock && (
				<div className="overlay-text">
					<h1>Out of Stock</h1>
				</div>
			)}
		</div>
	);
}

export { ProductCard };
