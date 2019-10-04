import React from "react";
import { FormGroup, Table, Input, CustomInput , Button} from "reactstrap";

export default class Referral extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { goToLevel } = this.props;
    return (
      <section className="referral text-right rtl">
        <FormGroup row inline>
          <strong className="col-form-label col-sm-12 mb-2">
            معرفت شما به شرکت
          </strong>
        </FormGroup>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام و نام خانوادگی</th>
              <th>شغل</th>
              <th>محل اشتغال</th>
              <th>نوع رابطه</th>
              <th>محل سکونت و تلفن</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
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
        <FormGroup row inline>
          <strong className="col-form-label col-sm-12 mb-2">
            لطفا در صورت آشنایی قبلی با هریک از کارکنان فعلی یا سابق شرکت در
            جدول زیر ذکر نمایید
          </strong>
        </FormGroup>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام و نام خانوادگی</th>
              <th>شغل</th>
              <th>محل اشتغال</th>
              <th>نوع رابطه</th>
              <th>محل سکونت و تلفن</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
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
        <FormGroup row inline>
          <strong className="col-form-label col-sm-12 mb-2">
            چنانچه از بستگان درجه یک خانواده محترم شهداء ، مفقود الاثر ، آزاده ،
            ایثارگر، بسیجی می باشند جدول ذیل را تکمیل فرمائید.
          </strong>
        </FormGroup>
        <Table bordered responsive>
          <thead>
            <tr>
              <th>نام و نام خانوادگی</th>
              <th>نسبت</th>
              <th>خانواده محترم شهدا</th>
              <th>مفقود الاثر</th>
              <th>آزاده</th>
              <th>ایثارگر</th>
              <th>جانباز با درصد جانبازی</th>
              <th>بسیجی</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3).keys()].map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Input
                      type="text"
                      className="form-control"
                      id={`referral-shahid-name-${item}`}
                    />
                  </td>
                  <td>
                    <Input type="text" className="form-control" />
                  </td>
                  <td>
                    <CustomInput
                      id={`referral-checkbox-shahid-${item}`}
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <CustomInput
                      id={`referral-checkbox-mafqod-${item}`}
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <CustomInput
                      id={`referral-checkbox-azade-${item}`}
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <CustomInput
                      id={`referral-checkbox-isargar-${item}`}
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <CustomInput
                      id={`referral-checkbox-janbaz-${item}`}
                      type="checkbox"
                    />
                  </td>
                  <td>
                    <CustomInput
                      id={`referral-checkbox-basiji-${item}`}
                      type="checkbox"
                    />
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
            goToLevel(7);
          }}
        >
          ادامه
        </Button>
      </section>
    );
  }
}
