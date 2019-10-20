import React, { Component } from "react";
import {
  Container,
  Table,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import axios from "axios";

export class Datas extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.editData = this.editData.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:3001/data");
    this.setState({ data });
  }

  editData(targetId) {
    const body = document.getElementById(`data-${targetId}`).value;

    axios
      .put("http://localhost:3001/data", { targetId, body })
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
      <div>
        <Container className="panel p-5 d-flex flex-column">
          <h2>متن ها</h2>
          <Table responsive bordered striped className="text-right">
            <thead>
              <tr>
                <th width="20%">شناسه</th>
                <th width="50%">متن</th>
                <th width="20%">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                      <textarea
                        defaultValue={item.body}
                        className="panel-editor w-100"
                        id={`data-${item.id}`}
                      />
                    </td>
                    <td>
                      <Button
                        color="warning"
                        onClick={() => this.editData(item.id)}
                      >
                        <i className="fas fa-pen mx-2"></i>
                        <span className="mx-2">ویرایش</span>
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

export default Datas;
