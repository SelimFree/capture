import "./AboutUs.scss"
// Importing Sections
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import FaqSection from "../../components/FaqSection/FaqSection";
//ANimations
import { motion } from "framer-motion";

function AboutUs() {
    return (        
        <div className="AboutUs">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </div>
    )
}

export default AboutUs;