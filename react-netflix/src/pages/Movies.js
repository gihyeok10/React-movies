import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row, Button } from "react-bootstrap";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import api from "../redux/actions/api";
import Pagination from "react-js-pagination";
import Page from "../component/Page";
import { allAction } from "../redux/actions/allAction";
import { detailAction } from "../redux/actions/detailAction";

const Movies = () => {
  const dispatch = useDispatch();

  const [language, setLanguage] = useState("en-Us");
  const [screen, setScreen] = useState(true);
  const [genre, setGenre] = useState(false);
  const [genreId, setGenreId] = useState(28);

  
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(allAction.getAll(page, language));
    setGenreId(genreId)
  }, [page, language,genreId]);

  const changeLanguage = () => {
    setLanguage("ko");
    dispatch(detailAction.getDetailMovies(language));
  };


  const changeLanguage2 = () => {
    setLanguage("en-Us");
  };

  // const changeGenreId = (value) => {
  //   setScreen(!screen)
  //   setGenre(!genre)
  //   setGenreId(value)
  // }

  const { allmoviesData, genreList } = useSelector((state) => state.all);
  const handlePageChange = (page) => {
    setPage(page);
  };

  const totalPages = 200;


  console.log("데이터", allmoviesData);
  console.log("장르요",genreList)
  return (
    <div>
      <Container>
        <Button onClick={changeLanguage} variant="danger">
          Korean
        </Button>
        <Button onClick={changeLanguage2} variant="danger">
          English
        </Button>
        <Button  onClick={() => {setScreen(true); setGenre(false)}}>ALL</Button>
        <Button onClick={() => {setGenreId(28); setScreen(false); setGenre(true)}}>액션!</Button>
        <Button onClick={() => {setGenreId(35); setScreen(false); setGenre(true)}}>코메디!</Button>
        <Button onClick={() => {setGenreId(18); setScreen(false); setGenre(true)}}>드라마</Button>
        <Button onClick={() => {setGenreId(80); setScreen(false); setGenre(true)}}>크라임</Button>
        <Button onClick={() => {setGenreId(10752); setScreen(false); setGenre(true)}}>전쟁</Button>


      </Container>

      {screen && (
        <Container className="movies-container">
          <Row>
            {allmoviesData.results &&
              allmoviesData.results.map((item) => (
                <Col
                  lg={4}
                  key={item.id}
                  style={{ marginBottom: 30, marginTop: 30 }}
                >
                  <Page item={item} genreList={genreList} />
                </Col>
              ))}
          </Row>

          <Pagination
            activePage={page} // 현재 페이지
            itemsCountPerPage={1} // 한 페이지랑 보여줄 아이템 갯수
            totalItemsCount={totalPages} // 총 아이템 갯수
            pageRangeDisplayed={5} // paginator의 페이지 범위
            prevPageText={"<"} // "이전"을 나타낼 텍스트
            nextPageText={">"} // "다음"을 나타낼 텍스트
            onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
          />
        </Container>
      )}




      {genre && (
        <Container className="movies-container">
          <Row>
            {allmoviesData.results &&
              allmoviesData.results.map((item) => (
               
                  
                    item.genre_ids.map((id) => {
                      if (id == genreId) return  <Col
                  lg={4}
                  key={item.id}
                  style={{ marginBottom: 30, marginTop: 30 }}
                >
                      
                      <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
        height: 200,
        width: 355,
        border: 2
        
      }}
    >
      <div className="overlay">
        <h4>{item.title}</h4>

        {item.genre_ids && (
          <div>
            {item.genre_ids.map((id) => (
              <Badge bg="danger" key={id}>
                {genreList.find((item) => item.id == id).name}
              </Badge>
            ))}
          </div>
        )}

        <div>
          <span>{item.vote_average}</span>
          <span>{item.vote_adult ? "Over 18" : "Under 18      "}</span>
          <span>{genreId}</span>
        </div>
      </div>
    </div>;
    </Col>     })
              ))}
          </Row>

          <Pagination
            activePage={page} // 현재 페이지
            itemsCountPerPage={1} // 한 페이지랑 보여줄 아이템 갯수
            totalItemsCount={totalPages} // 총 아이템 갯수
            pageRangeDisplayed={5} // paginator의 페이지 범위
            prevPageText={"<"} // "이전"을 나타낼 텍스트
            nextPageText={">"} // "다음"을 나타낼 텍스트
            onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
          />
        </Container>
      )}
    </div>
  );
};

export default Movies;

//영화를 누르면 해당 정보를 가지고 디테일 페이지로 이동이 가능하게
//한국영화 또는



// 0
// : 
// {id: 28, name: 'Action'}

// {id: 16, name: 'Animation'}

// {id: 35, name: 'Comedy'}


// {id: 27, name: 'Horror'}

// {id: 9648, name: 'Mystery'}


//정렬 손보기 뭔가 좀 이상하다.. 원래 있는거에서 거르는 느낌..?
//action에 now말고 팝퓰러나 그런거 가져와야 쓸수있다. 