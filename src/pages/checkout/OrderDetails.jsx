import React, { useState, useEffect } from "react";
import "./checkout.css";
import { useAlert } from "react-alert";
import { v4 as uuid } from "uuid";
import { useCart } from "../cart/cart-context";

function OrderDetails() {
	const [totalPrice, setTotalPrice] = useState(0);
	const alert = useAlert();
	const { cart_state } = useCart();
	const user = JSON.parse(localStorage.getItem("user"));

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
			key: "rzp_test_SP206ka3zuV4SX",
			// amount: (totalPrice - discountedCouponPrice) * 100,
			currency: "INR",
			name: "BoOkHuB",
			description: "Thank you for shopping with us",
			handler: async function (response) {
				const orderId = uuid().toString().split("-")[0];

				const orderData = {
					products: [...cart_state],
					amount: totalPrice,
					paymentId: response.razorpay_payment_id,
					orderId,
					// delivery: currentAddress,
				};

				// const { data, status } = await addOrderService(orderData, token);

				// if (status === 201) {
				// 	setSelectedCoupon({});
				// 	dispatchOrder({ type: "GET_ORDERS", payload: data.order });
				// 	navigate(`/order/${orderId}`);
				// }
			},

			// prefill: {
			// 	name: `${user.firstName} ${user.lastName}`,
			// 	email: user.email,
			// 	contact: "93225088143",
			// },
		};

		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};

	return (
		<div className="order-details">
			<div className="title">Order Summary</div>

			<div className="order-items-wrapper order-items">
				{/* {cart_state.map((cartItem) => (
          <div key={cartItem.id} className="item">
            <div>
              {cartItem.title} (${cartItem.price} x {cartItem.qty})
            </div>

            <div>${cartItem.price * cartItem.qty}</div>
          </div>
        ))} */}
			</div>

			<div className="title">Price Details</div>

			<div className="order-items-wrapper">
				<div className="item">
					<div>Total Price</div>
					<div>$ {totalPrice.toFixed(2)}</div>
				</div>

				<div className="item">
					<div>Total Discount</div>
					<div>
						$
						{/* {cartPrice.discountInPrice +
							(JSON.stringify(selectedCoupon) !== "{}"
								? discountedCouponPrice
								: 0)} */}
					</div>
				</div>

				<div className="item">
					<div>Delivery Charges</div>
					<div>FREE</div>
				</div>

				<div className="item">
					<div>Grand Total</div>
					<div>
						${totalPrice.toFixed(2)}
						{/* $
            {totalPrice -
              (JSON.stringify(selectedCoupon) !== "{}"
                ? discountedCouponPrice
                : 0)} */}
					</div>
				</div>
			</div>

			<div className="title">Deliver To</div>

			<div className="order-items-wrapper addr-item">
				{/* {currentAddress ? (
          <>
            <div className="address-name">{currentAddress.name}</div>
            <div>
              {currentAddress.street}, {currentAddress.city} -{" "}
              {currentAddress.zipcode}
            </div>
            <div>
              {currentAddress.state}, {currentAddress.country}
            </div>
            <div>{currentAddress.mobile}</div>
          </>
        ) : (
          <p>Add an address to proceed.</p>
        )} */}
			</div>

			<button
				className="btn btn-primary place-order"
				// disabled={!selectedAddrId}
				onClick={displayRazorpay}
			>
				Place Order
			</button>
		</div>
	);
}

export { OrderDetails };
