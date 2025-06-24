"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="modern-footer mt-4 pt-3 pb-0">
      <Container>
        <Row className="align-items-start text-white">
          <Col md={4} className="mb-4">
            <Image
              src="/workPictures/brt-loggo.png"
              alt="BRT Höjd AB logotyp"
              width={0}
              height={0}
              sizes="(min-width: 992px) 350px, 400px"
              className="mb-3 logo-img"
            />
            <p className="footer-text">
              Specialister på industriklättring, byggtjänster och fallskydd. Vi
              når där andra inte räcker till.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Länkar</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/industriklattring" className="footer-link">
                  Vad är industriklättring?
                </a>
              </li>
              <li>
                <a href="/referenser" className="footer-link">
                  Referenser
                </a>
              </li>
              <li>
                <a href="/om" className="footer-link">
                  Om oss
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5 className="footer-heading">Kontakt</h5>
            <p className="footer-text mb-1">E-post: elias@brthojd.se</p>
            <p className="footer-text mb-1">Telefon: 070 579 72 47</p>
            <p className="footer-text mb-1">
              Adress: Krondikesvägen 78B Östersund
            </p>
          </Col>
        </Row>

        <hr className="border-light opacity-25" />

        <p className="text-center text-white-50 small mt-2 mb-0">
          &copy; {new Date().getFullYear()} BRT Höjd AB. Alla rättigheter
          förbehållna.
        </p>
      </Container>
    </footer>
  );
}
