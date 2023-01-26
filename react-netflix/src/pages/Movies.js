import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row, Button } from "react-bootstrap";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import api from "../redux/actions/api";
const API_KEY = process.env.REACT_APP_API_KEY;
const Movies =  () => {
  
  const [count,setCount] = useState(1)

 const getApi = async() => {
  const popularMoviesApi = api.get(
    `movie/popular?api_key=${API_KEY}&language=en-US&page=${count}`
  );

  let popularMovies=  await popularMoviesApi;
  console.log(popularMovies.data)
 
 }

 getApi()

 useEffect(()=>{
  getApi();
 },[count])

  return (
    <Container className="movies-container">
      <div>
        <h1>하이요!</h1>
        <Button onClick={()=>{setCount(count+1)}}>CLICK</Button>
      </div>
    </Container>
  );
};

export default Movies;
