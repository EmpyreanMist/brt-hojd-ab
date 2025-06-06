"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import "../globals.css";

export default function Header() {
  return (
    <Navbar
      key="lg"
      expand="lg"
      bg="white"
      variant="light"
      className="px-3 py-3 shadow-sm"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
            src="/loggo.jpg"
            alt="BRT Höjd AB logotyp"
            width={0}
            height={0}
            sizes="(min-width: 992px) 350px, 200px"
            priority
            className="d-inline-block align-top logo-img"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          className="border-0"
        />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header
            closeButton
            className="bg-white text-dark"
            closeVariant="black"
          >
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Meny
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="bg-white text-dark">
            <Nav className="justify-content-end flex-grow-1 pe-3 gap-4">
              <Nav.Link className="text-dark fw-semibold" href="#tjanster">
                Vad är industriklättring?
              </Nav.Link>
              <Nav.Link className="text-dark fw-semibold" href="#om-oss">
                Referenser
              </Nav.Link>
              <Nav.Link className="text-dark fw-semibold" href="/about">
                Om oss
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
