import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
const Home = () => {
  const { popularMovies, topRatedMovies, upcomingMovies,loading } = useSelector(
    (state) => state.movie
  );
  console.log("home", popularMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  //로딩이 true면 로딩스피너를 보여준다
  //로딩이 false면 데이터를 보여준다.
  //true: 데이터 도착 전
  //false: 데이터 도착 후 or 에러

  if(loading){
    console.log("lodaingr값",loading)
    return <div>
       <ClipLoader
        color= "white"
        loading={loading}
        size={150}
      />
    </div>
  };

  if(loading == false){
    console.log("lodaing값:",loading)
  }
  return (
    <div className="home-div">
      <Banner movie={popularMovies.results[7]} />

      <h1 className="movies">popularMovies</h1>
      <MovieSlide movies={popularMovies} />
      <h1 className="movies">top rated movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1 className="movies">upcoming moveie</h1>
      <MovieSlide movies={upcomingMovies} />
    </div>
  );
};
//조건부 랜더링
export default Home;
