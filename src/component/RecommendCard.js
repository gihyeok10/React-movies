import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

const RecommendCard = ({ item, genreList }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/original///${item.poster_path}` +
          ")",
        height: 200,
        width: 355,
        border: 2,
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat" 
        
      }}
    >
      <div className="overlay">
        <h4>{item.title}</h4>

        {item.genre_ids && (
          <div>
            {item.genre_ids.map((id) => (
              <Badge bg="danger" key={id}>
                {genreList.find((item) => item.id == id).name}
              </Badge>
            ))}
          </div>
        )}

        <div>
          <span>{item.vote_average}</span>
          <span>{item.vote_adult ? "Over 18" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
