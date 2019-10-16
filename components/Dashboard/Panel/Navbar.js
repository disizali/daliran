import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", link: "/", order: "", navbar: [] };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/navbar").then(({ data: navbar }) => {
      this.setState({ navbar, order: navbar.length + 1 });
    });
  }

  addNavbar() {
    const { title, link, order, navbar } = this.state;
    axios
      .post("http://localhost:3001/navbar", {
        title,
        link,
        order
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newNavbar = [...navbar, { id: data.id, title, link, order }];
        return this.setState({
          title: "",
          link: "",
          order: "",
          navbar: newNavbar
        });
      });
  }

  deleteNav(targetId) {
    const { navbar } = this.state;
    axios
      .delete("http://localhost:3001/navbar", { data: { targetId } })
      .then(({ data }) => {
        if (data == "no navbar") {
          return;
        }
        return this.setState({
          navbar: navbar.filter(item => item.id !== targetId)
        });
      });
  }

  editNav(targetId) {
    const title = document.getElementById(`title-${targetId}`).value;
    const link = document.getElementById(`link-${targetId}`).value;
    const order = document.getElementById(`order-${targetId}`).value;
    const data = { title, link, order };
    axios
      .put("http://localhost:3001/navbar", { targetId, ...data })
      .then(({ data }) => {
        if (data == "no navbar") {
          return;
        } else if (data == "updated") {
          alert("ویرایش با موفقیت انجام شد");
        }
      });
  }
  titleChangeHandler(e) {
    this.setState({ title: e.target.value });
  }
  linkChangeHandler(e) {
    this.setState({ link: e.target.value });
  }
  orderChangeHandler(e) {
    this.setState({ order: e.target.value });
  }
  render() {
    return (
      <div className="panel-news">
        <Container className="p-5 d-flex flex-column">
          <h2>ویرایش منوی نویگیشن</h2>
          <Table responsive bordered striped className="text-right my-2">
            <thead>
              <tr>
                <th width="30%">نام</th>
                <th width="35%">لینک</th>
                <th width="15%">اولیت</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.navbar.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        className="editable-text"
                        defaultValue={item.title}
                        id={`title-${item.id}`}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="text-left editable-text"
                        defaultValue={item.link}
                        id={`link-${item.id}`}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="editable-text"
                        defaultValue={item.order}
                        id={`order-${item.id}`}
                      />
                    </td>
                    <td className="d-flex">
                      <Button
                        color="danger"
                        className="d-flex mx-1"
                        onClick={() => this.deleteNav(item.id)}
                      >
                        <i className="fas fa-trash mx-2"></i>
                        <span className="mx-2">حذف</span>
                      </Button>
                      <Button
                        color="warning"
                        className="d-flex mx-1"
                        onClick={() => this.editNav(item.id)}
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
                    className="panel-editor my-2"
                    placeholder="نام"
                    onChange={this.titleChangeHandler.bind(this)}
                    value={this.state.title}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="panel-editor my-2 text-left"
                    style={{ direction: "ltr" }}
                    placeholder="link"
                    onChange={this.linkChangeHandler.bind(this)}
                    value={this.state.link}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="panel-editor w-100 my-2"
                    placeholder="اولیت"
                    onChange={this.orderChangeHandler.bind(this)}
                    value={this.state.order}
                  />
                </td>
                <td>
                  <Button
                    color="primary"
                    className="my-2 w-100"
                    onClick={this.addNavbar.bind(this)}
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
