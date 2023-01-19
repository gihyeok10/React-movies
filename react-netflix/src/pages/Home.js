import React,{useEffect} from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../component/Banner'
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
      
    </div>
  )
}
//조건부 랜더링
export default Home