import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row, Button } from "react-bootstrap";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import api from "../redux/actions/api";
import Pagination from "react-js-pagination";
import Page from "../component/Page";
import { allAction } from "../redux/actions/allAction";
const API_KEY = process.env.REACT_APP_API_KEY;
const Movies = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(allAction.getAll(page));
  }, [page]);

  const { allmoviesData, genreList } = useSelector((state) => state.all);
  const handlePageChange = (page) => {
    setPage(page);
  };

  const totalPages = 200;

  console.log("데이타~~", allmoviesData);
  console.log("장르오", genreList);

  return (
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
  );
};

export default Movies;
