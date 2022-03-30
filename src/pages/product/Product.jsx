import { React, useState } from "react";
import { Drawer } from "./drawer/Drawer";
import { Card } from "./card/Card";

function Product() {
	const [drawerVisible, setDrawerVisible] = useState(false);

	return (
		<div className="bookhub-container">
			<Drawer drawerVisible={drawerVisible} />
			<Card drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />
		</div>
	);
}

export { Product };
