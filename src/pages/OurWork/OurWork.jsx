import "./OurWork.scss";
//Importing Data
import {MovieState} from "../../data";
import { useState } from "react";
import SmallMovie from "../../components/SmallMovie/SmallMovie";
//ANimations
import { motion } from "framer-motion";
import { slider, sliderContainer } from "../../animation"

function OurWork() {
    const [data] = useState(MovieState());
    return (
        <div className="OurWork" style={{background: "#fff"}}>
            <motion.div variants={sliderContainer}>
                <motion.div variants={slider} className="frame frame1"></motion.div>
                <motion.div variants={slider} className="frame frame2"></motion.div>
                <motion.div variants={slider} className="frame frame3"></motion.div>
                <motion.div variants={slider} className="frame frame4"></motion.div>
            </motion.div>
            {data.map((work, i) => (
                <SmallMovie movie={work} key={i}/>
            ))}
        </div>
    );
}

export default OurWork;
