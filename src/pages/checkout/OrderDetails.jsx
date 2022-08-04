import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useCart } from "../cart/cart-context";
import "./checkout.css";

function OrderDetails({ selectedAddress }) {
	const [totalPrice, setTotalPrice] = useState(0);
	const alert = useAlert();
	const { cart_state } = useCart();

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
		if (selectedAddress === undefined) {
			alert.show("Please Add an Address", { type: "info" });
		} else {
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
				key: "rzp_test_wsMiQbHkdOwiFs",
				amount: Math.round(totalPrice * 100 * 79.73),
				currency: "INR",
				name: "BoOkHuB",
				description: "Thank you for shopping with us",
				prefill: {
					name: "Shilpe Saxena",
					email: "shilpe26@gmail.com",
					contact: "9140915569",
				},
			};
			const paymentObject = new window.Razorpay(options);
			paymentObject.open();
		}
	};

	return (
		<div className="order-details">
			<div className="title text-smd">Order Summary</div>

			<div className="order-items-wrapper order-items">
				{cart_state.items.map((item) => (
					<div key={item._id}>
						<div className="card text-left">
							<h2 className="head2">{item.title}</h2>
							<h4 className="item-head3 ml-4 text-md">Qty: {item.qty}</h4>
							<h4 className="ml-4 text-md">Price: $ {item.price}</h4>
						</div>
					</div>
				))}
			</div>

			<div className="title text-smd">Price Details</div>

			<div className="order-items-wrapper">
				<div className="item">
					<div>Total Price</div>
					<div>${totalPrice.toFixed(2)}</div>
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
					<div className="font-bold text-xmd">Grand Total</div>
					<div className="grand-total font-bold text-xmd">
						${totalPrice.toFixed(2)}
					</div>
				</div>
			</div>

			<div className="title text-smd">Deliver To</div>
			{selectedAddress && (
				<div className="order-items-wrapper addr-item">
					<div className="task-item">
						<h3>
							<span className="text-md">{selectedAddress.name}</span>
						</h3>
						<h3>
							<span className="text-md">{selectedAddress.street} </span>
						</h3>
						<h3>
							<span className="text-md">{selectedAddress.city} - </span>
							<span className="text-md">{selectedAddress.zipcode}</span>
						</h3>
						<h3>
							<span className="text-md">{selectedAddress.state} , </span>
							<span className="text-md">{selectedAddress.country}</span>
						</h3>
						<h3>
							<span className="text-md">{selectedAddress.mobile}</span>
						</h3>
					</div>
				</div>
			)}

			<button className="btn btn-primary place-order" onClick={displayRazorpay}>
				Place Order
			</button>
		</div>
	);
}

export { OrderDetails };
