import "./OurWork.scss";
//Importing Images
import athlete from "../../assets/athlete-small.png";
import theracer from "../../assets/theracer-small.png";
import goodtimes from "../../assets/goodtimes-small.png";
//Router Link
import { Link } from "react-router-dom";

function OurWork() {
    return (
        <div className="OurWork">
            <div className="work">
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} />
                </Link>
            </div>
            <div className="work">
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} />
                </Link>
            </div>
            <div className="work">
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes} />
                </Link>
            </div>
        </div>
    );
}

export default OurWork;
