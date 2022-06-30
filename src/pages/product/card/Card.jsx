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
				filteredProducts.map((product) => (
					<ProductCard product={product} key={product._id} />
				))
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
