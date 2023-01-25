import React, { useEffect } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailAction } from "../redux/actions/detailAction";
import { movieAction } from "../redux/actions/movieAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faStar } from "@fortawesome/free-solid-svg-icons";
const MovieDetail = () => {
  const { id } = useParams();

  const { detailData, loading } = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  console.log("유스셀렉터데이터:", detailData);
  useEffect(() => {
    dispatch(detailAction.getDetailMovies(id));
  }, []);

  return (
    <div className="detail-background">
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
                height: 900,
                width: 600,
                borderRadius: 0,
                borderColor: "black",
              }}
            ></div>
          </Col>
          <Col lg={4}>
            <div className="genres-div">
              {detailData.genres &&
                detailData.genres.map((item, index) => {
                  return (
                    <h5>
                      <Badge className="Badge" bg={"danger"} key={item.index}>
                        {item.name}
                      </Badge>
                    </h5>
                  );
                })}
            </div>
            <div className="title-div">
              <h1>{detailData.title}</h1>
            </div>
            <div className="subtitle-div">
              <h3>{detailData.tagline}</h3>
            </div>

            <div className="vote-div">
              <div>
                <FontAwesomeIcon icon={faStar} style={{ fontSize: 20 }} />
                {detailData.vote_average}
              </div>

              <div className="popularity-div">
                <FontAwesomeIcon icon={faUser} />
                {detailData.popularity}
              </div>

              <div className="adult-div">
                {detailData.vote_adult ? "Over 18" : "Under 18"}
              </div>
            </div>
            <div className="overview-div">
              <h5>{detailData.overview}</h5>
            </div>

            <div className="sub-div">
              <div className="budget-div">
                <Badge bg="danger" className="budget-badge">
                  Budget
                </Badge>
                <h6>${detailData.budget}</h6>
              </div>
              <div className="budget-div">
              <Badge bg="danger" className="budget-badge">
                  Revenue
                </Badge>
              <h6>${detailData.revenue}</h6>
              </div>
              <div className="budget-div">
              <Badge bg="danger" className="budget-badge">
                  Releas-date
                </Badge>
              <h6>{detailData.release_date}</h6>
              </div>
              <div className="budget-div">
              <Badge bg="danger" className="budget-badge">
                  Run-time
                </Badge>
                <h6>{detailData.runtime}</h6>
              </div>
            </div>

            <div className="trailer-div">
              <div><h6>Whatch Trailer</h6></div>
              <div>hart</div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <div>안녕하수꽈</div>
      </Container>
    </div>
  );
};

//영화 포스터 , 영화 이름, 장르, 개요, 평점, 관객, 나이, Budget, Revenue , Release Day,Time , 트레일러, 좋아요, 출연진, 리뷰

export default MovieDetail;
