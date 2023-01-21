import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const MovieCard = ({ item }) => {


  const navigate = useNavigate()
  const showDetail = () => {
      
      navigate(`/detail/${item.id}`)
      
  }

  

  
  
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      onClick={showDetail}
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
        height: 200,
        width: 300,
      }}
    >
      <div className="overlay">
        <h4>{item.title}</h4>

        <div>
          {item.genre_ids.map((id) => (
            <Badge bg="danger" key={id}>
              {genreList.find((item) =>item.id == id).name}
            </Badge>
          ))}
        </div>

        <div>
          <span>{item.vote_average}</span>
          <span>{item.vote_adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
