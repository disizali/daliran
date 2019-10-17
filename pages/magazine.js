import React from "react";
import Layout from "../components/Layout";
import axios from "axios";

import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

class Magazine extends React.Component {
  static async getInitialProps(context) {
    const { data: magazine } = await axios.get(
      `http://localhost:3001/magazine`
    );
    return { magazine };
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
              {this.props.magazine.map((item, index) => {
                let magazineItem = (
                  <Col sm="12" md="4" key={index}>
                    <div className="magazine-item shadow rounded">
                      <div className="magazine-content">
                        <img
                          src={`/static/uploads/images/${item.image}`}
                          className="magazine-item-image"
                        />
                        <Link href={`magazine/${item.enName}`}>
                          <a className="magazine-item-link">
                            <i className="fas fa-search"></i>
                          </a>
                        </Link>
                      </div>
                      <h3 className="text-right text-muted">{item.faName}</h3>
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
