import React from "react";
import "./features.css";
import { Feature } from "../../components";

const features = [
	{
		title: "Improving end distrusts instantly",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		title: "Become the tended active",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		title: "Really boy law county",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		title: "Message or am nothing",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

const Features = () => {
	return (
		<div className="gpt__features section__padding" id="feature">
			<div className="gpt__features-heading">
				<h1 className="gradient__text">
					The Future is Now and You Just Need To Realize It. Step into Future
					Today & Make it Happen.
				</h1>
				<p>Request Early Access to Get Started</p>
			</div>

			<div className="gpt__features-container">
				{features.map((feature, index) => (
					<Feature
						key={index + feature.title}
						title={feature.title}
						text={feature.text}
					/>
				))}
			</div>
		</div>
	);
};

export default Features;
