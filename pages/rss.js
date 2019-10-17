import React, { Component } from "react";
import Layout from "../components/Layout";
import { Row, Col , Container} from "reactstrap";
import https from "https";
import axios from "axios";
import cheerio from "cheerio";

export class Rss extends Component {
  static async getInitialProps(context) {
    const agent = new https.Agent({
      rejectUnauthorized: false
    });
    console.log("got here")
    const { data } = await axios.get("https://www.cao.ir/news/organizatioal", {
      httpsAgent: agent
    });
    const $ = cheerio.load(data);
    const imageContents = $(
      'div[class="content2"] div[class="pic"] a img'
    ).get();
    const images = imageContents.map((item, index) => {
      return `https://www.cao.ir/${item.attribs.src}`;
    });

    const titleContents = $('div[class="content2"] div[class="titr"] a').get();
    const titles = titleContents.map((item, index) => {
      return item.children[0].data;
    });

    const bodyContents = $('div[class="content2"] div[class="content"]').get();
    const bodies = bodyContents.map((item, index) => {
      return item.children[0].data;
    });

    const rss = images.map((item, index) => {
      return {
        title: titles[index],
        body: bodies[index],
        image: item
      };
    });
    return { rss };
  }
  render() {
    return (
      <Layout>
        <Container className="news rtl" style={{ marginBottom: `40px` }}>
          {this.props.rss.map((item, index) => {
            return (
              <div className="shadow-lg bg-white rounded mt-4 mb-4" key={index}>
                <Row>
                  <Col
                    sm="12"
                    md="12"
                    lg="3"
                    className="d-flex news-image justify-content-end justify-content-md-center p-md-0"
                  >
                    <img
                      src={item.image}
                      className="img-thumbnail shadow mr-4 rounded w-100"
                    />
                  </Col>
                  <Col className="text-right" sm="12" md="12" lg="9">
                    <h5 className="p-3 rtl"> {item.title}</h5>
                    <p className="text-secondary pl-4 pr-4 news-body">
                      {item.body}
                    </p>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Container>
      </Layout>
    );
  }
}

export default Rss;
