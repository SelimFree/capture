import "./Navbar.scss";
//Router Link
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
            <Link to={"/"}>
                <h1>
                    <p id="logo">
                        Capture
                    </p>
                </h1>
            </Link>
            <ul>
                <Link to={"/"}> 
                    <li>
                        <p>About Us</p>
                    </li>
                </Link>
                <Link to={"/work"}> 
                    <li>
                        <p>Our Work</p>
                    </li>
                </Link>
                <Link to={"/contact"}> 
                    <li>
                        <p>Contact Us</p>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
