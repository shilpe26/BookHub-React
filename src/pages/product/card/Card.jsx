import React from "react";
import { useProduct } from "../../filters/Product-context";
import { ProductCard } from "./ProductCard";

function Card({ drawerVisible, setDrawerVisible }) {
	const { filteredProducts } = useProduct();

	return (
		<section className="cards_for-book">
			{filteredProducts.length === 0 ? (
				<h3>Products Loading...</h3>
			) : (
				filteredProducts.map(
					({
						_id,
						title,
						author,
						price,
						productImage,
						inStock,
						rating,
						isFastDelivery,
						categoryName,
					}) => (
						<ProductCard
							key={_id}
							_id={_id}
							title={title}
							author={author}
							price={price}
							productImage={productImage}
							inStock={inStock}
							rating={rating}
							isFastDelivery={isFastDelivery}
							categoryName={categoryName}
						/>
					)
				)
			)}

			<div className="filter_btn-book">
				<button
					onClick={() => setDrawerVisible((visible) => !visible)}
					type="button"
					className="btn_for-bookhub"
				>
					{drawerVisible ? (
						<i className="fas fa-filter"></i>
					) : (
						<i className="fas fa-xmark"></i>
					)}
				</button>
			</div>
		</section>
	);
}

export { Card };
