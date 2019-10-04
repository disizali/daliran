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
      <section className="navy-links w-100 rtl">
        <Row className="navy-links-row m-0">
          <Col
            className="h-100 w-100 navy-link-item navy-link-item-1"
            sm={12}
            md={4}
          >
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
          <Col
            className="h-100 w-100 navy-link-item  navy-link-item-2"
            sm={12}
            md={4}
          >
            <Link href="#">
              <a>کلاس های پرواز</a>
            </Link>
          </Col>
          <Col
            className="h-100 w-100 navy-link-item navy-link-item-3"
            sm={12}
            md={4}
          >
            <Link href="#">
              <a>دانلود بروشور</a>
            </Link>
          </Col>
        </Row>
      </section>
    );
  }
}
