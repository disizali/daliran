import React from "react";
import Layout from "../../components/Layout";
import { Container } from "reactstrap";
import axios from "axios";

class City extends React.Component {
  static async getInitialProps(context) {
    const {
      query: { name }
    } = context;
    const { data } = await axios.get(
      `http://localhost:3000/api/magazine/${name}`
    );
    return { data };
  }

  constructor(props) {
    super(props);
  }

  render() {
    const magazine = this.props.data;
    return (
      <Layout page="article">
        <Container className="text-center magazine-article">
          <img
            src={`/static/images/${magazine.image}`}
            className="magazine-cover"
          />
          <h1 className="m-4">{magazine.fa_name}</h1>
          <hr />
          <div
            className="text-muted text-right"
            dangerouslySetInnerHTML={{ __html: this.props.data.body }}
          ></div>
          <hr />
          <h4 className="mb-5">به اشتراک گذاری </h4>
          <div class="magazine-share mb-5">
            <a href="http://facebook.com">
              <span>Facebook</span>
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="http://twitter.com">
              <span>Twitter</span>
              <i class="fab fa-twitter"></i>
            </a>
            <a href="http://google.com">
              <span>Google+</span>
              <i class="fab fa-google"></i>
            </a>
            <a href="http://github.com">
              <span>Github</span>
              <i class="fab fa-github"></i>
            </a>
            <a href="http://dribbble.com">
              <span>Dribbble</span>
              <i class="fab fa-dribbble"></i>
            </a>
            <a href="http://codepen.io">
              <span>CodePen</span>
              <i class="fab fa-codepen"></i>
            </a>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default City;
