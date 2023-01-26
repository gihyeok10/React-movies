import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Navigation from './component/Navigation'
const API_KEY = process.env.REACT_APP_API_KEY;
function  App() {

  return (
    <div className='all'>
      <Navigation>
      </Navigation>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path='/detail/:id' element={<MovieDetail/>}></Route>
        </Routes>
    </div>
  );
}

export default App;

// plan
//      1. 3개의 페이지 필요 홈페이지, movie 페이지, movieDetial 페이지
//       2. 홈페이지에서 배너를 볼 수 있다
//       3. 3가지 섹션의 영화를 볼수 있다 (popualr,top,upcomming)
//       4. 각각 영화의 정보를 알수있다. (각 영화에 마우스를 올려두면, 제목, 장르 , 점수, 인기도, 청불여부를 알 수 있슴.)
//       5. 영화를 슬라이드로 넘기면서 볼 수 있다. 
//       6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다. (포스트, 제목, 줄거리, 점수, 인기도, 보여주고 싶은거)
//       7.  영화 리뷰 볼 수 있다.
//       8. 추천 관련된 영화를 볼 수 있다.
//       9. 검색 기능을 할 수 있다.
//       10. 영화 정렬 가능
//       11. 영화를 필터링 할 수 있다. 
