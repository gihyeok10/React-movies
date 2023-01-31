import React from "react";
import { useState } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import SearchCard from "../component/SearchCard";
import { useSelector, useDispatch } from "react-redux";
const MovieSearch = () => {
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );

  const { genreList } = useSelector((state) => state.movie);
  const [text, setText] = useState("");
  const [name,setName] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  console.log(popularMovies.results[0].title.includes("W"))
  console.log(popularMovies.results[0].title)
  return (
    <div>
      <div className="search-container">
        <Container className="search-bar">
          <div>
            <div className="search-h1">
              <h1>SEARCH BAR</h1>
            </div>
            <div className="search-box">
              <input type="text" onChange={onChange} value={text}></input>
            </div>

            <Button onClick={()=> {setName(text)}}>클릭!</Button>
          </div>
        </Container>
      </div>

      <Container>
      
   
        {popularMovies.results&& popularMovies.results.map((item) =>{
          if(item.title.toUpperCase().includes(name.toUpperCase())) return <h1>{item.title}</h1>
         }
        )}
      </Container>
    </div>
  );
};

export default MovieSearch;

//영화 제목을 쓰고 클리을 하면 해당하는 영화를 보여준다.
//일단 영화 목록을 useslect로 빼와야 한다.
// 장르도 마찬가지
//프롭스로 영화데이터/ 장르데이터 / e.t.v값을 보내준다.
//받은 프롭스로 랜더링. (해당 영화 클릭시 디테일 페이지로 넘어가게 해준다.)

//오늘은 이것만하면 퍼블리셔만 하면 끝.
