import React from "react";
import "./orderheader.scss";


const Header = () => {
	return (
		<div className="nav-container">
			{/* this is for the company logo */}
			<div className="partition-nav-1">
				
				<span className="brand-text">Central <br/> Pet Care </span>
			</div>
			{/* this is for the link section */}
			<div className="partition-nav-2">
				<span className="nav-links">Home</span>
				<span className="nav-links">About</span>
				<span className="nav-links">Services</span>
				<span className="nav-links">Contact</span>
				<div className="nav-login-btn">Signup</div>
				<div className="nav-login-btn">Signin</div>
			</div>
		</div>
	);
};

export default Header;