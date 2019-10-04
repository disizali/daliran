import React from "react";

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <img
        className="navy-cover"
        id="navy-cover"
        src="/static/images/navy-cover.png"
        width="100%"
      />
    );
  }
}
