import PropTypes from "prop-types";

import React from "react";

//create your first component
export function Home(props) {
	return (
		<div className="text-center mt-5">
			<h1>Simple Counter</h1>
			<div className="counter">
				<div> {props.Sixth}</div>
				<div>{props.Fifth}</div>
				<div>{props.Fourth}</div>
				<div>{props.Third}</div>
				<div>{props.Second}</div>
				<div>{props.First}</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	First: PropTypes.number,
	Second: PropTypes.number,
	Third: PropTypes.number,
	Fourth: PropTypes.number,
	Fifth: PropTypes.number,
	Sixth: PropTypes.number
};
