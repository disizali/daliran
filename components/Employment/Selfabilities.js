import React from "react";
import { FormGroup, Input, Label, Col, Table , Button} from "reactstrap";

export default class Selfabilities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  generateCheckList(additional) {
    return (
      <Col sm={10}>
        <FormGroup check className="mb-3" inline>
          <Input
            className="ml-2 mr-2"
            type="radio"
            name={`selfabilities-${additional}`}
            id={`selfabilities-${additional}`}
          />
          <Label className="mr-2 ml-2" check>
            ضعیف
          </Label>
          <Input
            className="ml-2 mr-2"
            type="radio"
            name={`selfabilities-${additional}`}
            id={`selfabilities-${additional}`}
          />
          <Label className="mr-2 ml-2" check>
            متوسط
          </Label>
          <Input
            className="ml-2 mr-2"
            type="radio"
            name={`selfabilities-${additional}`}
            id={`selfabilities-${additional}`}
          />
          <Label className="mr-2 ml-2" check>
            خوب
          </Label>
        </FormGroup>
      </Col>
    );
  }
  render() {
    const { goToLevel } = this.props;
    return (
      <section className="self-abilites rtl text-right">
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            آشنایی با زبان انگلیسی ( خواندن و نوشتن ) :
          </legend>
          {this.generateCheckList("english-read-write")}
        </FormGroup>
        <hr />
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            آشنایی با زبان انگلیسی ( مکالمه ) :
          </legend>
          {this.generateCheckList("english-speak")}
        </FormGroup>
        <hr />
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            روابط عمومی و فن بیان
          </legend>
          {this.generateCheckList("public-relations")}
        </FormGroup>
        <hr />
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            آشنایی و تسلط به اینترنت
          </legend>
          {this.generateCheckList("dominate-internet")}
        </FormGroup>
        <hr />
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            آشنایی با تایپ و نرم افزار های Word ، Excel
          </legend>
          {this.generateCheckList("word-excel")}
        </FormGroup>
        <hr />
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            آشنایی با نرم افزار هایPhotoshop ، Corel
          </legend>
          {this.generateCheckList("photoshop-corel")}
        </FormGroup>
        <hr />
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            آیا در زمینه های علمی ، اداری و مدیریتی دورهایی را گذرانده اید
          </legend>
        </FormGroup>
        <Table responsive bordered>
          <thead>
            <tr>
              <th>نام دوره</th>
              <th>گواهی پایان دوره</th>
              <th>مرکز / محل گذراندن دوره</th>
              <th>موضوع آموزش</th>
              <th>تاریخ شروع</th>
              <th>تاریخ خاتمه</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(2).keys()].map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Input type="text" className="form-control" />
                  </td>
                  <td>
                    <Input type="checkbox" className="ml-4" />
                    <span className="mr-4">دارم</span>
                  </td>
                  <td>
                    <Input type="text" className="form-control" />
                  </td>
                  <td>
                    <Input type="text" className="form-control" />
                  </td>
                  <td>
                    <Input type="text" className="form-control" />
                  </td>
                  <td>
                    <Input type="text" className="form-control" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button
          className="form-control employment-btn-continue"
          color="warning"
          onClick={() => {
            goToLevel(5);
          }}
        >
          ادامه
        </Button>
      </section>
    );
  }
}
