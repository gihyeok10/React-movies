import React from "react";
import { Container } from "react-bootstrap";

const MovieSearch = () => {
  return (
    <div>
      <div className="search-container">
        <Container className="search-bar">
          <div>
            <div className="search-h1">
              <h1>SEARCH BAR</h1>
            </div>
            <div className="search-box"></div>
          </div>
        </Container>
      </div>

      <Container>여기는 검새한거 보여줄거</Container>
    </div>
  );
};

export default MovieSearch;
