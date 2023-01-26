import React from "react";
import { Badge, Col, Container, Row, Button, Modal } from "react-bootstrap";
import YouTube from "react-youtube";

const Youtube = (props) => {
  console.log(props.keys)
  return (
    <Modal
      {...props}

      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-body">
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <YouTube
          //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
          videoId={props.keys}
          //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
          //밑에서 더 설명하겠습니다.
          opts={{
            width: "765",
            height: "300",
            playerVars: {
              autoplay: 0, //자동재생 O
              rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
          //이벤트 리스너
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </Modal.Body>
      <Modal.Footer style={{backgroundColor:"#282828"}}>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Youtube;
