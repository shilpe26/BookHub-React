import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useCart } from "../cart/cart-context";
import { useTask } from "../../Context/address-context";
import "./checkout.css";

function OrderDetails() {
	const [totalPrice, setTotalPrice] = useState(0);
	const alert = useAlert();
	const { cart_state } = useCart();
	const { addressState } = useTask();
	const { tasks } = addressState;

	useEffect(() => {
		if (cart_state.items.length !== 0) {
			setTotalPrice(
				cart_state.items.reduce((prev, curr) => prev + curr.price * curr.qty, 0)
			);
		} else {
			setTotalPrice(0);
		}
	}, [cart_state]);

	const loadScript = async (url) => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = url;

			script.onload = () => {
				resolve(true);
			};

			script.onerror = () => {
				resolve(false);
			};
			document.body.appendChild(script);
		});
	};

	const displayRazorpay = async () => {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			alert.show("Razorpay SDK failed to load, check your connection", {
				type: "error",
			});
			return;
		}

		const options = {
			key: "rzp_test_NBdKHtPHfFDUm5",
			amount: totalPrice * 100,
			currency: "USD",
			name: "BoOkHuB",
			description: "Thank you for shopping with us",
		};
		console.log(totalPrice);

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<div className="order-details">
			<div className="title">Order Summary</div>

			<div className="order-items-wrapper order-items">
				{cart_state.items.map((item) => (
					<div key={item._id}>
						<div className="card text-left">
							<li className="text-md">
								<h2 className="head2">{item.title}</h2>
							</li>
							<h3 className="head3">by {item.author}</h3>
							<h4 className="head3 text-base">Quantity-{item.qty}</h4>
						</div>
					</div>
				))}
			</div>

			<div className="title">Price Details</div>

			<div className="order-items-wrapper">
				<div className="item">
					<div>Total Price</div>
					<div>$ {totalPrice.toFixed(2)}</div>
				</div>

				<div className="item">
					<div>Total Discount</div>
					<div>$0</div>
				</div>

				<div className="item">
					<div>Delivery Charges</div>
					<div>FREE</div>
				</div>

				<div className="item">
					<div>Grand Total</div>
					<div>${totalPrice.toFixed(2)}</div>
				</div>
			</div>

			<div className="title">Deliver To</div>

			<div className="order-items-wrapper addr-item">
				{tasks.map((task) => (
					<div key={task.id} className="task-item">
						<h3>
							<span className="text-md">{task.name}</span>
						</h3>
						<h3>
							<span className="text-md">{task.street} </span>
						</h3>
						<h3>
							<span className="text-md">{task.city} - </span>
							<span className="text-md">{task.zipcode}</span>
						</h3>
						<h3>
							<span className="text-md">{task.state} , </span>
							<span className="text-md">{task.country}</span>
						</h3>
						<h3>
							<span className="text-md">{task.mobile}</span>
						</h3>
					</div>
				))}
			</div>

			<button className="btn btn-primary place-order" onClick={displayRazorpay}>
				Place Order
			</button>
		</div>
	);
}

export { OrderDetails };
