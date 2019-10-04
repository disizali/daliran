import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { Container } from "reactstrap";

class About extends React.Component {
  static async getInitialProps(context) {
    const {
      query: { id }
    } = context;
    const { data } = await axios.get(`http://localhost:3000/api/about/${id}`);
    return { data };
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // const article = document.getElementById("article");
    // article.style.height = `${article.clientHeight * 1.3}px`;
  }

  render() {
    return (
      <Layout>
        <Container className="article" id="article">
          <h2 className="text-right pb-2">
            <b>{this.props.data.title}</b>
          </h2>
          <div
            className="article-body post-body text-muted text-right pt-4 pb-4"
            dangerouslySetInnerHTML={{ __html: this.props.data.body }}
          ></div>
        </Container>
      </Layout>
    );
  }
}

export default About;
