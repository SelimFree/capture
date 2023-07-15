import home1 from "../assets/home1.png"

function AboutSection() {
    return (
        <div className="AboutSection">
            <div className="desctiption">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>
                        your <span>dreams</span>
                    </h2>
                </div>
                <div className="hide">
                    <h2>come true.</h2>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills to help you
                    to achieve it.
                </p>

                <button>Contact us</button>
            </div>
            <div className="image">
                <img src={home1}/>
            </div>
        </div>
    );
}

export default AboutSection;
