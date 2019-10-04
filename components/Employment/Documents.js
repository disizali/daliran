import React from "react";
import { FormGroup, Input, Label , Button } from "reactstrap";
export default class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { goToLevel } = this.props;
    return (
      <section className="document rtl text-right">
        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">
            اسکن تمامی صفحات شناسنامه
          </Label>
        </FormGroup>
        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">اسکن کارت ملی</Label>
        </FormGroup>
        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">
            شناسنامه افراد تحت تکفل
          </Label>
        </FormGroup>

        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">
            شناسنامه افراد تحت تکفل
          </Label>
        </FormGroup>
        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">6 قطعه عکس 3x4</Label>
        </FormGroup>
        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">
            کپی کارت پایان خدمت
          </Label>
        </FormGroup>

        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">
            کپی گذرنامه صفحه مشخصات
          </Label>
        </FormGroup>
        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">سفته حسب مورد</Label>
        </FormGroup>
        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">
            صفحه اول دفترچه بیمه
          </Label>
        </FormGroup>

        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">
            گواهی عدم اعتیاد
          </Label>
        </FormGroup>
        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">
            گواهی عدم سوء پیشینه
          </Label>
        </FormGroup>
        <FormGroup check inline className="mb-3">
          <Input type="file" className="pl-5 custom-file-input" />
          <Label className="text-left custom-file-label">
            کپی اخرین مدرک تحصیلی
          </Label>
        </FormGroup>
        <Button
          className="form-control employment-btn-continue"
          color="warning"
          onClick={() => {
            goToLevel(9);
          }}
        >
          ادامه
        </Button>
      </section>
    );
  }
}
