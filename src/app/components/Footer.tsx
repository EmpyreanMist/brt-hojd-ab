// src/components/Footer.tsx
"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>BRT Höjd AB</h5>
            <p className="small">
              Specialister på industriklättring, byggtjänster och fallskydd. Vi
              når där andra inte räcker till.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Länkar</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#tjanster" className="text-light text-decoration-none">
                  Tjänster
                </a>
              </li>
              <li>
                <a href="#om-oss" className="text-light text-decoration-none">
                  Om oss
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-light text-decoration-none">
                  Kontakt
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Kontakt</h5>
            <p className="small mb-1">E-post: hejhej@tjena.com</p>
            <p className="small mb-0">Telefon: 12345678910</p>
          </Col>
        </Row>

        <hr className="border-top border-secondary mt-4" />

        <p className="text-center text-secondary small mb-0">
          &copy; {new Date().getFullYear()} BRT Höjd AB. Alla rättigheter
          förbehållna.
        </p>
      </Container>
    </footer>
  );
}
