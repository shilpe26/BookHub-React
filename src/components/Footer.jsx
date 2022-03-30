import React from "react";

function Footer() {
	return (
		<div>
			<section className="footer-bookhub">
				<div className="share">
					<a
						href="https://twitter.com/ShilpeSaxena"
						target="_blank"
						rel="noreferrer"
						className="fab fa-twitter footer_for-bookhub"
					></a>
					<a
						href="https://www.linkedin.com/in/shilpe-saxena-heartly-winner/"
						target="_blank"
						rel="noreferrer"
						className="fab fa-linkedin footer_for-bookhub"
					></a>
					<a
						href="https://github.com/shilpe26"
						target="_blank"
						rel="noreferrer"
						className="fab fa-github footer_for-bookhub"
					></a>
				</div>
				<div className="credit">
					Made with 💙 by<span> Shilpe Saxena</span>
				</div>
			</section>
		</div>
	);
}

export { Footer };
