import React from "react";
import "../styles/index.scss";

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
  }
  componentDidMount() {
    const myVideo = document.getElementById("desc-video");
    myVideo.addEventListener("ended", () => {
      myVideo.currentTime = 0;
      return this.setState({ playing: false });
    });
  }
  palyVideo() {
    const myVideo = document.getElementById("desc-video");
    if (myVideo.paused) {
      myVideo.play();
      return this.setState({ playing: true });
    }
    myVideo.pause();
    return this.setState({ playing: false });
  }

  render() {
    const { playing } = this.state;
    return (
      <section className="description rtl">
        <div className="splitter"></div>
        <div className="desc-about rtl">
          <img src="/static/images/logo-overlay.png" className="desc-image" />
          <span className="desc-title">درباره هواپیمایی دلیران</span>
          <br />
          <span className="desc-text">
            طبق برنامه ریزی صورت گرفته ، شرکت هواپیمایی دلیران به ارائه خدمات
            جابه جایی مسافر ، بار و پست بصورت چارتری بین المللی طبق ضوابط تعریف
            و تعیین شده برای اینگونه پروازها توسط سازمان هواپیمایی کشوری در
            مقیاس های داخلی و بین المللی مبادرت خواهد نمود . با عنایت به اینکه
            شرکت های هواپیمایی موجود در صنعت ، جملگی بصورت FULL AOC فعالیت می
            نمایند ، موضوع فعالیت این شرکت مدل جدیدی از کسب و کار خواهد بود که
            با عنایت به پتانسیل های این شرکت از لحاظ مالی ، سابقه چندین ساله
            اعضای کلیدی این شرکت در فعالیت های چارتری و برخورداری از عمده ترین
            زیرساخت بسته های مسافرتی افق روشنی پیش روی این شرکت بوده و این امر
            وجه تمایز آشکار درخواست مطرح شده با فعالیت های جاری صنعت می باشد .
          </span>
        </div>
        <div className="desc-video">
          <video id="desc-video" width="100%" height="350">
            <source src="/static/videos/teaser.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <i
            className={`fas fa-${
              playing ? "pause pr-3" : "play"
            } text-light video-control`}
            style={{ display: playing ? "none" : "block" }}
            onClick={this.palyVideo.bind(this)}
          ></i>
        </div>
      </section>
    );
  }
}
