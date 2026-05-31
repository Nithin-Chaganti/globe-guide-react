import { NavLink } from "react-router-dom";
const Header = () => {
    return (
       <header>
            <div className="container navbar-grid grid">
                <div className="logo">
                    <NavLink to="/">
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
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/country" className={({ isActive }) => (isActive ? "active" : "")}>Country</NavLink>
                        </li>
                    </ul>

                    <div className="ham-menu">
                        <span>☰</span>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header