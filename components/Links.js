import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
export default class Links extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="links">
        <Row>
          <Col sm={12} className="mb-md-5 mb-sm-2">
            <Container>
              <Row>
                <Col sm="12" md={4} className="mb-5 mb-md-0">
                  <Link href="/magazine">
                    <a className="link-item-anchor">
                      <div className="bg-white shadow rounded h-100 w-100 ">
                        <img
                          src="/static/images/magazine.png"
                          className="link-image"
                          width="100%"
                        />
                        <h5 className="link-title">مجله گردشگری</h5>
                        <p className="link-text">
                          دیدنی ترین و جذاب ترین مقاصد گردشگری را مشاهده نمایید
                          و نظرات خود را با ما به اشتراک بگذارید
                        </p>
                      </div>
                    </a>
                  </Link>
                </Col>
                <Col sm="12" md="4" className="mb-5 mb-md-0">
                  <Link href="/navy">
                    <a className="link-item-anchor">
                      <div className="bg-white shadow rounded h-100 w-100">
                        <img
                          src="/static/images/navy.png"
                          className="link-image"
                          width="100%"
                        />
                        <h5 className="link-title">ناوگان هوایی</h5>
                        <p className="link-text">
                          برای مشاهده ناوگان هوایی دلیران کلیک کنید
                        </p>
                      </div>
                    </a>
                  </Link>
                </Col>
                <Col sm="12" md="4">
                  <Link href="/employment">
                    <a className="link-item-anchor">
                      <div className="bg-white shadow rounded h-100 w-100">
                        <img
                          src="/static/images/cooperate.png"
                          className="link-image"
                          width="100%"
                        />
                        <h5 className="link-title">
                          استخدام در هواپیمایی دلیران
                        </h5>
                        <p className="link-text">
                          در صورت تمایل به همکاری در هواپیمایی دلیران لطفا فرم
                          مربوطه را تکمیل فرمایید
                        </p>
                      </div>
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={12}>
            <Container className="icons-container position-relative">
              <Row>
                <Col>
                  <img src="/static/images/logo.png" className="icon-image" />
                </Col>
                <Col className="left-border">
                  <img src="/static/images/logo.png" className="icon-image" />
                </Col>
                <Col className="left-border">
                  <img src="/static/images/logo.png" className="icon-image" />
                </Col>
                <Col className="left-border">
                  <img src="/static/images/logo.png" className="icon-image" />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </section>
    );
  }
}
