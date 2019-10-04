import React from "react";
import Layout from "../components/Layout";
import axios from "axios";

import { Container, Row, Col } from "reactstrap";

class Magazine extends React.Component {
  static async getInitialProps(context) {
    const host =
      context.req != undefined
        ? `http://${context.req.headers.host}`
        : `${window.location.origin}`;
    console.log("host =>", host);
    console.log("requested to => ", `${host}/api/magazine`);
    const { data } = await axios.get(`${host}/api/magazine`);
    return { data };
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <div className="magazine">
          <Container>
            <Row className="pb-2">
              {this.props.data.map((item, index) => {
                let magazineItem = (
                  <Col sm="12" md="4" key={index}>
                    <div className="magazine-item shadow rounded">
                      <div className="magazine-content">
                        <img
                          src={`/static/images/${item.image}`}
                          className="magazine-item-image"
                        />
                        <a
                          // href={`/magazine/${item.name}`}
                          href={`#`}
                          className="magazine-item-link"
                        >
                          <i className="fas fa-search"></i>
                        </a>
                      </div>
                      <h3 className="text-right text-muted">{item.fa_name}</h3>
                    </div>
                  </Col>
                );
                return magazineItem;
              })}
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default Magazine;
