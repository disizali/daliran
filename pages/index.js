import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import Description from "../components/Description";
import Mountain from "../components/Mountain";
import Links from "../components/Links";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Splash />
        <Description />
        <Mountain />
        <Links />
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
