import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import News from "./News";
import Magazine from "./Magazine";
import Navbar from "./Navbar";
import Pages from "./Pages";
import Images from "./Images";
import Data from "./Data";
import Employment from "./Employment";
import Slides from "./Slides";

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = { panel: 8 };
  }
  getPanel() {
    const { panel } = this.state;
    switch (panel) {
      case 1:
        return <News />;
      case 2:
        return <Magazine />;
      case 3:
        return <Navbar />;
      case 4:
        return <Pages />;
      case 5:
        return <Images />;
      case 6:
        return <Data />;
      case 7:
        return <Employment />;
      case 8:
        return <Slides />;
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
              <li className="d-flex justify-content-center align-items-center">
                <img
                  src="/static/images/logo.png"
                  width="50"
                  alt="daliran logo "
                />
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
                  <span>اخبار</span>
                </div>
              </li>
              <li
                className={`w-100 h-100 ${panel == 2 && "active"}`}
                onClick={() => this.changePanel(2)}
              >
                <div>
                  <i className="fa fa-newspaper"></i>
                  <span>مجلات</span>
                </div>
              </li>
              <li
                className={`w-100 h-100 ${panel == 3 && "active"}`}
                onClick={() => this.changePanel(3)}
              >
                <div>
                  <i className="fa fa-bars"></i>
                  <span>نویگیشن</span>
                </div>
              </li>
              <li
                className={`w-100 h-100 ${panel == 4 && "active"}`}
                onClick={() => this.changePanel(4)}
              >
                <div>
                  <i className="fa fa-copy"></i>
                  <span>صفحات</span>
                </div>
              </li>
              <li
                className={`w-100 h-100 ${panel == 5 && "active"}`}
                onClick={() => this.changePanel(5)}
              >
                <div>
                  <i className="fa fa-images"></i>
                  <span>تصاویر</span>
                </div>
              </li>
              <li
                className={`w-100 h-100 ${panel == 6 && "active"}`}
                onClick={() => this.changePanel(6)}
              >
                <div>
                  <i className="fa fa-file-alt"></i>
                  <span>متن ها</span>
                </div>
              </li>
              <li
                className={`w-100 h-100 ${panel == 7 && "active"}`}
                onClick={() => this.changePanel(7)}
              >
                <div>
                  <i className="fa fa-users"></i>
                  <span>همکاری</span>
                </div>
              </li>
              <li
                className={`w-100 h-100 ${panel == 8 && "active"}`}
                onClick={() => this.changePanel(8)}
              >
                <div>
                  <i className="fa fa-grip-horizontal"></i>
                  <span>اسلایدر</span>
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
