import "./OurWork.scss";
//Importing Data
import {MovieState} from "../../data";
import { useState } from "react";
import SmallMovie from "../../components/SmallMovie/SmallMovie";
//ANimations
import { motion } from "framer-motion";

function OurWork() {
    const [data] = useState(MovieState());
    return (
        <div className="OurWork" style={{background: "#fff"}}>
            {data.map((work, i) => (
                <SmallMovie movie={work} key={i}/>
            ))}
        </div>
    );
}

export default OurWork;
