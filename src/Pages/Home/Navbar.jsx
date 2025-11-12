import {useState, useEffect} from "react";
import {Link as RouterLink, NavLink} from "react-router-dom";

function Navbar() {
	const [navActive, setNavActive] = useState(false);

	const toggleNav = () => setNavActive(!navActive);
	const closeMenu = () => setNavActive(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 500) {
				closeMenu();
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (window.innerWidth <= 1200) {
			closeMenu();
		}
	}, []);

	return (
		<nav className={`navbar ${navActive ? "active" : ""}`}>
			<div>
				<RouterLink to="/" className="logo-link">
					<img src="./img/logo.png" alt="oana`s logo" />
				</RouterLink>
			</div>

			<button className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
				<span className="nav__hamburger__line"></span>
				<span className="nav__hamburger__line"></span>
				<span className="nav__hamburger__line"></span>
			</button>

			<div className={`navbar--items ${navActive ? "active" : ""}`}>
				<ul>
					<li>
						<NavLink to="/AboutMe" className={({isActive}) => (isActive ? "navbar--content navbar--active-content" : "navbar--content")} onClick={closeMenu}>
							About Me
						</NavLink>
					</li>

					<li>
						<NavLink to="/MySkills" className={({isActive}) => (isActive ? "navbar--content navbar--active-content" : "navbar--content")} onClick={closeMenu}>
							Skills
						</NavLink>
					</li>

					<li>
						<NavLink to="/MyPortfolio" className={({isActive}) => (isActive ? "navbar--content navbar--active-content" : "navbar--content")} onClick={closeMenu}>
							Portfolio
						</NavLink>
					</li>

					<li>
						<NavLink to="/resume" className={({isActive}) => (isActive ? "navbar--content navbar--active-content" : "navbar--content")} onClick={closeMenu}>
							Resume
						</NavLink>
					</li>
				</ul>
			</div>

			<NavLink to="/Contact" className={({isActive}) => (isActive ? "btn btn-outline-primary active" : "btn btn-outline-primary")} onClick={closeMenu}>
				Contact Me
			</NavLink>
		</nav>
	);
}

export default Navbar;
