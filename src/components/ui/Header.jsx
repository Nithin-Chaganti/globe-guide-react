import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
       <header>
            <div className="container navbar-grid grid">
                <div className="logo">
                    <NavLink to="/" onClick={closeMenu}>
                        <h1>Globe Guide</h1>
                    </NavLink>
                </div>

                <nav>
                    <ul className="menu-web">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/country" className={({ isActive }) => (isActive ? "active" : "")}>Country</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="ham-menu"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span>☰</span>
                    </button>

                    {isMenuOpen ? (
                        <div className="menu-mobile">
                            <ul>
                                <li>
                                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/country" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Country</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </nav>
            </div>
        </header>
    )
}
export default Header