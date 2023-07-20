import Toggle from "../Toggle/Toggle";
import "./FaqSection.scss";

//Animation
import { motion, LayoutGroup } from "framer-motion";
import {fade} from "../../animation"
import { useScroll } from "../../hooks/useScroll";

function FaqSection() {
    const [element, controls] = useScroll()
    return (
        <motion.div className="FaqSection about-div" variants={fade} ref={element} animate={controls} initial="hidden">
            <h2>
                Any question? <span>FAQ</span>
            </h2>
            <LayoutGroup>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Esse nostrum earum voluptatum ullam ex nisi!
                        </p>
                    </div>
                </Toggle>
            </LayoutGroup>

            <LayoutGroup>
                <Toggle title="What products do you offer">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Esse nostrum earum voluptatum ullam ex nisi!
                        </p>
                    </div>
                </Toggle>
            </LayoutGroup>

            <LayoutGroup>
                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Esse nostrum earum voluptatum ullam ex nisi!
                        </p>
                    </div>
                </Toggle>
            </LayoutGroup>

            <LayoutGroup>
                <Toggle title="Different payment methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Esse nostrum earum voluptatum ullam ex nisi!
                        </p>
                    </div>
                </Toggle>
            </LayoutGroup>
        </motion.div>
    );
}
export default FaqSection;
