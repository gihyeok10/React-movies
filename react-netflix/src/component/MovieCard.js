import React from "react";
import { Badge } from "react-bootstrap";
const MovieCard = ({ item }) => {
  return (
    <div className="card"
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
            <Badge bg="danger">{id}</Badge>
          ))}
        </div>

        <div>
            <span>{item.vote_average}</span>
            <span>{item.vote_adult? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
