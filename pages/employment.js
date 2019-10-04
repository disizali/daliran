import React from "react";
import Layout from "../components/Layout";
import { Container } from "reactstrap";
import Levels from "../components/Employment/Levels";
import Personal from "../components/Employment/Personal";
import Educational from "../components/Employment/Educational";
import Jobs from "../components/Employment/Jobs";
import Selfabilities from "../components/Employment/Selfabilities";
import Requests from "../components/Employment/Requests";
import Referral from "../components/Employment/Referral";
import Insurance from "../components/Employment/Public";
import Documents from "../components/Employment/Documents";
import Confirm from "../components/Employment/Confirm";
export default class Employment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { level: 1, information: { userName: "", userFamily: "" } };
  }
  getForm(level, goToLevel) {
    switch (level) {
      case 1:
        return (
          <Personal
            goToLevel={goToLevel}
            information={this.state.information}
            handleChanges={this.handleChanges.bind(this)}
          />
        );
      case 2:
        return (
          <Educational
            goToLevel={goToLevel}
            information={this.state.information}
          />
        );
      case 3:
        return (
          <Jobs goToLevel={goToLevel} information={this.state.information} />
        );
      case 4:
        return (
          <Selfabilities
            goToLevel={goToLevel}
            information={this.state.information}
          />
        );
      case 5:
        return (
          <Requests
            goToLevel={goToLevel}
            information={this.state.information}
          />
        );
      case 6:
        return (
          <Referral
            goToLevel={goToLevel}
            information={this.state.information}
          />
        );
      case 7:
        return (
          <Insurance
            goToLevel={goToLevel}
            information={this.state.information}
          />
        );
      case 8:
        return (
          <Documents
            goToLevel={goToLevel}
            information={this.state.information}
          />
        );
      case 9:
        return (
          <Confirm goToLevel={goToLevel} information={this.state.information} />
        );
    }
  }
  goToLevel(level) {
    this.setState({ level });
  }
  handleChanges(e) {
    if (e.target.id == "user-name") {
      this.setState({
        information: { ...this.state.information, userName: e.target.value }
      });
    }
    if (e.target.id == "user-family") {
      this.setState({
        information: { ...this.state.information, userFamily: e.target.value }
      });
    }
  }
  render() {
    const { level } = this.state;
    return (
      <Layout>
        <Container className="employment" fluid>
          <Container>
            <Levels level={level} goToLevel={this.goToLevel.bind(this)} />
          </Container>
          <Container className="employment-form" fluid>
            <Container>
              {this.getForm(level, this.goToLevel.bind(this))}
            </Container>
          </Container>
        </Container>
      </Layout>
    );
  }
}