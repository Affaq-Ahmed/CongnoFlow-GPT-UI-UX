import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => {
	return (
		<>
			<p>
				<a href="#home">Home</a>
			</p>
			<p>
				<a href="#what">What is GPT3?</a>
			</p>
			<p>
				<a href="#possibility">Open AI</a>
			</p>
			<p>
				<a href="#feature">Case Studies</a>
			</p>
			<p>
				<a href="#blog">Library</a>
			</p>
		</>
	);
};

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className="gpt__navbar">
			<div className="gpt__navbar-links">
				<div className="gpt__navbar-links_logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="gpt__navbar-links_container">
					<Menu />
				</div>
			</div>
			<div className="gpt__navbar-sign">
				<p>Sign in</p>
				<button type="button">Sign up</button>
			</div>

			<div className="gpt__navbar-menu">
				{toggleMenu ? (
					<RiCloseLine
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(!toggleMenu)}
					/>
				) : (
					<RiMenu3Line
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(!toggleMenu)}
					/>
				)}
				{toggleMenu && (
					<div className="gpt__navbar-menu_container scale-up-center">
						<div className="gpt__navbar-menu_container-links">
							<Menu />
							<div className="gpt__navbar-menu_container-links-sign">
								<p>Sign in</p>
								<button type="button">Sign up</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
