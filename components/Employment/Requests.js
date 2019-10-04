import React from "react";
import { FormGroup, Table, Input, Row, Col, Button } from "reactstrap";

export default class Requests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { goToLevel } = this.props;
    return (
      <section className="requests text-right rtl">
        <FormGroup row inline>
          <strong className="col-form-label col-sm-12 mb-2">
            شغل مورد درخواست :
          </strong>
        </FormGroup>
        <Table bordered responsive>
          <thead>
            <tr>
              <th className="text-center" colSpan={2}>
                شغل و سوابق پروازی و فنی
              </th>
            </tr>
            <tr>
              <th width="75%">تایپ مورد تائید سازمان هواپیمایی کشوری</th>
              <th width="25%">ساعت پرواز</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5).keys()].map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Input type="text" className="form-control" />
                  </td>
                  <td>
                    <Input type="number" className="form-control" />
                  </td>
                </tr>
              );
            })}
          </tbody>
          <thead>
            <tr>
              <th colSpan={2} className="text-center">
                عنوان شغل مورد تقاضا
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">
                <Row>
                  <Col>
                    <Input type="checkbox" />
                    <span className="mr-5">خلبان</span>
                  </Col>
                  <Col>
                    <Input type="checkbox" />
                    <span className="mr-5">سرمهماندار</span>
                  </Col>
                  <Col>
                    <Input type="checkbox" />
                    <span className="mr-5">مهندس هواپیما</span>
                  </Col>
                </Row>
              </th>
            </tr>
            <tr>
              <th colSpan="2">
                <Row>
                  <Col>
                    <Input type="checkbox" />
                    <span className="mr-5">کمک خلبان</span>
                  </Col>
                  <Col>
                    <Input type="checkbox" />
                    <span className="mr-5">مهماندار</span>
                  </Col>
                  <Col>
                    <Input type="checkbox" />
                    <span className="mr-5">تکنسین</span>
                  </Col>
                </Row>
              </th>
            </tr>
            <tr>
              <th colSpan="2">
                <Row>
                  <Col>
                    <Input type="checkbox" />
                    <span className="mr-5">دیسپچ</span>
                  </Col>
                  <Col>
                    <Input type="checkbox" />
                    <span className="mr-5">بازرگانی</span>
                  </Col>
                  <Col>
                    <Input type="checkbox" />
                    <span className="mr-5">حراست</span>
                  </Col>
                </Row>
              </th>
            </tr>
          </tbody>
        </Table>
        <hr />
        <div className="form-inline">
          <Input
            type="text"
            placeholder="میزان حقوق درخواستی"
            className="form-control m-2"
          />
          <Input
            type="text"
            placeholder="شغل درخواستی دیگر"
            className="form-control m-2"
          />
        </div>
        <hr />

        <FormGroup row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            آیا قبلآ در این شرکت یا واحدهای تابعه آن تقاضای استخدام نموده اید ؟
          </legend>
        </FormGroup>
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
            className="form-check-label mr-4 ml-4"
            htmlFor="exampleRadios1"
          >
            بله
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadio1"
            value="option1"
          />
          <label
            className="form-check-label mr-4 ml-4"
            htmlFor="exampleRadios1"
          >
            خیر
          </label>
          <Input
            type="text"
            className="form-control"
            placeholder="تاریخ درخواست"
          />
        </div>
        <hr />
        <FormGroup row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            آیا در صورت نیاز برای مسئولیت های خاص قادر به ارائه تضمین یا سفته
            هستید ؟
          </legend>
        </FormGroup>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadio2"
            id="exampleRadio2"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label mr-4 ml-4" htmlFor="exampleRadio2">
            بله
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadio2"
            id="exampleRadio2"
            value="option1"
          />
          <label className="form-check-label mr-4 ml-4" htmlFor="exampleRadio2">
            خیر
          </label>
        </div>
        <br />
        <Button
          className="form-control employment-btn-continue"
          color="warning"
          onClick={() => {
            goToLevel(6);
          }}
        >
          ادامه
        </Button>
      </section>
    );
  }
}
