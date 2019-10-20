import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import Link from "next/link";
export default class SliderClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var sliderSettings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
      <section className="slider text-center">
        <Container>
          <Slider {...sliderSettings}>
            {this.props.slides.map((item, index) => {
              return (
                <div key={index} className="slide-item">
                  <div className="slide-container">
                    <Link href={item.link}>
                      <a>
                        <img src={`/static/uploads/images/${item.image}`} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
            <div></div>
          </Slider>
        </Container>
      </section>
    );
  }
}
