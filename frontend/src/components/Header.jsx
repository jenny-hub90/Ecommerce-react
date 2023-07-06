import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
    const navbarStyle = {
        backgroundColor: '#E0EDF4',
        color: '#161616',
        fontFamily: 'Kalam, cursive',
    }
  return (
  <header>
      <Navbar  expand="lg" collapseOnSelect style={navbarStyle}>
        <Container>
          <Navbar.Brand href="/">Kasa</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/cart"><FaShoppingCart/> Cart</Nav.Link>
                <Nav.Link href="/login"><FaUser/> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
