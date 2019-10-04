import React from "react";
import { FormGroup, Input, Table, Button } from "reactstrap";

export default class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { goToLevel } = this.props;
    return (
      <section className="jobs rtl text-right">
        <FormGroup row inline>
          <legend className="col-form-label col-sm-12">
            سوابق شغلي يا فعاليتهايي كه در آن همكاري داشته ايد شغل فعلی و مشاغلی
            که تاکنون داشته اید را با شرح کامل و به تفکیک و ترتیب زمانی بنویسید
            .
          </legend>
        </FormGroup>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام محل فعالیت</th>
              <th>سمت</th>
              <th>نوع استخدام</th>
              <th>از تاریخ</th>
              <th>تا تاریخ</th>
              <th>میزان حقوق و مزایا</th>
              <th>علت ترک کار</th>
              <th>نام کارفرما</th>
              <th>آدرس و تلفن</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((item, index) => {
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
            goToLevel(4);
          }}
        >
          ادامه
        </Button>
      </section>
    );
  }
}
