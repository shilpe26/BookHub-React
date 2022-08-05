import { useParams, Link } from "react-router-dom";
import { useOrder } from "./orderContext";
import "./orderSummary.css";

export const OrderSummary = () => {
	const { orderId } = useParams();
	const {
		orderState: { orders },
	} = useOrder();
	const latestOrder = orders.find((order) => order.orderId === orderId);

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
										<div className="pl-2">$ {latestOrder?.amount}</div>
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
									<div className="item-name text-xmd text">
										Products Ordered
									</div>
									<div>
										{latestOrder?.products.items.map((product) => (
											<Link to="/cart" className="order-product">
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
															${latestOrder.amount}
														</div>
													</div>

													<div className="order-items">
														<div className="item-name qty-placed">Qty:</div>
														<div className="qty-placed">{product.qty}</div>
													</div>
												</div>
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<div className="oops-error text text-md">
						<p>Oops! We lost your order</p>
						<Link to="/product" className="text-primary text-xmd">
							Start shopping!
						</Link>
					</div>
				)}
			</section>
		</div>
	);
};
