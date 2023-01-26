import React, { useEffect, useState } from "react";
import { Badge, Col, Container, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailAction } from "../redux/actions/detailAction";
import { movieAction } from "../redux/actions/movieAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import RecommendCard from "../component/RecommendCard";
import Modal from "../component/Youtube";
const MovieDetail = () => {
  const { id } = useParams();

  const { genreList } = useSelector((state) => state.movie);
  const { detailData, creditsData, reviewsData, recommendData } = useSelector(
    (state) => state.detail
  );
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [reviews, setReviews] = useState(true);
  const [recommend, setRecommend] = useState(false);
  const [change, setChange] = useState(true);
  function reviewClick() {
    setReviews(!reviews);
    setRecommend(false);
    setChange(!change);
  }

  function recommendClick() {
    setRecommend(!recommend);
    setReviews(!reviews);
    setChange(!change);
  }
  console.log("유스셀렉터데이터:", detailData);
  console.log("출연진:", creditsData);
  console.log("리뷰요", reviewsData);
  console.log("추천이요", recommendData);
  console.log("장르요", genreList);
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
              <div>
                <Button variant="danger" onClick={() => setModalShow(true)}>
                Go to the trailer
                </Button>

                <Modal show={modalShow} title={detailData.title} onHide={() => setModalShow(false)} />
              </div>
              <div>hart</div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="second-container">
        <h3>Cast</h3>
        <div className="cast-div">
          {creditsData.cast &&
            creditsData.cast.map((id, index) => {
              if (index <= 6)
                return (
                  <div className="profile-div">
                    <img
                      src={`https://www.themoviedb.org/t/p/w138_and_h175_face${creditsData.cast[index].profile_path}`}
                    ></img>
                    <p>{id.name}</p>
                  </div>
                );
            })}
        </div>
      </Container>
      <Container className="review-button">
        <div
          className="review"
          onClick={reviewClick}
          style={{ backgroundColor: reviews ? "red" : "black" }}
        >
          <p>Reviews</p>
        </div>
        <div
          className="recommend"
          onClick={recommendClick}
          style={{ backgroundColor: recommend ? "red" : "black" }}
        >
          <p>Recommend</p>
        </div>
      </Container>

      {change ? (
        <Container className="review-div">
          {reviewsData.results &&
            reviewsData.results.map((id) => {
              return (
                <div className="review-box">
                  <div className="author">{id.author}</div>
                  <div>{id.content}</div>
                </div>
              );
            })}
        </Container>
      ) : (
        <Container className="recommend-div">
          {" "}
          <Row>
            {recommendData.results.map((item) => (
              <Col
                lg={4}
                key={item.id}
                style={{ marginBottom: 30, marginTop: 30 }}
              >
                <RecommendCard item={item} genreList={genreList} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

//영화 포스터 , 영화 이름, 장르, 개요, 평점, 관객, 나이, Budget, Revenue , Release Day,Time , 트레일러, 좋아요, 출연진, 리뷰

export default MovieDetail;

//리뷰와 추천영화 뜨게하게 ==> 서로 조건부 랜더링 reviews를 클리하면 리뷰 , 추천영화 클릭하면 추천 영화
