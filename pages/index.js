import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Description from "../components/Description";
// import Mountain from "../components/Mountain";
import Parallax from "../components/Parallax";
import Items from "../components/Items";
import Slider from "../components/Slider";

import Links from "../components/Links";
import axios from "axios";
class Index extends React.Component {
  static async getInitialProps(context) {
    const { data } = await axios.get("http://localhost:3001/data");
    const { data: slides } = await axios.get(
      "http://localhost:3001/slides"
    );
    return { data, slides };
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { data, slides } = this.props;
    return (
      <Layout>
        <Splash />
        <Description data={data} />
        {/* <Mountain /> */}
        <Parallax />
        <Items />
        <Slider slides={slides} />
        {/* <Links /> */}
        <style jsx>{`
          body {
            width: 100vw;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
