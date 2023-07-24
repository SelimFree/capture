import "./SmallMovie.scss"; 
//Importing Routing
import { Link } from "react-router-dom";
//Animation
import { motion } from "framer-motion";
import { fade, photoAnimation, lineAnimation } from "../../animation"
import {useScroll} from "../../hooks/useScroll"

function SmallMovie({movie}) {
    const [element, controls] = useScroll()
    return (
        <motion.div className="SmallMovie" ref={element} variants={fade} animate={controls} initial="hide">
            <motion.h2 variants={fade}>{movie.title}</motion.h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to={movie.url}>
                <div className="hide">
                    <motion.img variants={photoAnimation} src={movie.mainImg} />
                </div>
            </Link>
        </motion.div>
    );
}

export default SmallMovie;
