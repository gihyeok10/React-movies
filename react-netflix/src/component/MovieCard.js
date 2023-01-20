import React from "react";

const MovieCard = ({item}) => {
  return (
    <div
      
      style={{
        backgroundImage:
          "url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")",
          height:200,width:300
      }}
    ></div>
  );
};

export default MovieCard;
