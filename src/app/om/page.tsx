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
      <section className="py-5 bg-light text-center">
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
              <h3 className="fw-semibold">Vi når dit andra inte kan</h3>
              <p>
                BRT Höjd AB är ett svenskt företag med passion för höjdarbete.
                Vi arbetar på svåråtkomliga platser där liftar och ställningar
                inte räcker till – och gör det med precision, säkerhet och
                erfarenhet.
              </p>
              <p>
                Våra tjänster sträcker sig från fasadrenovering och montage till
                inspektioner och specialuppdrag inom industrin.
              </p>
              <Button variant="dark" href="#kontakt">
                Kontakta oss
              </Button>
            </Col>

            <Col md={6}>
              <video
                ref={videoRef}
                src="/videos/explosion.mp4"
                className="w-100 rounded shadow"
                muted
                loop
                playsInline
                controls
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <h3 className="text-center mb-4">Varför välja oss?</h3>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div style={{ fontSize: "2.5rem" }}>🧗‍♂️</div>
              <h5 className="mt-3 fw-semibold">Erfarenhet</h5>
              <p className="text-muted">
                Många års erfarenhet av höghöjdsarbete och industriklättring.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <div style={{ fontSize: "2.5rem" }}>🛠️</div>
              <h5 className="mt-3 fw-semibold">Flexibilitet</h5>
              <p className="text-muted">
                Skräddarsydda lösningar för varje kunds behov och miljö.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <div style={{ fontSize: "2.5rem" }}>🦺</div>
              <h5 className="mt-3 fw-semibold">Säkerhet</h5>
              <p className="text-muted">
                Certifierad och försäkrad personal med säkerheten först.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
