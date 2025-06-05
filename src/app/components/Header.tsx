"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  return (
    <Navbar key="lg" expand="lg" bg="dark" variant="dark" className="px-3 py-2">
      <Container fluid>
        <Navbar.Brand href="#">BRT Höjd AB</Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />

        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header
            closeButton
            className="bg-dark text-white"
            closeVariant="white"
          >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Meny
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-dark text-white">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="text-white" href="#tjanster">
                Vad är industriklättring?
              </Nav.Link>
              <Nav.Link className="text-white" href="#om-oss">
                Referenser
              </Nav.Link>
              <Nav.Link className="text-white" href="#kontakt">
                Om oss
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
