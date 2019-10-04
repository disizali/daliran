import React from "react";
import Layout from "../components/Layout";
import Navy from "../components/Navy";

export default class NavyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Navy />
      </Layout>
    );
  }
}
