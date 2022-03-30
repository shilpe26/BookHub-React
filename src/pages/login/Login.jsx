import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="login-form-container">
			<form className="login_form-bookhub" action="">
				<h3 className="heading-login">Login</h3>
				<input
					type="email"
					className="box"
					placeholder="Email"
					aria-label="true"
				/>
				<input
					type="password"
					className="box"
					placeholder="Password"
					aria-label="true"
				/>
				<div className="checkbox">
					<input type="checkbox" id="remember-me" aria-label="true" />
					<label className="label-bookhub" htmlFor="remember-me">
						remember me
					</label>
				</div>
				<input type="submit" value="Login" className="btn" aria-label="true" />
				<p className="additional-desc">forget password ? Click here</p>
				<p className="additional-desc">
					don't have an account ?
					<Link to="/signup">
						<button type="button" className="btn-warning">
							Create One
						</button>
					</Link>
				</p>
			</form>
		</div>
	);
}

export { Login };
