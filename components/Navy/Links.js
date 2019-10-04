import React from "react";
import { Row, Col } from "reactstrap";
import Link from "next/link";
export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="navy-links">
        <Row className="navy-links-row">
          <Col className="navy-link-1 rtl text-right pr-5 pt-5 ">
            <ul>
              <li>
                <Link href="#">
                  <a>فضای داخلی</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>مشخصات فنی</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>گالری</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>خدمات مشتری</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="navy-link-2">
            <Link href="#">
              <a>کلاس های پرواز</a>
            </Link>
          </Col>
          <Col className="navy-link-3">
            <Link href="#">
              <a>دانلود بروشور</a>
            </Link>
          </Col>
        </Row>
      </section>
    );
  }
}
