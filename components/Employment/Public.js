import React from "react";
import { FormGroup, Label, Input, Col, Table , Button} from "reactstrap";

export default class Insurance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { goToLevel } = this.props;
    return (
      <section className="insurance rtl text-right">
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-2 mb-2">سابقه بیمه</legend>
        </FormGroup>
        <Table responsive bordered>
          <thead>
            <tr>
              <th>سابقه مشمولیت بیمه از طریق کارفرما</th>
              <th>نوع بیمه</th>
              <th>تاریخ شروع</th>
              <th>تاریخ پایان</th>
              <th>شماره بیمه</th>
              <th>شعبه</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input type="checkbox" />
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
          </tbody>
        </Table>
        <hr />
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-2 mb-2">سابقه کیفری</legend>
        </FormGroup>
        <Table responsive bordered>
          <thead>
            <tr>
              <th>سابقه کیفری</th>
              <th>مدت</th>
              <th>علت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input type="checkbox" />
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
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-2 mb-2">وضعیت جسمانی</legend>
        </FormGroup>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="health-radio"
            id="health-radio"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label mr-4 ml-4" htmlFor="health-radio">
            سلامت کامل
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="health-radio"
            id="health-radio"
            value="option1"
          />
          <label className="form-check-label mr-4 ml-4" htmlFor="health-radio">
            تقص عضو
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="health-radio"
            id="health-radio"
            value="option1"
          />
          <label className="form-check-label mr-4 ml-4" htmlFor="health-radio">
            سایر
          </label>
        </div>
        <hr />
        <div className="form-inline">
          <Input type="text" className="form-control m-2" placeholder="قد" />
          <Input type="text" className="form-control m-2" placeholder="وزن" />
          <Input
            type="text"
            className="form-control m-2"
            placeholder="سایز لباس"
          />
          <Input
            type="text"
            className="form-control m-2"
            placeholder="سایز کفش"
          />
        </div>
        <hr />
        <FormGroup tag="fieldset" row inline>
          <legend className="col-form-label col-sm-12 mb-2">
            آیا در صورت نیاز ، امکان کار با شرایط ذیل برای شما وجود دارد ؟
          </legend>
        </FormGroup>
        <b>کار در ایام تعطیل</b>
        <br />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="closed-days-radio"
            id="closed-days-radio"
            value="option1"
          />
          <label
            className="form-check-label mr-4 ml-4"
            htmlFor="closed-days-radio"
          >
            بله
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="closed-days-radio"
            id="closed-days-radio"
            value="option1"
          />
          <label
            className="form-check-label mr-4 ml-4"
            htmlFor="closed-days-radio"
          >
            خیر
          </label>
        </div>
        <br />
        <b>اضافه کار روزانه</b>
        <br />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="overtime-radio"
            id="overtime-radio"
            value="option1"
          />
          <label
            className="form-check-label mr-4 ml-4"
            htmlFor="overtime-radio"
          >
            بله
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="overtime-radio"
            id="overtime-radio"
            value="option1"
          />
          <label
            className="form-check-label mr-4 ml-4"
            htmlFor="overtime-radio"
          >
            خیر
          </label>
          <Input
            type="number"
            min={1}
            max={24}
            className="form-control col-sm-2"
            placeholder="حداکثر تا ساعت"
          />
        </div>
        <br />
        <b>انجام کار در مشاغل هم ردیف</b>
        <br />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="otherworks-radio"
            id="otherworks-radio"
            value="option1"
          />
          <label
            className="form-check-label mr-4 ml-4"
            htmlFor="otherworks-radio"
          >
            بله
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="otherworks-radio"
            id="otherworks-radio"
            value="option1"
          />
          <label
            className="form-check-label mr-4 ml-4"
            htmlFor="otherworks-radio"
          >
            خیر
          </label>
        </div>
        <br />
        <Button
          className="form-control employment-btn-continue"
          color="warning"
          onClick={() => {
            goToLevel(8);
          }}
        >
          ادامه
        </Button>
      </section>
    );
  }
}
