import React, { useState } from "react";
import { useWishlistServerCalls } from "../../wishlist/useWishlistServerCalls";
import { useCartServerCalls } from "../../cart/useCartServerCalls";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

function ProductCard({ product }) {
	const { _id, title, author, inStock, rating, productImage, price } = product;
	const alert = useAlert();
	const navigate = useNavigate();
	const { addToWishlist } = useWishlistServerCalls();
	const { addToCart } = useCartServerCalls();
	const [activateBtn, setActivateBtn] = useState(false);

	function wishlistHandler() {
		const token = localStorage.getItem("ecommToken");
		if (token) {
			addToWishlist({ ...product }, setActivateBtn);
		} else {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
		}
	}

	function cartHandler() {
		const token = localStorage.getItem("ecommToken");
		if (token) {
			addToCart({ ...product }, setActivateBtn);
		} else {
			navigate("/login");
			alert.show("Please Login First!", { type: "info" });
		}
	}
	return (
		<div className="card-vertical flex-items">
			<div className="image-container badge-container">
				<Link to={`/product/${_id}`}>
					<img
						className="img-responsive card-img"
						src={productImage}
						alt="books"
					/>
				</Link>
				<span className="badge bg-primary">#1Bestseller</span>
			</div>
			<div className="text-container">
				<h3 className="price-tag">$ {price}</h3>
				<h4 className="heading-primary">{title}</h4>
				<p className="sub-heading">by {author}</p>
				<h3 className="price-tag">{rating}⭐</h3>
				<div className="buttons">
					<button
						disabled={activateBtn}
						onClick={wishlistHandler}
						type="button"
					>
						<i className="fas fa-heart"></i>Wishlist
					</button>
					<button disabled={activateBtn} onClick={cartHandler} type="button">
						Add to Cart
					</button>
				</div>
			</div>
			{!inStock && (
				<div className="overlay-text flex items-center justify-center text">
					<h1 className="text-xmd font-extrabold">OUT OF STOCK</h1>
				</div>
			)}
		</div>
	);
}

export { ProductCard };
