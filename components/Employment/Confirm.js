import React from "react";
import { CustomInput, FormGroup, Button } from "reactstrap";
export default class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  handleChange(e) {
    this.setState({ checked: e.target.checked });
  }
  render() {
    const { goToLevel } = this.props;
    const { userName, userFamily } = this.props.information;
    return (
      <section className="confirm rtl text-right">
        <div
          className="p-3"
          style={{ display: userName && userFamily ? "block" : "none" }}
        >
          <p>
            اینجانب
            <span className="text-primary">{` ${userName} ${userFamily} `}</span>
            متقاضی استخدام در شرکت هواپیمایی دلیران می باشم و تائید و اقرار می
            نمایم کلیه اطلاعات مندرج در فرم در خواست اشتغال صحیح است و کلیه
            مستندات مربوطه ضامن صحت و اصالت انها میباشد ضمیمه نموده ام و چنانچه
            در اظهارات و مکتوبات مندرجه مرتکب خلاف واقع گردیده و یا مستندات
            ابرازی منطبق با اطلاعات اعلامی نباشد وبهردلیل صحت صدور و تنظیم مدارک
            پیوست مورد تآیید قرارنگیرد و یا متعاقباً صحت اسناد ومدارک موجه با
            خدشه و ایراد مواجه گردد ،شرکت مجاز و مختار خواهد بود به محض کشف
            موارد مغایر اطلاعات مندرجه ویا عدم صحت مدارک و مستندات تسلیمی به
            همکاری با اینجانب خاتمه داده و حق هر گونه ادعای و یا اعتراضی را
            درکلیه مراجع قانونی از خودسلب و ساقط نمایم ضمنآ با تکمیل این فرم
            شرکت هیچ گونه تعهدی برای استخدام ندارد.
          </p>
          <FormGroup inline>
            <CustomInput
              type="checkbox"
              id="confirm-checkbox"
              label="توافق با شرایط درج شده در فوق"
              checked={this.state.checked}
              onChange={this.handleChange.bind(this)}
            />
          </FormGroup>
          <Button
            className="form-control btn btn-primary"
            disabled={this.state.checked ? false : true}
          >
            تکمیل ثبت نام
          </Button>
        </div>
        <p style={{ display: userName && userFamily ? "none" : "block" }}>
          ابتدا بخش های قبلی را تکمیل بفرمایید
          <Button
            className="form-control employment-btn-continue"
            color="warning"
            onClick={() => {
              goToLevel(1);
            }}
          >
            بخش 1
          </Button>
        </p>
      </section>
    );
  }
}
