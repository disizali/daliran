import React, { Component } from "react";
import { Container } from "reactstrap";
export default class Items extends Component {
  render() {
    return (
      <section className="items">
        <Container className="d-flex h-100 rtl">
          <div className="d-flex flex-column m-2">
            <img
              src="https://picsum.photos/400/150"
              alt=""
              className="m-2 w-100 h-100"
            />
            <img
              src="https://picsum.photos/400/151"
              alt=""
              className="m-2 w-100 h-100"
            />
          </div>
          <img
            src="https://picsum.photos/600/300"
            alt=""
            className="m-3 w-100 h-100"
          />
        </Container>
      </section>
    );
  }
}
