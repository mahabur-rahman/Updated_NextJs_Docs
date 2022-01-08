// react bootstrap
import { Container, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header id="headerId">
        <Navbar expand="lg">
          <Container>
            <Link href="/">
              <a>
                <Navbar.Brand>Next Js</Navbar.Brand>
              </a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
                <Link href="/blog">
                  <a className="nav-link"> Blog</a>
                </Link>
                <Link href="/product">
                  <a className="nav-link"> Product</a>
                </Link>
                <Link href="/service">
                  <a className="nav-link"> Services</a>
                </Link>
                <Link href="/contact">
                  <a className="nav-link"> Contact</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
