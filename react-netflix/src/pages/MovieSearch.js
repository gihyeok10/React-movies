import React from "react";
import { useState, useEffect } from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import SearchCard from "../component/SearchCard";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import { searchAction } from "../redux/actions/searchAction";
const MovieSearch = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(searchAction.searchMovies(name, page));
    console.log("데이터", searchData);
  }, [name, page]);

  const { searchData,genreList } = useSelector((state) => state.search);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

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

            <Button
              onClick={() => {
                setName(text);
              }}
            >
              클릭!
            </Button>
          </div>
        </Container>
      </div>

      <Container>
        <Row>
          {searchData.results && searchData.results.map((item)=> (
            <Col
                  lg={4}
                  key={item.id}
                  style={{ marginBottom: 30, marginTop: 30 }}
                >
                   <SearchCard item={item} genreList={genreList}/>
                </Col>
           
          ))
          
          }
        </Row>

      </Container>

      <Pagination
        activePage={page} // 현재 페이지
        itemsCountPerPage={2} // 한 페이지랑 보여줄 아이템 갯수
        totalItemsCount={50} // 총 아이템 갯수
        pageRangeDisplayed={5} // paginator의 페이지 범위
        prevPageText={"<"} // "이전"을 나타낼 텍스트
        nextPageText={">"} // "다음"을 나타낼 텍스트
        onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
      />
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

// {popularMovies.results&& popularMovies.results.map((item) =>{
//   if(item.title.toUpperCase().includes(name.toUpperCase())) return <h1>{item.title}</h1>
//  }
// )}
