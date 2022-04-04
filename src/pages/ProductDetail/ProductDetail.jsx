import React from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";
import { useProduct } from "../filters/Product-context";
import { useWishlist } from "../wishlist/wishlist-context";
import { useCart } from "../cart/cart-context";

const ACTIONS = {
	ADD_TO_WISHLIST: "add-to-wishlist",
	ADD_TO_CART: "add-to-cart",
};
function ProductDetail() {
	const { productId } = useParams();
	const { filteredProducts } = useProduct();
	const { wishlist_dispatch } = useWishlist();
	const { cart_dispatch } = useCart();

	const getProduct = () => {
		return filteredProducts.find((element) => element._id === productId);
	};
	const {
		_id,
		title,
		author,
		inStock,
		rating,
		productImage,
		isFastDelivery,
		categoryName,
		price,
	} = getProduct();

	return (
		<div>
			<h1 className="productId">ProductsDetails</h1>

			<main className="product-details">
				<div className="center3 cart-1 single-product-desc sp-page-image">
					<div className="container cart-box">
						<div className="img_container">
							<img
								className="img1 imag-cart single-page-pimage"
								src={productImage}
								alt="place-img"
							/>
						</div>
					</div>
				</div>

				<div className="center3 product-description">
					<div className="container3-3">
						<div className="card">
							<div className="card">
								<h2 className="head2">{title}</h2>
								<h3 className="head3">by {author}</h3>
								<h3 className="price-tag">$ {price}</h3>
								<h3 className="price-tag">{rating}⭐</h3>

								<h3 className="publish-review">
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Dolor, autem, amet veritatis deserunt odit officiis qui
										consectetur cupiditate pariatur commodi explicabo culpa aut
										eius repellendus molestiae sed impedit? Iure, libero.
									</p>
								</h3>
								<div className="buttons">
									<button
										onClick={() =>
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
											})
										}
										value="wishlist"
										type="button"
									>
										<i className="fas fa-heart"></i>Wishlist
									</button>
									<button
										onClick={() =>
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
											})
										}
										value="cart"
										type="button"
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export { ProductDetail };
