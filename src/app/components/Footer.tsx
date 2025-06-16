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
              src="/workPictures/brt-loggo.png"
              alt="BRT Höjd AB logotyp"
              width={0}
              height={0}
              sizes="(min-width: 992px) 350px, 400px"
              className="mb-2 logo-img"
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
                  Vad är industriklättring?
                </a>
              </li>
              <li>
                <a href="#om-oss" className="text-dark text-decoration-none">
                  Referenser
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-dark text-decoration-none">
                  Om oss
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Kontakt</h5>
            <p className="small mb-1">E-post: elias@brthojd.se</p>
            <p className="small mb-0">Telefon: 0705797247</p>
            <p className="small mb-1">Adress: Krondikesvägen 78B Östersund</p>
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
