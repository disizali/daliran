import React from "react";
import { Table, Row, Col, Button } from "reactstrap";
export default class Personal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { goToLevel, information } = this.props;
    return (
      <section className="personal rtl">
        <Row>
          <Col sm={3}>
            <input
              type="text"
              name="user-name"
              id="user-name"
              onChange={this.props.handleChanges}
              value={information.userName}
              className="form-control text-right"
              placeholder="نام"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-family"
              id="user-family"
              value={information.userFamily}
              onChange={this.props.handleChanges}
              className="form-control text-right"
              placeholder="نام خانوادگی"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-father"
              className="form-control text-right"
              placeholder="نام پدر"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-father"
              className="form-control text-right"
              placeholder="دین"
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3}>
            <input
              type="text"
              name="user-family"
              className="form-control text-right"
              placeholder="شماره شناسنامه"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-family"
              className="form-control text-right"
              placeholder="سریال شناسنامه"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-family"
              className="form-control text-right"
              placeholder="کد ملی"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-family"
              className="form-control text-right"
              placeholder="شماره پاسپورت"
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3}>
            <input
              type="text"
              name="user-family"
              className="form-control text-right"
              placeholder="محل تولد"
            />
          </Col>
          <Col sm={6}>
            <Row>
              <Col style={{ alignItems: "center", lineHeight: "40px" }}>
                <span> تاریخ تولد :</span>
              </Col>
              <Col>
                <input
                  type="number"
                  name="user-birthdate"
                  id="user-birthdate"
                  min="1"
                  max="31"
                  className="form-control text-right"
                  placeholder="01"
                />
              </Col>
              <Col>
                <input
                  type="number"
                  name="user-family"
                  min="1"
                  max="12"
                  className="form-control text-right"
                  placeholder="01"
                />
              </Col>
              <Col>
                <input
                  type="number"
                  name="user-family"
                  min="1300"
                  max="1398"
                  className="form-control text-right"
                  placeholder="1398"
                />
              </Col>
            </Row>
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-family"
              className="form-control text-right"
              placeholder="تابعیت"
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3} className="text-right">
            <span>وضعیت نظام وظیفه : </span>
          </Col>
          <Col sm={3}>
            <Row>
              <Col className="text-right">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadio1"
                    value="option1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label mr-4 w-100"
                    htmlFor="exampleRadios1"
                  >
                    پایان خدمت
                  </label>
                </div>
              </Col>
              <Col>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadio1"
                    value="option1"
                  />
                  <label
                    className="form-check-label w-75"
                    htmlFor="exampleRadios1"
                  >
                    معاف
                  </label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-family"
              className="form-control text-right"
              placeholder="شماره برگه پایان خدمت/معفافیت"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-family"
              className="form-control text-right"
              placeholder="دلیل معافیت (مختصر)"
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3} className="text-right">
            <span>وضعیت تاهل : </span>
          </Col>
          <Col sm={6} className="rtl text-right">
            <Row>
              <Col>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadio2"
                    id="exampleRadios2"
                    value="option1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label mr-4 w-100"
                    htmlFor="exampleRadios1"
                  >
                    متاهل
                  </label>
                </div>
              </Col>
              <Col>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadio2"
                    id="exampleRadios2"
                    value="option1"
                  />
                  <label
                    className="form-check-label mr-4 w-100"
                    htmlFor="exampleRadios1"
                  >
                    مجرد
                  </label>
                </div>
              </Col>
              <Col>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadio2"
                    id="exampleRadios2"
                    value="option1"
                  />
                  <label
                    className="form-check-label mr-4 w-100"
                    htmlFor="exampleRadios1"
                  >
                    معیل
                  </label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={3}>
            <input
              type="number"
              name="user-childs"
              min="0"
              className="form-control text-right"
              placeholder="تعداد فرزندان"
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={3}>
            <input
              type="text"
              name="user-address"
              className="form-control text-right"
              placeholder="آدرس محل سکونت"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-address"
              className="form-control text-right"
              placeholder="مدت سکونت"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-static-phone"
              className="form-control text-right"
              placeholder="تلفن ثابت"
            />
          </Col>
          <Col sm={3}>
            <input
              type="text"
              name="user-dynamic-phone"
              className="form-control text-right"
              placeholder="تلفن همراه"
            />
          </Col>
        </Row>
        <hr />
        <Table bordered responsive className="text-right">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام و نام خانوادگی</th>
              <th>نام پدر</th>
              <th>کد ملی</th>
              <th>تاریخ تولد</th>
              <th>نسبت</th>
              <th>شغل</th>
              <th>آدرس و محل سکونت</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item}</td>
                  <td>
                    <input
                      type="text"
                      name="user-dynamic-phone"
                      className="form-control text-right"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="user-dynamic-phone"
                      className="form-control text-right"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="user-dynamic-phone"
                      className="form-control text-right"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="user-dynamic-phone"
                      className="form-control text-right"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="user-dynamic-phone"
                      className="form-control text-right"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="user-dynamic-phone"
                      className="form-control text-right"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="user-dynamic-phone"
                      className="form-control text-right"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <hr />
        <Button
          className="form-control employment-btn-continue"
          color="warning"
          onClick={() => {
            goToLevel(2);
          }}
        >
          ادامه
        </Button>
      </section>
    );
  }
}
