import React, { Component } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { Container } from "reactstrap";

export class Magazine extends Component {
  static async getInitialProps(context) {
    const {
      query: { name }
    } = context;
    const { data: magazine } = await axios.get(
      `http://localhost:3001/magazine/${name}`
    );
    return { magazine };
  }
  render() {
    return (
      <Layout>
        <Container
          className="magazine-body py-5"
          dangerouslySetInnerHTML={{ __html: this.props.magazine.body }}
        ></Container>
      </Layout>
    );
  }
}

export default Magazine;
