import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = { enName: "", faName: "", image: "", magazines: [] };
  }

  componentDidMount() {
    axios.get("http://daliran3.disizali.new.sh/api/magazine").then(({ data }) => {
      this.setState({ magazines: data });
    });
  }

  sendMagazine() {
    const { faName, enName, magazines, image } = this.state;
    axios
      .post("http://daliran3.disizali.new.sh/api/magazine", {
        faName,
        enName,
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
          image: "",
          magazines: newMagazines
        });
      });
  }

  deleteMagazine(targetId) {
    const { magazines } = this.state;
    axios
      .delete("http://daliran3.disizali.new.sh/api/magazine", { data: { targetId } })
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
  imageChangeHandler(e) {
    this.setState({ image: e.target.value });
  }
  render() {
    return (
      <div className="panel-news">
        <Container className="p-5 d-flex flex-column">
          <h2>افزودن مجله جدید</h2>
          <input
            type="text"
            className="panel-editor my-2"
            placeholder="نام انگلیسی"
            onChange={this.enNameChangeHandler.bind(this)}
            value={this.state.enName}
          />
          <textarea
            type="text"
            className="panel-editor my-2"
            placeholder="نام فارسی"
            onChange={this.faNameChangeHandler.bind(this)}
            value={this.state.faName}
          ></textarea>
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
          <Button color="primary" onClick={this.sendMagazine.bind(this)}>
            ارسال
          </Button>
          <br />
          <hr className="bg-muted text-warning w-100 h-100" />
          <br />
          <Table responsive bordered striped className="text-right">
            <thead>
              <tr>
                <th width="40%">نام انگلیسی</th>
                <th width="40%">نام فارسی</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.magazines.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.enName}</td>
                    <td>{item.faName}</td>
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
