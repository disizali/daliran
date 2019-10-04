import React from "react";
import { FormGroup, Label, Input, Col, Table , Button} from "reactstrap";

export default class Educational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { goToLevel } = this.props;
    return (
      <section className="educational rtl text-right">
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-2 mb-2">
            آخرین مقطع تحصیلی :
          </legend>
          <Col sm={10}>
            <FormGroup check className="mb-3">
              <Input className="ml-2" type="radio" name="radio2" />
              <Label className="mr-4" check>
                ابتدایی
              </Label>
            </FormGroup>
            <FormGroup check className="mb-3">
              <Input className="ml-2" type="radio" name="radio2" />
              <Label className="mr-4" check>
                متوسطه
              </Label>
            </FormGroup>
            <FormGroup check className="mb-3">
              <Input className="ml-2" type="radio" name="radio2" />
              <Label className="mr-4" check>
                دیپلم
              </Label>
            </FormGroup>
            <FormGroup check className="mb-3">
              <Input className="ml-2" type="radio" name="radio2" />
              <Label className="mr-4" check>
                پیش دانشگاهی
              </Label>
            </FormGroup>
            <FormGroup check className="mb-3">
              <Input className="ml-2" type="radio" name="radio2" />
              <Label className="mr-4" check>
                کاردانی
              </Label>
            </FormGroup>
            <FormGroup check className="mb-3">
              <Input className="ml-2" type="radio" name="radio2" />
              <Label className="mr-4" check>
                کارشناسی
              </Label>
            </FormGroup>
            <FormGroup check className="mb-3">
              <Input className="ml-2" type="radio" name="radio2" />
              <Label className="mr-4" check>
                بالاتر
              </Label>
            </FormGroup>
            <FormGroup check className="mb-2">
              <Input
                type="text"
                className="form-control"
                placeholder="دانشجوی مقطع ..."
              />
            </FormGroup>
          </Col>
        </FormGroup>
        <hr />
        <Table bordered responsive>
          <thead>
            <tr>
              <th>آخرین مدرک تحصیلی</th>
              <th>رشته تحصیلی</th>
              <th>سال شروع</th>
              <th>سال پایان</th>
              <th>معدل کل</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
              <td>
                <Input type="text" className="form-control" />
              </td>
            </tr>
          </tbody>
        </Table>
        <hr />
        <legend className="col-form-label col-sm-2 mb-2">
          سوابق دوره آموزشی
        </legend>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام دوره</th>
              <th>نام موسسه و تلفن</th>
              <th>رشته تخصصی </th>
              <th>از تاریخ</th>
              <th>تا تاریخ</th>
              <th>مدت</th>
              <th>عنوان گواهینامه</th>
              <th>معدل</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item}</td>
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
        <hr />
        <Button
          className="form-control employment-btn-continue"
          color="warning"
          onClick={() => {
            goToLevel(3);
          }}
        >
          ادامه
        </Button>
      </section>
    );
  }
}
