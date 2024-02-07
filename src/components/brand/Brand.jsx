import React from "react";
import { Google, Slack, Atlassian, Dropbox, Shopify } from "./imports";
import "./brand.css";

const Brand = () => {
	return (
		<div className="gpt__brand section__padding">
			<div>
				<img src={Google} alt="google" />
			</div>
			<div>
				<img src={Slack} alt="Slack" />
			</div>
			<div>
				<img src={Atlassian} alt="Atlassian" />
			</div>
			<div>
				<img src={Dropbox} alt="Dropbox" />
			</div>
			<div>
				<img src={Shopify} alt="Shopify" />
			</div>
		</div>
	);
};

export default Brand;
