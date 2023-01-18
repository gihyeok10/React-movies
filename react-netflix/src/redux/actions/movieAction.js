function getMovies(){
    return async(dispatch) => {
        
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`
        let respones = await fetch(url)
        let data = respones = await respones.json()

        let url2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
        let respones2 = await fetch(url)
        let data2 = respones = await respones.json()

        let url3 = `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1`
        let respones3 = await fetch(url)
        let data3 = respones = await respones.json()
    }
}