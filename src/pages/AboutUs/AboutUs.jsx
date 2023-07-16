import "./AboutUs.scss"
// Importing Sections
import AboutSection from "../../components/AboutSection/AboutSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import FaqSection from "../../components/FaqSection/FaqSection";

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