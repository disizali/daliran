import React from "react";
import Cover from "./Cover";
import Description from "./Description";
import Airplanes from "./Airplanes";
import Links from "./Links";

export default class Navy extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main id="navy-main">
        <Cover />
        <Description />
        <Airplanes />
        {/* <Links /> */}
      </main>
    );
  }
}
