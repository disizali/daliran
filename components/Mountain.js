import React from "react";
export default class Mountain extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const simpleParallax = require("simple-parallax-js");
    var airplane = document.getElementById("mountain-airplane");
    new simpleParallax(airplane, {
      overflow: true,
      orientation: "up",
      scale: 1.5,
    });
  }

  render() {
    return (
      <section className="mountain" id="mountain">
        {/* <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.0.2/dist/simpleParallax.min.js"></script> */}
        <div className="airplane-overlay"></div>
        <img
          src="/static/images/mountain.png"
          className="mountain-image"
          width="100%"
        />
        <img
          src="/static/images/clouds-2.png"
          className="mountain-clouds"
          id="mountain-clouds"
        />
        <img
          src="/static/images/clouds-3.png"
          className="mountain-clouds-2"
          id="mountain-clouds-2"
        />
        <img
          src="/static/images/clouds.png"
          className="mountain-clouds-3"
          id="mountain-clouds-3"
        />
        <img
          src="/static/images/mountain-airplane.png"
          className="mountain-airplane"
          width="60%"
          id="mountain-airplane"
        />
        <div className="mountain-box rtl">
          <h3>ناوگان هوایی</h3>
          <p>
            طبق برنامه ریزی صورت گرفته ، شرکت هواپیمایی دلیران به ارائه خدمات
            جابه جایی مسافر ، بار و پست بصورت چارتری بین المللی طبق ضوابط تعریف
            و تعیین شده برای اینگونه پروازها توسط سازمان هواپیمایی کشوری در
            مقیاس های داخلی و بین المللی مبادرت خواهد نمود .
          </p>
        </div>
      </section>
    );
  }
}
