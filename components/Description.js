import React from "react";
import "../styles/index.scss";

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
  }
  componentDidMount() {
    const myVideo = document.getElementById("desc-video");
    myVideo.addEventListener("ended", () => {
      myVideo.currentTime = 0;
      return this.setState({ playing: false });
    });
  }
  palyVideo() {
    const myVideo = document.getElementById("desc-video");
    if (myVideo.paused) {
      myVideo.play();
      return this.setState({ playing: true });
    }
    myVideo.pause();
    return this.setState({ playing: false });
  }

  render() {
    const { playing } = this.state;
    const { data } = this.props;
    return (
      <section className="description rtl">
        <div className="splitter"></div>
        <div className="desc-about rtl">
          <img src="/static/images/logo-overlay.png" className="desc-image" />
          <span className="desc-title">{data[0].body}</span>
          <br />
          <span className="desc-text">{data[1].body}</span>
        </div>
        <div className="desc-video">
          <video id="desc-video" width="100%" height="300">
            <source src="/static/videos/teaser.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <i
            className={`fas fa-${
              playing ? "pause pr-3" : "play"
            } text-light video-control`}
            style={{ display: playing ? "none" : "block" }}
            onClick={this.palyVideo.bind(this)}
          ></i>
        </div>
      </section>
    );
  }
}
