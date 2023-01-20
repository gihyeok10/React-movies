import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import { useParams } from 'react-router-dom'
const MovieDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log("Id는용",id)

  const getProductDetail = () => {
    // let url = `https://my-json-server.typicode.com/gihyeok10/React/products/${id}` 배포주소
    dispatch(movieAction.getMovies(id))
  }

  return (
    
    <div>요롱롱</div>
  )
}

export default MovieDetail