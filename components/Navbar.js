import React from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import axios from "axios";

export default class NavbarClass extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navbar: []
    };
  }
  async componentDidMount() {
    const { data: navbar } = await axios.get("http://localhost:3001/navbar");
    this.setState({ navbar });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleSearchBar() {
    const searchBar = document.getElementById("search-bar");
    searchBar.style.opacity = searchBar.style.opacity == 1 ? 0 : 1;
  }

  search(e) {
    if (e.which == 13) {
      const searchBar = document.getElementById("search-bar");
      alert("جستجو برای " + searchBar.value + " نتیجه ای نداشت");
      searchBar.style.opacity = 0;
    }
  }
  render() {
    return (
      <div>
        <Navbar color="white shadow" light expand="lg" className="fixed-top">
          <Container>
            <NavbarBrand href="/">
              <img src="/static/images/logo.png" className="logo-image" />
              <span className="logo-text">هواپیمایی دلیران</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {this.state.navbar.map((item, index) => {
                  if (item.link == "/rss") {
                    return (
                      <NavItem key={index}>
                        <NavLink href={item.link}>{item.title}</NavLink>
                      </NavItem>
                    );
                  }
                  return (
                    <NavItem key={index}>
                      <Link href={item.link}>
                        <NavLink href={item.link}>{item.title}</NavLink>
                      </Link>
                    </NavItem>
                  );
                })}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
