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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
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
                  console.log(item);
                  return (
                    <NavItem key={index}>
                      <Link href={item.link}>
                        <NavLink href={item.link}>{item.title}</NavLink>
                      </Link>
                    </NavItem>
                  );
                })}

                {/*  <NavItem>
                  <Link href="/">
                    <NavLink href="/">صفحه اصلی</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/about">
                    <NavLink href="/about">درباره ما</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/magazine">
                    <NavLink href="/magazine">مجله گردشگری</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/navy">
                    <NavLink href="/navy">ناوگان هوایی</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/employment">
                    <NavLink href="/employment">فرم همکاری</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/news">
                    <NavLink href="/news">اخبار</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/contact">
                    <NavLink href="/contact">تماس با ما</NavLink>
                  </Link>
                </NavItem> */}

                {/* <NavItem>
                  <NavLink>
                    <div
                      className="search-bar p-1 ml-3"
                      onClick={this.toggleSearchBar.bind(this)}
                    >
                      <i className="fas fa-search search-icon text-white"></i>
                    </div>
                    <input
                      type="text"
                      className="search-box"
                      placeholder="جستجو"
                      id="search-bar"
                      onKeyPress={this.search}
                    />
                  </NavLink>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
