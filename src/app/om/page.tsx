"use client";

import { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    const video = videoRef.current;
    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <main className="bg-white text-dark">
      <section className="py-5 bg-light text-center fade-in delay-2">
        <Container>
          <h1 className="display-5 fw-bold">Om BRT Höjd AB</h1>
          <p className="lead text-muted">
            Specialister på industriklättring, bygg och höghöjdsteknik.
          </p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h3 className="fw-semibold fade-in delay-2-5">
                Vi når dit andra inte kan
              </h3>
              <p className="fade-in delay-3">
                Vi började med industriklättring 2023 och är därför ett ungt
                företag med en dröm om att ta våra hantverk till nya höjder –
                bokstavligen. Resan började för Elias som tonåring, snickrandes
                i garaget, där han insåg att han ville bli hantverkare på egna
                villkor. När han sedan klättrade sin första klippa väcktes en ny
                tanke: Hur kan man få spendera mer tid på höjd?
              </p>
              <p className="fade-in delay-3-5">
                Vi gillar att testa nya metoder och att ständigt utvecklas. Vi
                utbildar oss flera gånger om året och tränar regelbundet på
                kamraträddning. Vår vision är att vara en seriös
                totalentreprenör – och att hjälpa beställare förstå när rep är
                det mest kostnadseffektiva och säkra alternativet.
              </p>
              <Button
                variant="dark"
                className="fade-in delay-4"
                href="mailto:elias@brthojd.se?subject=Förfrågan&body=Hej! Jag är intresserad av industriklättring."
              >
                Skicka ett mail
              </Button>
            </Col>

            <Col md={6}>
              <Col md={6} className="text-center">
                <video
                  ref={videoRef}
                  src="/videos/explosion.mp4"
                  className="w-100 rounded shadow fade-in delay-4-5"
                  muted
                  loop
                  playsInline
                  controls
                />
              </Col>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h3 className="text-center mb-5">
            Här kommer en kort presentation av oss
          </h3>

          <Row className="mb-5 align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img
                src="/workPictures/elias-selfie.png"
                alt="Elias"
                className="img-fluid rounded shadow glow-border"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "550px",
                  objectFit: "cover",
                }}
              />
            </Col>

            <Col md={8}>
              <h4 className="fw-semibold">Elias</h4>
              <p className="mb-2">
                Snickare som gjort allt från betong, tak, kök, badrum och
                finsnickeri, plåtslageri, glasmästeri och därefter varierande
                klätteruppdrag.
              </p>
              <ul>
                <li>Maskinförare hjullastare & grävmaskin</li>
                <li>Motorsåg A+B</li>
                <li>IRATA L2 + SOFT L2</li>
                <li>Ytbehandlingsspecialist inom rostskydd</li>
              </ul>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img
                src="/workPictures/lina-climb.png"
                alt="Lina"
                className="img-fluid rounded shadow glow-border"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "550px",
                  objectFit: "cover",
                }}
              />
            </Col>

            <Col md={8}>
              <h4 className="fw-semibold">Lina</h4>
              <p className="mb-2">
                Murare som både sätter badrum, murar skorstenar och putsar allt
                från fasader till spruckna betongsilos.
              </p>
              <ul>
                <li>SOFT L1</li>
              </ul>
            </Col>
          </Row>

          <div className="mt-5">
            <h5 className="fw-semibold text-center">
              Självklart har vi båda två även
            </h5>
            <ul className="text-center list-unstyled">
              <li>ID06 · SSG · Heta arbeten · Tjänstbarhetsintyg</li>
              <li>
                Mobila Arbetsplattformar · Härdplastutbildning · Kompetent
                person
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
