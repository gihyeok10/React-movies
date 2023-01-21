import React, { useEffect } from 'react'
import { Badge } from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { detailAction } from '../redux/actions/detailAction';
import { movieAction } from '../redux/actions/movieAction';
const MovieDetail = () => {
  const {id} = useParams();

  const {detailData} = useSelector(
    (state) => state.detail
  );
  const dispatch = useDispatch();
  
  console.log("유스셀렉터데이터:",detailData)
  useEffect(() => {
    dispatch(detailAction.getDetailMovies(id));
  }, []);

  
    return (
     <div>
      {detailData && <div>
        <h1>{detailData.id}</h1>
        <h1>영화제목{detailData.title}</h1>
        {detailData.genres.map(id => <Badge bg="danger" key={id}>{id.name}</Badge> )}



        <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${detailData.poster_path}` +
          ")",
        height: 200,
        width: 300,
      }}
    ></div>
      </div>}
        
      
     </div>
  )
}

export default MovieDetail