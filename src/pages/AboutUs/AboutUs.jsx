import "./AboutUs.scss"
// Importing Sections
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import ScrollTop from "../../components/ScrollTop/ScrollTop";
//ANimations
import { motion } from "framer-motion";

function AboutUs() {
    return (        
        <div className="AboutUs">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
            <ScrollTop />
        </div>
    )
}

export default AboutUs;