import React, { Component } from "react";
import Loading from "../components/Dashboard/Loading";
import Login from "../components/Dashboard/Login";
import cookie from "js-cookie";
import Index from "../components/Dashboard/Panel";
import axios from "axios";

import Head from "next/head";

import "../styles/dashboard/index.scss";

export class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, garanted: 0 };
  }
  
  componentDidMount() {
    const authToken = cookie.get("authtoken");
    if (authToken == undefined) {
      return this.setState({ loading: false, garanted: -1 });
    } else {
      axios
        .post("http://daliran3.disizali.now.sh/api/auth", { authToken })
        .then(({ data }) => {
          if (data == "unauthorized") {
            return cookie.remove("authtoken");
          }
          return this.setState({ garanted: 1, loading: false });
        });
    }
  }

  changeGaranty(garanted) {
    if (garanted == 1) {
      this.setState({ loading: false });
    }
    this.setState({ garanted });
  }

  render() {
    const { loading, garanted } = this.state;
    return (
      <main className="dashboard d-flex justify-content-center align-items-center">
        <Head>
          <title>دلیران - پنل مدیریت</title>
        </Head>
        {loading && <Loading />}
        {garanted == -1 && (
          <Login changeGaranty={this.changeGaranty.bind(this)} />
        )}
        {garanted == 1 && <Index />}
      </main>
    );
  }
}

export default dashboard;