import React from 'react'
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SearchCard = ({genreList,item}) => {
    console.log("장르리스트",genreList)
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/detail/${item.id}`);
      };

      console.log("장르",item.genre_ids)
  return (
    <div
      className="card"
      onClick={showDetail}
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
        height: 200,
        width: 355,
        border: 2
        
      }}
    >
      <div className="overlay">
        <h4>{item.title}</h4>

        {item.genre_ids &&  (
          <div>
            {item.genre_ids.map((id) => (
              <Badge bg="danger" key={id}>
                {genreList.genres.find((item)=> item.id == id).name}
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
  );}

export default SearchCard