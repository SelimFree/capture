import "./ServicesSection.scss"
//Import icons
import clock from "../../assets/clock.svg"
import diaphragm from "../../assets/diaphragm.svg"
import money from "../../assets/money.svg"
import teamwork from "../../assets/teamwork.svg"
import home2 from "../../assets/home2.png"
import { useScroll } from "../../hooks/useScroll"
//Animation
import {motion} from "framer-motion"
import {fade} from "../../animation"

function ServicesSection() {
    const [element, controls] = useScroll()
    return (
        <motion.div className="ServicesSection about-div" variants={fade} ref={element} animate={controls} initial="hidden">
            <div className="description about-info">
                <h2>High <span>quality</span> sercives</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image about-image">
                <img src={home2}/>
            </div>
        </motion.div>
    )
}
export default ServicesSection;