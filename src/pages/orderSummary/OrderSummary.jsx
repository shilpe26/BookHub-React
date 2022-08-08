import { useParams, useNavigate } from "react-router-dom";
import { useOrder } from "./orderContext";
import { useCart } from "../cart/cart-context";
import "./orderSummary.css";

export const OrderSummary = () => {
	const { orderId } = useParams();
	const {
		orderState: { orders },
	} = useOrder();
	const latestOrder = orders.find((order) => order.orderId === orderId);
	const { cart_dispatch } = useCart();
	const navigate = useNavigate();

	return (
		<div className="page-wrapper">
			<section className="main-section order-summary-container">
				{latestOrder ? (
					<>
						<h2 className="order-summary-heading">
							Order Placed Successfully!
						</h2>

						<div className="order-summary-wrapper">
							<div>
								<div className="order" key={latestOrder?.paymentId}>
									<div className="order-items">
										<div className="item-name">Payment ID:</div>
										<div className="pl-2">{latestOrder?.paymentId}</div>
									</div>

									<div className="order-items">
										<div className="item-name">Order ID:</div>
										<div className="pl-2">{latestOrder?.orderId}</div>
									</div>

									<div className="order-items">
										<div className="item-name">Amount Paid:</div>
										<div className="pl-2">
											$ {latestOrder?.amount.toFixed(2)}
										</div>
									</div>

									<div className="order-items">
										<div className="item-name">Address:</div>
										<div>{`${latestOrder?.delivery.name},
                                         ${latestOrder?.delivery.street},
                                          ${latestOrder?.delivery.city} - ${latestOrder.delivery?.zipcode}, 
                                          ${latestOrder?.delivery.state}, ${latestOrder.delivery?.country}`}</div>
									</div>
								</div>
							</div>

							<div>
								<div>
									<div className="item-name text-smd text">
										Products Ordered
									</div>
									<div>
										{latestOrder?.products.items.map((product) => (
											<div className="order-product">
												<img
													src={product.productImage}
													alt={product.title}
													className="resp-img"
												/>

												<div className="ordered-item-detailing">
													<div className="font-bold text-md">
														{product.title}
													</div>
													<div>{product.author}</div>

													<div className="order-items">
														<div className="item-name">Price:</div>
														<div className="placed-price">
															$ {product.price}
														</div>
													</div>

													<div className="order-items">
														<div className="item-name qty-placed">Qty:</div>
														<div className="qty-placed">{product.qty}</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<div className="oops-error text text-md">
						<p>Oops! We lost your order</p>
					</div>
				)}
				<div className="buttons btn-prodt mt-8">
					<button
						onClick={() => {
							navigate("/product");
							cart_dispatch({
								type: "RESET-CART",
							});
						}}
						className="empty-cart-btn"
					>
						CONTINUE SHOPPING
					</button>
				</div>
			</section>
		</div>
	);
};
