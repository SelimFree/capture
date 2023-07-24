import "./SingleWork.scss";

import { useParams } from "react-router-dom";
import { MovieState } from "../../data";
import { useEffect, useState } from "react";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

function SingleWork() {
    const workId = useParams().id;
    const [movies] = useState(MovieState());
    const [movie, setMovie] = useState(null);

    //UseEffect
    useEffect(() => {
        const currentMovie = movies.filter((work) => work.url == workId)[0];
        setMovie(currentMovie);
    }, [workId, movies]);

    return (
        <>
            {movie && (
                <div className="SingleWork">
                    <div className="headline">
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} />
                    </div>
                    <div className="awards">
                      {movie.awards.map((award, i) => (
                        <Award award={award} key={i}/>
                      ))}
                    </div>
                    <div className="imageDisplay">
                      <img src={movie.secondaryImg} />
                    </div>
                    <ScrollTop />
                </div>
            )}
        </>
    );
}


const Award = ({award}) => {
  return(
    <div className="award">
      <h3>{award.title}</h3>
      <div className="line"></div>
      <p>{award.description}</p>
    </div>
  )
}

export default SingleWork;
