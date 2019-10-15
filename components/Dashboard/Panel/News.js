import React, { Component } from "react";
import { Container, Button, Table, Row, Col } from "reactstrap";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "", image: "", news: [] };
  }

  componentDidMount() {
    axios.get("http://daliran3.disizali.new.sh/api/news").then(({ data }) => {
      this.setState({ news: data });
    });
  }

  sendNews() {
    const { title, body, image, news } = this.state;
    axios
      .post("http://daliran3.disizali.new.sh/api/news", {
        title,
        body,
        image
      })
      .then(({ data }) => {
        if (data == "wrong data") {
          return;
        }
        const newNews = [{ id: news.length + 1, title, body }, ...news];
        return this.setState({ title: "", body: "", news: newNews });
      });
  }

  deleteNews(targetId) {
    const { news } = this.state;
    axios
      .delete("http://daliran3.disizali.new.sh/api/news", { data: { targetId } })
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
  bodyChangeHandler(e) {
    this.setState({ body: e.target.value });
  }
  imageChangeHandler(e) {
    this.setState({ image: e.target.value });
  }
  render() {
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
          <textarea
            type="text"
            className="panel-editor my-2"
            placeholder="متن خبر"
            onChange={this.bodyChangeHandler.bind(this)}
            value={this.state.body}
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
