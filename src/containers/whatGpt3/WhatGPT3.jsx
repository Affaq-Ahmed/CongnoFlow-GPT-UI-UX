import React from "react";
import "./whatgpt3.css";
import Feature from "../../components/feature/Feature";

const WhatGPT3 = () => {
	return (
		<div className="gpt__what section__margin">
			<div className="gpt__what-feature">
				<Feature
					title="What is GPT-3?"
					text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
				/>
			</div>
			<div className="gpt__what-heading">
				<h1 className="gradient__text">
					The possibilities are beyond your imagnation
				</h1>
				<p>Explore The Library</p>
			</div>
			<div className="gpt__what-container">
				<Feature
					title="Chatbots"
					text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Feature
					title="Knowledgebase"
					text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
				<Feature
					title="Education"
					text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				/>
			</div>
		</div>
	);
};

export default WhatGPT3;
