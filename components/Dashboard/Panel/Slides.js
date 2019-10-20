import React, { Component } from "react";
import { Container, Table, Button } from "reactstrap";
import axios from "axios";
export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      images: [],
      title: "",
      description: "",
      link: "",
      image: ""
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/slides").then(({ data: slides }) => {
      this.setState({ slides });
    });

    axios.get("http://localhost:3001/images").then(({ data: images }) => {
      this.setState({ images, image: images[0] });
    });
  }

  titleChangeHandler(e) {
    this.setState({ title: e.target.value });
  }

  descriptionChangeHandler(e) {
    this.setState({ description: e.target.value });
  }

  linkChangeHandler(e) {
    this.setState({ link: e.target.value });
  }

  imageChangeHandler(e) {
    this.setState({ image: e.target.value });
  }
  addSlide() {
    const { image, title, description, link } = this.state;
    axios
      .post("http://localhost:3001/slides", {
        image,
        title,
        description,
        link
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newSlides = [
          ...this.state.slides,
          { id: data.id, image, title, description, link }
        ];
        this.setState({
          image: this.state.images[0],
          title: "",
          description: "",
          link: "",
          slides: newSlides
        });
      });
  }

  deleteSlide(id) {
    axios
      .delete("http://localhost:3001/slides", { data: { id } })
      .then(({ data }) => {
        if (data == "no setting") {
          return;
        } else {
          alert("آیتم حذف شد");
          this.setState({
            slides: this.state.slides.filter(item => item.id != id)
          });
        }
      });
  }

  editSlide(id) {
    const image = document.getElementById(`image-${id}`).value;
    const title = document.getElementById(`title-${id}`).value;
    const description = document.getElementById(`description-${id}`).value;
    const link = document.getElementById(`link-${id}`).value;
    axios
      .put("http://localhost:3001/settings", {
        id,
        image,
        title,
        description,
        link
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        } else if (data == "updated") {
          alert("ویرایش با موفقیت انجام شد");
        }
      });
  }
  render() {
    return (
      <div className="panel">
        <Container className="p-5 d-flex flex-column">
          <h2>ویرایش اسلایدر</h2>
          <Table responsive bordered striped className="text-right my-2">
            <thead>
              <tr>
                <th>تصویر</th>
                <th>تیتر</th>
                <th>توضیحات</th>
                <th>لینک</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.slides.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <select
                        className="editable-text w-100 ltr"
                        defaultValue={item.image}
                        id={`image-${item.id}`}
                      >
                        {this.state.images.map((item, index) => {
                          return (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="text-left editable-text"
                        defaultValue={item.title}
                        id={`title-${item.id}`}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="editable-text"
                        defaultValue={item.description}
                        id={`description-${item.id}`}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="editable-text"
                        defaultValue={item.link}
                        id={`link-${item.id}`}
                      />
                    </td>
                    <td className="d-flex">
                      <Button
                        color="danger"
                        className="w-100"
                        onClick={() => this.deleteSlide(item.id)}
                      >
                        <i className="fas fa-trash mx-1"></i>
                        <span className="mx-2">حذف</span>
                      </Button>
                      <Button
                        color="warning"
                        className="d-flex mx-1"
                        onClick={() => this.editSlide(item.id)}
                      >
                        <i className="fas fa-pen mx-2"></i>
                        <span className="mx-2">ویرایش</span>
                      </Button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <select
                    className="w-100 panel-editor ltr"
                    value={this.state.image}
                    onChange={this.imageChangeHandler.bind(this)}
                  >
                    {this.state.images.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    className="panel-editor w-100 "
                    placeholder="تیتر"
                    onChange={this.titleChangeHandler.bind(this)}
                    value={this.state.title}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="panel-editor w-100 "
                    placeholder="توضیحات"
                    onChange={this.descriptionChangeHandler.bind(this)}
                    value={this.state.description}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="panel-editor text-left"
                    style={{ direction: "ltr" }}
                    placeholder="link"
                    onChange={this.linkChangeHandler.bind(this)}
                    value={this.state.link}
                  />
                </td>
                <td className="d-flex">
                  <Button
                    color="primary"
                    className="m-2 w-100"
                    onClick={this.addSlide.bind(this)}
                  >
                    <i className="fas fa-plus mx-2"></i>
                    <span className="mx-2">افزودن</span>
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default Settings;
