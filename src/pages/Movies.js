import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import Page from "../component/Page";
import GenresCard from "../component/GenresCard";
import { allAction } from "../redux/actions/allAction";
import { detailAction } from "../redux/actions/detailAction";

const Movies = () => {
  const dispatch = useDispatch();

  const [language, setLanguage] = useState("en-Us");
  const [screen, setScreen] = useState(true);

 

  const [genreId, setGenreId] = useState(28);
  const [genre, setGenre] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(allAction.getAll(page, language));
    setGenreId(genreId);
  }, [page, language, genreId]);

  const changeLanguage = () => {
    setLanguage("ko");
    dispatch(detailAction.getDetailMovies(language));
  };

  const changeLanguage2 = () => {
    setLanguage("en-Us");
  };

 
  const { allmoviesData, genreList } = useSelector((state) => state.all);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const totalPages = 200;
  console.log("페이지요",page)
  console.log("데이터", allmoviesData);
  console.log("장르요", genreList);
  return (
    <div>
      <Container className="genre-btn">
        <Button onClick={changeLanguage} variant="danger">
          Korean
        </Button>
        <Button onClick={changeLanguage2} variant="danger">
          English
        </Button>
        <Button  variant="outline-danger"
          onClick={() => {
            setScreen(true);
            setGenre(false);
          }}
        >
          ALL
        </Button>
        <Button  variant="outline-danger"
          onClick={() => {
            setGenreId(28);
            setScreen(false);
            setGenre(true);
          }}
        >
          Action
        </Button>
        <Button  variant="outline-danger"
          onClick={() => {
            setGenreId(35);
            setScreen(false);
            setGenre(true);
          }}
        >
          Comedy
        </Button>
        <Button  variant="outline-danger"
          onClick={() => {
            setGenreId(18);
            setScreen(false);
            setGenre(true);
          }}
        >
          Drama
        </Button>
        <Button  variant="outline-danger"
          onClick={() => {
            setGenreId(80);
            setScreen(false);
            setGenre(true);
          }}
        >
          Crime
        </Button>

      
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
              allmoviesData.results.map((item) =>
                item.genre_ids.map((id) => {
                  if (id == genreId)
                    return (
                      <Col
                        lg={4}
                        key={item.id}
                        style={{ marginBottom: 30, marginTop: 30 }}
                      >

                      <GenresCard item={item} genreList={genreList}/>
                      
                      </Col>
                    );
                })
              )}
          </Row>

          <Pagination
            activePage={page} // 현재 페이지
            itemsCountPerPage={2} // 한 페이지랑 보여줄 아이템 갯수
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
