import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

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
        width: 355,
        border:1
        
      }}
    >
      <div className="overlay">
        <h4 style={{margin:5}}>{item.title}</h4>

        <div style={{marginBottom:10}}>
          {item.genre_ids.map((id) => (
            <Badge bg="danger" key={id} style={{margin:5}}>
              {genreList.find((item) =>item.id == id).name}
            </Badge>
          ))}
        </div>

        <div className="vote-adult-box">
          <span className=""><FontAwesomeIcon icon={faStar} style={{ fontSize: 20, color:"gold",marginLeft:10 }} />{item.vote_average}</span>
          <span className="adult-div">{item.vote_adult ? "Over 18" : "Under 18"}</span>
        </div>
      </div>
    </div>
    
  );
};


export default MovieCard;


// 메인창 카드 안에 디자인 ==> 장르 간격 띄기 , 평점 별모양, under18빨간색 눕기.