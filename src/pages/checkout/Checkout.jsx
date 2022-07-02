import React, { useState } from "react";
import "./checkout.css";
import { OrderDetails } from "./OrderDetails";
// import { useAddress } from "../../contexts/addressContext";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
	const {
		addressState: { addresses, selectedAddrId },
		dispatchAddress,
	} = useAddress();

	const [showAddrModal, setShowAddrModal] = useState(false);

	const navigate = useNavigate();
	return (
		<div>
			<section className="main-section checkout-container mt-32">
				<div className="heading-3">Checkout</div>

				<div className="checkout-wrapper">
					<div className="checkout-address">
						<div className="address-title title">Select Address</div>

						<div className="address-list">
							{addresses.length ? (
								addresses.map((address) => (
									<label className="address" key={address._id}>
										<input
											type="radio"
											name="address"
											checked={selectedAddrId === address._id}
											onChange={() =>
												dispatchAddress({
													type: "SET_ADDRESS_ID",
													payload: address._id,
												})
											}
										/>

										<div>
											<div className="address-name">{address.name}</div>
											<div>{address.street},</div>
											<div>
												{address.city} - {address.zipcode}
											</div>
											<div>
												{address.state}, {address.country}
											</div>
											<div>{address.mobile}</div>
										</div>
									</label>
								))
							) : (
								<>
									<p>No address available.</p>
									<p>
										<Link className="btn-link" to={"/profile/addresses"}>
											Add address
										</Link>
									</p>
								</>
							)}
						</div>

						<button
							className="btn outline-primary add-address"
							onClick={() => setShowAddrModal(true)}
						>
							<i className="fa-solid fa-plus"></i>Add address
						</button>
					</div>

					<OrderDetails />
				</div>

				{showAddrModal ? (
					<div className="address-modal">
						<AddressModal setShowAddrModal={setShowAddrModal} />
					</div>
				) : null}
			</section>
		</div>
	);
}

export { Checkout };
