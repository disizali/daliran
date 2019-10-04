import React from "react";
import Link from "next/link";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }
  async componentDidMount() {
    const { data: news } = await axios.get("http://localhost:3000/api/news");
    this.setState({ news });
  }
  render() {
    return (
      <footer>
        <div className="footer-social text-center">
          <a href="https://twitter.com" className="twitter">
            <i className="fab fa-twitter m-4"></i>
          </a>
          <a href="https://facebook.com" className="facebook">
            <i className="fab fa-facebook-f m-4"></i>
          </a>
          <a href="https://instagram.com" className="instagram">
            <i className="fab fa-instagram m-4"></i>
          </a>
          <a href="https://youtube.com" className="youtube">
            <i className="fab fa-youtube m-4"></i>
          </a>
        </div>
        <Container>
          <Row className="rtl p-5 text-right">
            <Col sm="12" md="4">
              <h5 className="footer-title">دسترسی سریع</h5>
              <ul className="footer-list">
                <li>
                  <Link href="/">
                    <a>صفحه اصلی</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>درباره هواپیمایی</a>
                  </Link>
                </li>
                <li>
                  <Link href="/navy">
                    <a>ناوگان هوایی</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>تماس با ما</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <a>آخرین اخبار</a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col sm="12" md="4">
              <h5 className="footer-title">آخرین اخبار</h5>
              <ul className="footer-list">
                {this.state.news.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link href="#">
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col sm="12" md="4">
              <h5 className="footer-title">تماس با ما</h5>
              <ul className="footer-list">
                <li>
                  <span>
                    بلوار آفریقا، بالاتر از ظفر، بن بست نور پلاک 6 طبقه چهارم
                  </span>
                </li>
                <li>
                  <span>تلفن: 88878583-021</span>
                </li>
              </ul>
              <h5 className="footer-title">عضویت در خبر نامه</h5>
              <ul className="footer-list">
                <li>
                  <input
                    type="email"
                    className="form-control text-dark"
                    placeholder="آدرس ایمیل"
                  />
                </li>
                <li>
                  <button className="btn btn-warning btn-send">ارسال</button>
                </li>
              </ul>
            </Col>
          </Row>
          <span className="copyright">
            © 2019 Daliran airways. All Rights Reserved.
          </span>
        </Container>
      </footer>
    );
  }
}
