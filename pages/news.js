import React from "react";
import Layout from "../components/Layout";
import axios from "axios";

import { Container, Row, Col } from "reactstrap";

class News extends React.Component {
  static async getInitialProps(context) {
    const { data: news } = await axios.get(`http://localhost:3001/news`);
    return { news };
  }

  componentDidMount() {
    document.getElementById("");
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Container className="news rtl" style={{ marginBottom: `40px` }}>
          {this.props.news.map((item, index) => {
            return (
              <div className="shadow-lg bg-white rounded mt-4 mb-4" key={index}>
                <Row>
                  <Col
                    sm="12"
                    md="12"
                    lg="3"
                    className="d-flex news-image justify-content-end justify-content-md-center p-md-0"
                  >
                    <img
                      src={`static/uploads/images/${item.image}`}
                      className="img-thumbnail shadow mr-4 rounded w-100"
                    />
                  </Col>
                  <Col className="text-right" sm="12" md="12" lg="9">
                    <h5 className="p-3 rtl"> {item.title}</h5>
                    <div
                      className="text-secondary pl-4 pr-4 news-body"
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    ></div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Container>
      </Layout>
    );
  }
}

export default News;
