import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

import "../styles/index.scss";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="layout">
        <Head>
          <title>هواپیمایی دلیران</title>
          <link rel="icon" href="/static/images/logo.png" type="image/png" />
        </Head>
        <Navbar />
        {this.props.children}
        <Footer />
      </main>
    );
  }
}

export default Layout;
