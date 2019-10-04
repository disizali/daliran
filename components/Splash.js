import React from "react";
import { Container } from "reactstrap";
import { Player, ControlBar, BigPlayButton } from "video-react";
import "../styles/index.scss";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.player.play();
  }
  render() {
    return (
      <section className="splash-container">
        <Player
          autoPlay
          loop={true}
          id="player"
          ref={player => {
            this.player = player;
          }}
        >
          <source src="/static/videos/cover.mp4" />
          <BigPlayButton position="center" className="d-none" />
          <ControlBar disableDefaultControls className="d-none" />
        </Player>
        <Container>
          <div className="slogan">
            <span className="slogan-top">
              BEST&nbsp;&nbsp;EXPERIENCE&nbsp;&nbsp;
            </span>
            <br />
            <span className="slogan-bottom">FLY&nbsp;&nbsp;BETTER</span>
          </div>
        </Container>
      </section>
    );
  }
}
