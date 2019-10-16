import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", body: "", pages: [] };
  }
  componentDidMount() {
    axios.get("http://localhost:3001/pages").then(({ data: pages }) => {
      this.setState({ pages });
    });
  }

  addPage() {
    const { name, body } = this.state;
    axios
      .post("http://localhost:3001/pages", {
        name,
        body
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newPages = [...pages, { id: data.id, name, body }];
        return this.setState({
          name: "",
          body: "",
          pages: newPages
        });
      });
  }

  deletePage(targetId) {
    const { pages } = this.state;
    axios
      .delete("http://localhost:3001/pages", { data: { targetId } })
      .then(({ data }) => {
        if (data == "no page") {
          return;
        }
        return this.setState({
          pages: pages.filter(item => item.id !== targetId)
        });
      });
  }

  editPage(targetId) {
    const name = document.getElementById(`name-${targetId}`).value;
    const body = document.getElementById(`body-${targetId}`).value;
    const data = { name, body };
    axios
      .put("http://localhost:3001/pages", { targetId, ...data })
      .then(({ data }) => {
        if (data == "no page") {
          return;
        } else if (data == "updated") {
          alert("ویرایش با موفقیت انجام شد");
        }
      });
  }
  nameChangeHandler(e) {
    this.setState({ name: e.target.value });
  }
  bodyChangeHandler(e) {
    this.setState({ body: e.target.value });
  }
  render() {
    return (
      <div className="panel-news">
        <Container className="p-5 d-flex flex-column">
          <h2>ویرایش صفحات</h2>
          <Table responsive bordered striped className="text-right my-2">
            <thead>
              <tr>
                <th width="20%">نام</th>
                <th width="60%">محتوا</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pages.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        className="editable-text"
                        defaultValue={item.title}
                        id={`name-${item.id}`}
                      />
                    </td>
                    <td>
                      <textarea
                        type="text"
                        className="text-left editable-text"
                        defaultValue={item.link}
                        id={`body-${item.id}`}
                      ></textarea>
                    </td>
                    <td className="d-flex">
                      <Button
                        color="danger"
                        className="d-flex mx-1"
                        onClick={() => this.deletePage(item.id)}
                      >
                        <i className="fas fa-trash mx-2"></i>
                        <span className="mx-2">حذف</span>
                      </Button>
                      <Button
                        color="warning"
                        className="d-flex mx-1"
                        onClick={() => this.editPage(item.id)}
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
                  <input
                    type="text"
                    className="panel-editor my-2 text-left h-50"
                    placeholder="نام"
                    onChange={this.nameChangeHandler.bind(this)}
                    value={this.state.name}
                  />
                  <span className="text-muted">/pages/</span>
                </td>
                <td>
                  <textarea
                    type="text"
                    className="panel-editor my-2 text-left"
                    style={{ direction: "ltr" }}
                    placeholder="link"
                    rows={2}
                    cols={30}
                    onChange={this.bodyChangeHandler.bind(this)}
                    value={this.state.body}
                  ></textarea>
                </td>
                <td>
                  <Button
                    color="primary"
                    className="my-2 w-100"
                    onClick={this.addPage.bind(this)}
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
