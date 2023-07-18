import "./SmallMovie.scss"; 
//Importing Routing
import { Link } from "react-router-dom";

function SmallMovie({movie}) {
    return (
        <div className="SmallMovie">
            <h2>{movie.title}</h2>
            <div className="line"></div>
            <Link to={movie.url}>
                <img src={movie.mainImg} />
            </Link>
        </div>
    );
}

export default SmallMovie;
