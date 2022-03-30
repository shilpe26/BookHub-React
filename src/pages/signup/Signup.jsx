import React from "react";
import { Link } from "react-router-dom";
function Signup() {
	return (
		<div className="login-form-container signup">
			<form className="login_form-bookhub" action="">
				<h3 className="heading-login">SIGN UP</h3>
				<input
					type="email"
					name=""
					className="box"
					placeholder="Email"
					aria-label="true"
				/>
				<input
					type="password"
					name=""
					className="box"
					placeholder="First name"
					aria-label="true"
				/>
				<input
					type="password"
					name=""
					className="box"
					placeholder="Last name"
					aria-label="true"
				/>
				<input
					type="password"
					name=""
					className="box"
					placeholder="Password"
					aria-label="true"
				/>
				<input
					type="password"
					name=""
					className="box"
					placeholder="Confirm password"
					aria-label="true"
				/>
				<Link to="/">
					<input
						type="submit"
						value="sign up"
						className="btn"
						aria-label="true"
					/>
				</Link>
			</form>
		</div>
	);
}

export { Signup };
