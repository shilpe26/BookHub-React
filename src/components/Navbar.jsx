import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icon-logo.png";
import { useCart } from "../pages/cart/cart-context";
import { useWishlist } from "../pages/wishlist/wishlist-context";

function Navbar() {
	const { wishlist_state } = useWishlist();
	const { cart_state } = useCart();
	return (
		<div>
			<header className="header">
				<div className="header-bookhub">
					<Link to="/" className="logo">
						<img src={Logo} alt="icon-logo" />
						BoOkHuB
					</Link>
					<form action="" className="search-form">
						<input
							type="search"
							placeholder="Find your next favorite book"
							className="input-bookhub"
							id="search-box"
						/>
						<label
							htmlFor="search-box"
							className="fas fa-search search-icon"
						></label>
					</form>
					<div className="icons">
						<div id="search-btn" className="fas fa-search header-icons"></div>
						<Link to="/wishlist" className="fas fa-heart header-icons">
							<div className="badge-icon">{wishlist_state.quantity}</div>
						</Link>
						<Link to="/cart" className="fas fa-shopping-cart header-icons">
							<div className="badge-icon">{cart_state.quantity}</div>
						</Link>
						<Link to="/login" id="login-btn" className="login-btn-bookhub">
							Login
						</Link>
						<Link to="/signup" id="signUp-btn" className="signUp-btn-bookhub">
							Signup
						</Link>
					</div>
				</div>
			</header>
		</div>
	);
}

export { Navbar };
