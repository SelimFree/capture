import "./ContactUs.scss"

//Animation
import { motion } from "framer-motion"
import { titleAnimation } from "../../animation"
function ContactUs() {
  return (
    <div className="ContactUs" style={{background: "#fff"}}>
      <div className="title">
        <div className="hide">
          <motion.h2 variants={titleAnimation}>
            Get in touch.
          </motion.h2>
        </div>
      </div>
        <div className="hide">
          <motion.div className="social" variants={titleAnimation}>
            <div className="circle"></div>
            <h2>Send us messaage</h2>
          </motion.div>
        </div>
        <div className="hide">
          <motion.div className="social" variants={titleAnimation}>
            <div className="circle"></div>
            <h2>Follow us on Twitter</h2>
          </motion.div>
        </div>
        <div className="hide">
          <motion.div className="social" variants={titleAnimation}>
            <div className="circle"></div>
            <h2>Follow us on Instagramm</h2>
          </motion.div>
        </div>
    </div>
  )
}

export default ContactUs