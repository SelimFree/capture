import "./Navbar.scss";
//Router Link
import { Link, useLocation } from "react-router-dom";
//Animation
import { motion } from 'framer-motion'
function Navbar() {
    const {pathname} = useLocation();
    console.log(pathname)
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
                        <motion.div className="line" transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === "/" ? "50%" : "0%"}}></motion.div>
                    </li>
                </Link>
                <Link to={"/work"}> 
                    <li>
                        <p>Our Work</p>
                        <motion.div className="line" transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === "/work" ? "50%" : "0%"}}></motion.div>
                    </li>
                </Link>
                <Link to={"/contact"}> 
                    <li>
                        <p>Contact Us</p>
                        <motion.div className="line" transition={{duration: 0.75}} initial={{width: "0%"}} animate={{width: pathname === "/contact" ? "50%" : "0%"}}></motion.div>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
