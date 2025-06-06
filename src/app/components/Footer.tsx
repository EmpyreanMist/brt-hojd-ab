"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-dark mt-5 pt-4 pb-3 border-top border-black">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="mb-3">
            <Image
              src="/loggo.jpg" // Bilden måste ligga i public/
              alt="BRT Höjd AB logotyp"
              width={300}
              height={60}
              className="mb-2"
            />
            <p className="small">
              Specialister på industriklättring, byggtjänster och fallskydd. Vi
              når där andra inte räcker till.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Länkar</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#tjanster" className="text-dark text-decoration-none">
                  Tjänster
                </a>
              </li>
              <li>
                <a href="#om-oss" className="text-dark text-decoration-none">
                  Om oss
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-dark text-decoration-none">
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
