import React, { useState } from 'react';

const Navbar = () => {
	const [navLinkOpen, navLinkToggle] = useState(false);

	const handleNavLinksToggle = () => {
		navLinkToggle(!navLinkOpen)
	}

	const renderClasses = () => {
		let classes = 'navlinks';

		if (navLinkOpen) classes += ' active';

		return classes;
	}

	return(
		<nav>
			<div className="logo">
				<i className="fas fa-water"></i>
				<h4>RH MARINA</h4>
			</div>
			<ul className={renderClasses()}>
				<li><a className="link" href="#">Home</a></li>
				<li><a className="link" href="#">About</a></li>
				<li><a className="link" href="#">Directory</a></li>
				<li><a className="link" href="#">Charters</a></li>
				<li><a className="link" href="#">Contact Us</a></li>
			</ul>
			<div onClick={handleNavLinksToggle} className="hamburger-toggle">
				<i className="fas fa-bars fa-lg"></i>
			</div>
		</nav>
	);
}

export default Navbar;