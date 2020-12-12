import React, { useState } from "react";

export const TrafficLightFunction = () => {
	const [trafficlight, setTrafficlight] = useState(null);

	let redExtraClass = "";
	if (trafficlight == "red") redExtraClass = "selected";
	let yellowExtraClass = "";
	if (trafficlight == "yellow") yellowExtraClass = "selected";
	let greenExtraClass = "";
	if (trafficlight == "green") greenExtraClass = "selected";

	return (
		<div>
			<div className="header">
				<h1>Traffic Light / / REACT</h1>
			</div>
			<div className="wrapper">
				<div id="container">
					<div
						className={"red light " + redExtraClass}
						onClick={() => setTrafficlight("red")}
					/>
					<div
						className={"yellow light " + yellowExtraClass}
						onClick={() => setTrafficlight("yellow")}
					/>
					<div
						className={"green light " + greenExtraClass}
						onClick={() => setTrafficlight("green")}
					/>
				</div>
				<div id="trafficTop" />
			</div>
		</div>
	);
};
