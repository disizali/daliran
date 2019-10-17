import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import axios from "axios";
import Link from "next/link"

export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = { link: "", body: "", pages: [] };
    this.bodyChangeHandler = this.bodyChangeHandler.bind(this);
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
    axios.get("http://localhost:3001/pages").then(({ data }) => {
      this.setState({ pages: data });
    });
  }

  sendPage() {
    const { name, body, pages } = this.state;
    axios
      .post("http://localhost:3001/pages", {
        name,
        body
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newPages = [{ id: data.id, name, body }, ...pages];
        return this.setState({ name: "", body: "", pages: newPages });
      });
  }

  deletePage(targetId) {
    const { pages } = this.state;
    axios
      .delete("http://localhost:3001/pages", {
        data: { targetId }
      })
      .then(({ data }) => {
        if (data == "no pages") {
          return;
        }
        return this.setState({
          pages: pages.filter(item => item.id !== targetId)
        });
      });
  }
  nameChangeHandler(e) {
    this.setState({ name: e.target.value });
  }
  bodyChangeHandler(value) {
    this.setState({ body: value });
  }
  render() {
    const ReactQuill = require("react-quill"); // ES6
    return (
      <div className="panel">
        <Container className="p-5 d-flex flex-column">
          <h2>افزودن صفحه جدید</h2>
          <div>
            <input
              type="text"
              className="panel-editor my-2 ml-2 text-left"
              style={{ direction: "ltr" }}
              placeholder="لینک"
              onChange={this.nameChangeHandler.bind(this)}
              value={this.state.name}
            />
            <span className="mr-2">/pages/</span>
          </div>
          <div id="editor">
            <ReactQuill
              theme="snow"
              className="panel-editor text-right"
              placeholder="محتوا"
              value={this.state.body}
              modules={this.modules()}
              style={{ direction: "ltr" }}
              formats={this.formats()}
              onChange={this.bodyChangeHandler}
            />
          </div>
          <Button color="primary" onClick={this.sendPage.bind(this)}>
            ارسال
          </Button>
          <br />
          <hr className="bg-muted text-warning w-100 h-100" />
          <br />
          <Table responsive bordered striped className="text-right">
            <thead>
              <tr>
                <th width="80%">لینک</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pages.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Link href={`/pages/${item.name}`}>
                        <a>{item.name}</a>
                      </Link>
                    </td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => this.deletePage(item.id)}
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
