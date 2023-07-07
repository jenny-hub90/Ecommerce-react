import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.jpg";
const Header = () => {
  const navbarStyle = {
    // backgroundColor: "#E0EDF4",
    color: "#161616",
    fontFamily: "Caprasimo, cursive",
  };
  const logoStyle = {
    height: "50px",
    width: "60px",
    objectFit: "contain",
    borderRadius: "100%",
  };
  return (
    <header>
      <Navbar expand="md" collapseOnSelect style={navbarStyle}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="kasa" style={logoStyle} />
              Kasa
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
