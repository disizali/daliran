import React, { Component } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import {Container} from "reactstrap";
export default class Pages extends Component {
  static async getInitialProps(context) {
    const {
      query: { name }
    } = context;
    const { data: page } = await axios.get(
      `http://localhost:3001/pages/${name}`
    );
    return { page };
  }
  render() {
    return (
      <Layout>
        <Container
          className="page-body py-5"
          dangerouslySetInnerHTML={{ __html: this.props.page.body }}
        ></Container>
      </Layout>
    );
  }
}