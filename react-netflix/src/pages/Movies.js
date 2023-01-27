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

  const [language,setLanguage] = useState("en-Us")

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(allAction.getAll(page,language));
  }, [page,language]);


  const changeLanguage = () => {
    setLanguage("ko")
    dispatch(detailAction.getDetailMovies(language));
  }

  const changeLanguage2 = () => {
    setLanguage("en-Us")
  }

  const { allmoviesData, genreList } = useSelector((state) => state.all);
  const handlePageChange = (page) => {
    setPage(page);
  };

  const totalPages = 200;


  console.log("데이터",allmoviesData)
  return (
    <div>
    <Container>
      <Button onClick={changeLanguage} variant="danger">Korean</Button>
      <Button onClick={changeLanguage2} variant="danger">English</Button>
      <Button>액션!</Button>
      <Button>코메디!</Button>


    </Container>
    <Container className="movies-container">
      <Row>
            {allmoviesData.results&& allmoviesData.results.map((item) => (
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
    </div>
  );
};

export default Movies;


//영화를 누르면 해당 정보를 가지고 디테일 페이지로 이동이 가능하게
//한국영화 또는 