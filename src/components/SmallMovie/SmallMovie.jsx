import "./SmallMovie.scss"; 
//Importing Routing
import { Link } from "react-router-dom";
//Animation
import { motion } from "framer-motion";
import { fade, photoAnimation, lineAnimation } from "../../animation"

function SmallMovie({movie}) {
    return (
        <div className="SmallMovie">
            <motion.h2 variants={fade}>{movie.title}</motion.h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to={movie.url}>
                <div className="hide">
                    <motion.img variants={photoAnimation} src={movie.mainImg} />
                </div>
            </Link>
        </div>
    );
}

export default SmallMovie;
