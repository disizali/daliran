import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="navy-description" id="navy-description">
        <Container>
          <Row className="p-4">
            <Col className="justify-content-center d-flex" sm="12" md="6">
              <img src="/static/images/navy-km.png" className="w-100" />
            </Col>
            <Col className="justify-content-center" sm="12" md="6">
              <h1 className="navy-desc-title rtl">ناوگان هوایی دلیران</h1>
              <p className="navy-desc-body rtl">
                طبق برنامه ریزی صورت گرفته ، شرکت هواپیمایی دلیران به ارائه
                خدمات جابه جایی مسافر ، بار و پست بصورت چارتری بین المللی طبق
                ضوابط تعریف و تعیین شده برای اینگونه پروازها توسط سازمان
                هواپیمایی کشوری در مقیاس های داخلی و بین المللی مبادرت خواهد
                نمود .
              </p>
              <p className="navy-desc-body rtl">
                با عنایت به اینکه شرکت های هواپیمایی موجود در صنعت ، جملگی بصورت
                FULL AOC فعالیت می نمایند ، موضوع فعالیت این شرکت مدل جدیدی از
                کسب و کار خواهد بود که با عنایت به پتانسیل های این شرکت از لحاظ
                مالی ، سابقه چندین ساله اعضای کلیدی این شرکت در فعالیت های
                چارتری و برخورداری از عمده ترین زیرساخت بسته های مسافرتی افق
                روشنی پیش روی این شرکت بوده و این امر وجه تمایز آشکار درخواست
                مطرح شده با فعالیت های جاری صنعت می باشد .
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
