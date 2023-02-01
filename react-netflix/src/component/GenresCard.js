import React from "react";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

const GenresCard = ({ item, genreList }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div
      className="card2"
      onClick={showDetail}
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/original///${item.poster_path}` +
          ")",
        height: 450,
        width: 300,
        border: 2,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay2">
        <h3 style={{marginLeft:10,marginBottom:20}}>{item.title}</h3>

        {item.genre_ids && (
          <div>
            {item.genre_ids.map((id) => (
              <Badge bg="danger" key={id} style={{margin:5}}>
                {genreList.find((item) => item.id == id).name}
              </Badge>
            ))}
          </div>
        )}
        <div className="page-info">
        <p>{item.overview.substr(0,150)}...</p>
        </div>   
        <div>
          <span><FontAwesomeIcon icon={faStar} style={{ fontSize: 20, color:"gold",marginLeft:10 }} />   {item.vote_average}</span>
          <span className="adult-div">{item.vote_adult ? "Over 18" : "Under 18 "}</span>
        </div>
      </div>
    </div>
  );
};

export default GenresCard;

// {item.genre_ids&& item.genre_ids.map((id)=> {if(id == 18) return(
//   <p>{item.title}</p>)
//   }) }
//장르아이디에서 장르가 id값이 인걸 찾는다 find => 찾았으면 => 다시 find로 그
