import "./AboutSection.scss";
//Importing images
import home1 from "../../assets/home1.png"
import Wave from "../Wave/Wave";
//Framer motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../../animation"
function AboutSection() {

    return (
        <div className="AboutSection about-div">
            <div className="description about-info">
                <motion.div className="title">
                    <div className="hide">
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnimation}>
                            your <span>dreams</span>
                        </motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2 variants={titleAnimation}>come true.</motion.h2>
                    </div>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills to help you
                    to achieve it.
                </motion.p>

                <motion.button variants={fade}>Contact us</motion.button>
            </div>
            <div className="image about-image">
                <motion.img variants={photoAnimation} src={home1}/>
            </div>
            <Wave />
        </div>
    );
}

export default AboutSection;
