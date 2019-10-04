import React from "react";
import { Container, Row, Col } from "reactstrap";
import levels from "../../static/data/levels.json";
const levelsList = Object.values(levels);

export default class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { level, goToLevel } = this.props;
    return (
      <section className="levels rtl text-center">
        <Row>
          {levelsList.map((item, index) => {
            return (
              <Col
                key={index}
                onClick={() => {
                  goToLevel(Number(item.id));
                }}
                className={`level-item ${level == item.id ? "active" : ""}`}
              >
                <Row>
                  <Col sm={12}>
                    <p className="level-number">{item.id}</p>
                  </Col>
                  <Col sm={12}>
                    <p className="level-text text-right">{item.title}</p>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </section>
    );
  }
}
