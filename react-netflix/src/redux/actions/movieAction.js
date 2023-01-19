import api from "./api"
const API_KEY= process.env.REACT_APP_API_KEY
function getMovies(){
    
    return async(dispatch) => {

        const topRatedApi =  api.get(
            `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)

        const popularMoviesApi =   api.get(
            `movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

        const upcomingApi =  api.get(
            `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)

        // let data = await Promise.all([topRatedApi,popualrMovieApi,upcomingApi])  //api한번에 보여주기 느낌.

        let [topRatedMovies,popularMovies,upcomingMovies] = await Promise.all([topRatedApi,popularMoviesApi,upcomingApi])

        // console.log(topRatedMovies)
        // console.log(popualrMovies)
        // console.log(upcomingMovies)

        dispatch({
            type:"GET_MOVIES_SUCCESS"
            ,payload: {popularMovies:popularMovies.data ,
                topRatedMovies:topRatedMovies.data , 
                upcomingMovies: upcomingMovies.data },
        })
        // let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
        // let respones = await fetch(url)
        // let data = respones = await respones.json()

        // let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
        // let respones2 = await fetch(url)
        // let data2 = respones = await respones.json()

        // let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`
        // let respones3 = await fetch(url)
        // let data3 = respones = await respones.json()
    }
}

export const movieAction = {
    getMovies,
}