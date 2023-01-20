import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../component/Banner'
import MovieSlide from '../component/MovieSlide'
const Home = () => {
      const {popularMovies,topRatedMovies,upcomingMovies,} = useSelector(state => state.movie)
      console.log("home",popularMovies)
      const dispatch = useDispatch()
    useEffect(() => {
        dispatch(movieAction.getMovies())
    },[])
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]}/>} 

      <h1>popularMovies</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>top rated movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>upcoming moveie</h1>
      <MovieSlide movies={upcomingMovies}/>
    </div>
  )
}
//조건부 랜더링
export default Home