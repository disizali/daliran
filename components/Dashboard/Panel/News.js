import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", image: "", news: [] };
    this.bodyChangeHandler = this.bodyChangeHandler.bind(this);

    this.toolbar = [
      { size: ["small", false, "large", "huge"] }[{ header: [1, 2, false] }]
    ];
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
      "direction",
      "image"
    ];
  }

  componentDidMount() {
    const editor = document.querySelector("#editor p");
    editor.classList = [...editor.classList, "ql-align-right ql-direction-rtl"];
    // .classList = ();
    // axios.get("http://daliran.disizali.now.sh/api/news").then(({ data }) => {
    //   this.setState({ news: data });
    // });
  }

  sendNews() {
    alert(this.state.body);
    // const { title, body, image, news } = this.state;

    // axios
    //   .post("http://localhost:3000/api/news", {
    //     title,
    //     body,
    //     image
    //   })
    //   .then(({ data }) => {
    //     if (data == "wrong data") {
    //       return;
    //     }
    //     const newNews = [{ id: news.length + 1, title, body }, ...news];
    //     return this.setState({ title: "", body: "", news: newNews });
    //   });
  }

  deleteNews(targetId) {
    const { news } = this.state;
    axios
      .delete("http://localhost:3000/api/news", {
        data: { targetId }
      })
      .then(({ data }) => {
        if (data == "no news") {
          return;
        }
        return this.setState({
          news: news.filter(item => item.id !== targetId)
        });
      });
  }
  titleChangeHandler(e) {
    this.setState({ title: e.target.value });
  }
  bodyChangeHandler(value) {
    this.setState({ body: value });
  }
  imageChangeHandler(e) {
    this.setState({ image: e.target.value });
  }
  render() {
    const ReactQuill = require("react-quill"); // ES6
    return (
      <div className="panel-news">
        <Container className="p-5 d-flex flex-column">
          <h2>افزودن خبر جدید</h2>
          <input
            type="text"
            className="panel-editor my-2"
            placeholder="سربرگ"
            onChange={this.titleChangeHandler.bind(this)}
            value={this.state.title}
          />
          <div id="editor">
            <ReactQuill
              theme="snow"
              className="panel-editor text-right"
              placeholder="متن خبر"
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
              <input
                type="text"
                className="panel-editor w-100"
                placeholder="لینک تصویر"
                onChange={this.imageChangeHandler.bind(this)}
                value={this.state.image}
              />
            </Col>
          </Row>
          <Button color="primary" onClick={this.sendNews.bind(this)}>
            ارسال
          </Button>
          <br />
          <hr className="bg-muted text-warning w-100 h-100" />
          <br />
          <Table responsive bordered striped className="text-right">
            <thead>
              <tr>
                <th width="80%">سربرگ</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.news.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.deleteNews(item.id)}
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
