import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import News from "./News";
import Magazine from "./Magazine";

export class panel extends Component {
  constructor(props) {
    super(props);
    this.state = { panel: 1 };
  }
  getPanel() {
    const { panel } = this.state;
    switch (panel) {
      case 1:
        return <News />;
      case 2:
        return <Magazine />;
    }
  }
  changePanel(panel) {
    if (panel !== this.state.panel) this.setState({ panel });
  }
  render() {
    const { panel } = this.state;
    return (
      <div className="h-100 w-100">
        <Row className="rtl text-right panel h-100 w-100 p-0 m-0">
          <Col sm={12} md={2} className="panel-actions h-100 w-100 p-0">
            <ul className="w-100">
              <li>
                <img src="/static/images/logo.png" width="50" alt="" />
                <span className="text-dark">پنل مدیریت</span>
              </li>
              <li>
                <hr />
              </li>
              <li
                className={`w-100 h-100 ${panel == 1 && "active"}`}
                onClick={() => this.changePanel(1)}
              >
                <div>
                  <i className="fa fa-rss"></i>
                  <span>افزودن خبر</span>
                </div>
              </li>
              <li
                className={`w-100 h-100 ${panel == 2 && "active"}`}
                onClick={() => this.changePanel(2)}
              >
                <div>
                  <i className="fa fa-newspaper"></i>
                  <span>افزودن مجله</span>
                </div>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={10} className="panel-container">
            {this.getPanel()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default panel;
