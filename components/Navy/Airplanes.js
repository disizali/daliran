import React from "react";
import navies from "../../static/data/navies.json";
import { Container } from "reactstrap";
export default class Airplanes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  handleNavyChange() {
    const { selected } = this.state;
    const newSelected = selected == 0 ? 1 : 0;
    this.setState({ selected: newSelected });

    const name = document.getElementById("navy-airplane-name");
    name.style.opacity = 0;
    name.style.letterSpacing = `10px`;

    const number = document.getElementById("navy-airplane-number");
    const newNumber = navies[newSelected].number;
    const numberChanger = setInterval(() => {
      if (Number(number.innerHTML) < newNumber) {
        number.innerHTML = (Number(number.innerHTML) + 3).toString();
      }
      if (Number(number.innerHTML) > newNumber) {
        number.innerHTML = (Number(number.innerHTML) - 3).toString();
      }

      if (Number(number.innerHTML) == newNumber) {
        clearInterval(numberChanger);
        name.innerHTML = `${navies[newSelected].name} ${navies[newSelected].number}`;
        name.style.opacity = 1;
        name.style.letterSpacing = `5px`;
      }
    }, 2);
  }

  render() {
    const { selected } = this.state;

    return (
      <section
        className="navy-airplanes d-flex justify-content-center text-center flex-column"
        id="navy-airplanes"
      >
        <h1
          className="navy-airplane-name d-inline mt-5"
          id="navy-airplane-name"
        >
          AIRBUS 320
        </h1>
        <div className="circle-1 d-flex position-relative justify-content-center align-items-center mb-5">
          <div className="circle-2 d-flex justify-content-center align-items-center">
            <div className="circle-3 d-flex justify-content-center align-items-center">
              <span
                className="navy-airplane-number d-flex"
                id="navy-airplane-number"
              >
                320
              </span>
            </div>
          </div>
        </div>
        <img
          src="/static/images/airbus320.png"
          className={
            selected == 0 ? "navy-image-selected" : "navy-image-1-disable"
          }
          id="navy-image-1"
        />
        <img
          src="/static/images/boeing737.png"
          className={
            selected == 1 ? "navy-image-selected" : "navy-image-2-disable"
          }
          id="navy-image-2"
        />
        <div className="navy-changer-buttons d-flex justify-content-around">
          <button
            className="navy-changer-left"
            style={{ opacity: selected == 0 ? "0" : "1" }}
            disabled={selected == 0 ? true : false}
            onClick={this.handleNavyChange.bind(this)}
          >
            &lt;
          </button>
          <button
            className="navy-changer-right"
            style={{ opacity: selected == 1 ? "0" : "1" }}
            disabled={selected == 1 ? true : false}
            onClick={this.handleNavyChange.bind(this)}
          >
            &gt;
          </button>
        </div>
        {/* <button
          className="navy-change-right text-light"
          style={{ opacity: selected == 1 ? "0" : "1" }}
          onClick={this.handleNavyChange.bind(this)}
        >
          &gt;
        </button> */}
        {/* <div className="navy-images">
          
      </div>*/}
      </section>
    );
  }
}
