//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

let counter = 999997;

const increase = () => {
	if (counter == 999999) counter = -1;

	counter++;

	ReactDOM.render(
		<Home
			First={Math.floor(counter / 1) % 10}
			Second={Math.floor(counter / 10) % 10}
			Third={Math.floor(counter / 100) % 10}
			Fourth={Math.floor(counter / 1000) % 10}
			Fifth={Math.floor(counter / 10000) % 10}
			Sixth={Math.floor(counter / 100000) % 10}
		/>,
		document.querySelector("#app")
	);
	console.log(counter);
};

setInterval(increase, 1000);
