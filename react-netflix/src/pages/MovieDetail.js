import React, { useEffect } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailAction } from "../redux/actions/detailAction";
import { movieAction } from "../redux/actions/movieAction";
const MovieDetail = () => {
  const { id } = useParams();

  const { detailData } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  console.log("유스셀렉터데이터:", detailData);
  useEffect(() => {
    dispatch(detailAction.getDetailMovies(id));
  }, []);

  return (
    <Container className="detail-container">
      <Row>
        <Col lg={6}>
          <div
            className="card"
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detailData.poster_path}` +
                ")",
              height: 810,
              width: 600,
              borderRadius:0,
              borderColor:"white"
            }}
          ></div>
        </Col>
        <Col lg={4}>
          <h3>영화제목{detailData.title}</h3>
          <h3>영화시간: {detailData.runtime}</h3>
          <h3>테그라인:{detailData.tagline}</h3>
          <Badge bg="danger">{detailData.budget}</Badge>
          <h3>영화 설명:{detailData.overview}</h3>
          <h3>영화평점:{detailData.vote_average}</h3>
          <h3>관객수:{detailData.vote_count}</h3>
          <h3>수익:{detailData.revenue}</h3>
          <h3>개봉일:{detailData.release_date}</h3>
          {/* {detailData.genres.map((id) => <h3 key={id}>{id.name}</h3>)} */}
        </Col>
      </Row>
    </Container>
  );
};


//영화 포스터 , 영화 이름, 장르, 개요, 평점, 관객, 나이, Budget, Revenue , Release Day,Time , 트레일러, 좋아요, 출연진, 리뷰

export default MovieDetail;
