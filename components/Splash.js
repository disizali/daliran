import React from "react";
import { Container } from "reactstrap";
import "../styles/index.scss";

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="splash-container">
        <img
          src="/static/images/cover-frame.png"
          className="bg-transparent splash-cover-frame"
          width="100%"
        />
        <img
          src="/static/images/cover-sky.png"
          className="position-absolute splash-cover-sky"
          width="100%"
        />
        {/* <Container>
          <div className="slogan">
            <span className="slogan-top">
              BEST&nbsp;&nbsp;EXPERIENCE&nbsp;&nbsp;
            </span>
            <br />
            <span className="slogan-bottom">FLY&nbsp;&nbsp;BETTER</span>
          </div>
        </Container> */}
      </section>
    );
  }
}
