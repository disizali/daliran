import React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col, Button, Input } from "reactstrap";
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <div className="contact-map">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Tehran%20Province%2C%20Tehran%2C%20District%203%2C%20Noor%20Alley%2C%20Iran&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
            <style jsx>{`
              .mapouter {
                position: relative;
                text-align: right;
                height: 300px;
                width: 100%;
              }
              .gmap_canvas {
                overflow: hidden;
                background: none !important;
                height: 300px;
                width: 100%;
              }
            `}</style>
          </div>
        </div>
        <div className="contact-form rtl text-right">
          <Container className="p-5">
            <Row>
              <Col sm={12} md={6}>
                <h1>اطلاعات تماس</h1>
                <ul className="contact-list">
                  <li>
                    <i className="fas fa-plane"></i>
                    <span>هواپیمایی دلیران</span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span> تهران، نلسون ماندلا، بن بست نور، پلاک 6</span>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <i className="fas fa-clock"></i>
                        <span>
                          ساعات کاری: شنبه تا پنجشنبه - 8 صبح تا 5 بعد از ظهر
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-phone"></i>
                        <span>تلفن تماس 88878583-021</span>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <span>ایمیل info@daliranair.ir</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={6}>
                <h1>در تماس باشید</h1>
                <Row className="mb-3">
                  <Col>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="نام"
                    />
                  </Col>
                  <Col>
                    <Input
                      type="email"
                      className="form-control"
                      placeholder="ایمیل"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="آدرس وب سایت"
                    />
                  </Col>
                  <Col>
                    <Input
                      type="email"
                      className="form-control"
                      placeholder="موضوع"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <textarea
                      className="form-control"
                      placeholder="متن پیام"
                    ></textarea>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className="form-control contact-btn-send">
                      ارسال
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    );
  }
}
