import React, { Component } from "react";

export default class Parallax extends Component {
  componentDidMount() {
    const simpleParallax = require("simple-parallax-js");
    var image = document.getElementsByClassName("parallax-photo");
    new simpleParallax(image, {
      scale: 1.5
    });
  }

  render() {
    return (
      <section>
        <img
          src="https://picsum.photos/seed/parallax/1000/400"
          alt="parallax photo"
          className="parallax-photo"
          id="parallax-photo"
          width="100%"
        />
      </section>
    );
  }
}
