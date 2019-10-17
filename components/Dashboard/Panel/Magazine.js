import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import axios from "axios";

export default class Magazine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enName: "",
      faName: "",
      body: "",
      image: "",
      magazines: [],
      images: []
    };
    this.bodyChangeHandler = this.bodyChangeHandler.bind(this);
  }

  componentDidMount() {
    const editor = document.querySelector("#editor p");
    editor.classList = [...editor.classList, "ql-align-right ql-direction-rtl"];

    axios.get("http://localhost:3001/magazine").then(({ data }) => {
      this.setState({ magazines: data });
    });
    axios.get("http://localhost:3001/images").then(({ data: images }) => {
      this.setState({ images, image: images[0] });
    });
  }

  modules() {
    return {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ header: 1 }, { header: 2 }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ],
        [{ direction: "rtl" }],
        [{ align: [] }],
        [{ color: [] }],
        ["image", "link"],
        [{ background: [] }],
        ["clean"]
      ]
    };
  }

  formats() {
    return [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "align",
      "link",
      "color",
      "background",
      "direction",
      "image"
    ];
  }

  sendMagazine() {
    const { faName, enName, body, magazines, image } = this.state;
    axios
      .post("http://localhost:3001/magazine", {
        faName,
        enName,
        body,
        image
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newMagazines = [
          { id: magazines.length + 1, faName, enName, image },
          ...magazines
        ];
        return this.setState({
          faName: "",
          enName: "",
          body: "",
          image: "",
          magazines: newMagazines
        });
      });
  }

  deleteMagazine(targetId) {
    const { magazines } = this.state;
    axios
      .delete("http://localhost:3001/magazine", { data: { targetId } })
      .then(({ data }) => {
        if (data == "no magazine") {
          return;
        }
        return this.setState({
          magazines: magazines.filter(item => item.id !== targetId)
        });
      });
  }
  faNameChangeHandler(e) {
    this.setState({ faName: e.target.value });
  }
  enNameChangeHandler(e) {
    this.setState({ enName: e.target.value });
  }
  bodyChangeHandler(value) {
    this.setState({ body: value });
  }
  imageChangeHandler(e) {
    this.setState({ image: e.target.value });
  }
  render() {
    const ReactQuill = require("react-quill");
    return (
      <div className="panel">
        <Container className="p-5 d-flex flex-column">
          <h2>افزودن مجله جدید</h2>
          <div className="d-flex justify-content-between">
            <input
              type="text"
              className="panel-editor my-2 w-50 ml-2"
              placeholder="نام فارسی"
              onChange={this.faNameChangeHandler.bind(this)}
              value={this.state.faName}
            />
            <input
              type="text"
              className="panel-editor my-2 w-50 mr-2"
              placeholder="نام انگلیسی"
              onChange={this.enNameChangeHandler.bind(this)}
              value={this.state.enName}
            />
          </div>
          <div id="editor">
            <ReactQuill
              theme="snow"
              className="panel-editor text-right"
              placeholder="متن مجله"
              value={this.state.body}
              modules={this.modules()}
              style={{ direction: "ltr" }}
              formats={this.formats()}
              onChange={this.bodyChangeHandler}
            />
          </div>
          <Row className="my-3">
            <Col
              sm={2}
              className="d-flex justify-content-center align-items-center"
            >
              <span>تصویر :</span>
            </Col>
            <Col sm={10}>
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
            </Col>
          </Row>
          <Button color="primary" onClick={this.sendMagazine.bind(this)}>
            ارسال
          </Button>
          <br />
          <hr className="bg-muted text-warning w-100 h-100" />
          <br />
          <Table responsive bordered striped className="text-right">
            <thead>
              <tr>
                <th width="40%">نام فارسی</th>
                <th width="40%">نام انگلیسی</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.magazines.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.faName}</td>
                    <td>{item.enName}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.deleteMagazine(item.id)}
                      >
                        <i className="fas fa-trash mx-2"></i>
                        <span className="mx-2">حذف</span>
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
