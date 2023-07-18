import "./AboutSection.scss";
//Importing images
import home1 from "../../assets/home1.png"
//Framer motion
import { motion } from "framer-motion";

function AboutSection() {

    return (
        <div className="AboutSection about-div">
            <div className="description about-info">
                <motion.div className="title">
                    <div className="hide">
                        <motion.h2>We work to make</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2>
                            your <span>dreams</span>
                        </motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h2>come true.</motion.h2>
                    </div>
                </motion.div>
                <p>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills to help you
                    to achieve it.
                </p>

                <button>Contact us</button>
            </div>
            <div className="image about-image">
                <img src={home1}/>
            </div>
        </div>
    );
}

export default AboutSection;
