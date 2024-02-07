import React from "react";
import {
	Blog,
	Feature,
	Footer,
	Header,
	Possibility,
	WhatGPT3,
} from "./containers/index";
import { Cta, Brand, Navbar } from "./components/index";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Feature />
			<Possibility />
			<Cta />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
