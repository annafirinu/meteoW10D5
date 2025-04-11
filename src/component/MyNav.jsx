import { Nav, Navbar, Container } from "react-bootstrap";

const MyNav = function () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">EpiMeteo!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Previsioni</Nav.Link>
            <Nav.Link href="#pricing">Regioni</Nav.Link>
            <Nav.Link href="#pricing">Notizie</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
