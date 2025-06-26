import Carousel from "./components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import SplashIntro from "./components/SplashIntro";

export default function Home() {
  return (
    <SplashIntro>
      <main className="bg-white text-dark">
        <section className="text-center py-5 bg-light">
          <Container>
            <h1 className="display-4 fw-bold fade-in mb-3">
              Når du inte? Det gör vi!
            </h1>
            <p className="lead">
              Experter på industriklättring & bygg på höjd.
            </p>
          </Container>
        </section>

        <section>
          <Carousel />
        </section>

        <section className="py-5 bg-light">
          <Container>
            <Row className="text-center justify-content-center">
              <Col md={3} className="mb-4">
                <div className="feature-icon">🧗‍♂️</div>
                <h5 className="mt-2 fw-semibold">Industriklättring</h5>
                <p className="small text-muted">Vi når där andra inte kan.</p>
              </Col>

              <Col md={3} className="mb-4">
                <div>🛠️</div>
                <h5 className="mt-2">Bygg & montage</h5>
                <p className="small">Professionella lösningar på höjd.</p>
              </Col>
              <Col md={3} className="mb-4">
                <div>🦺</div>
                <h5 className="mt-2">Säkerhet</h5>
                <p className="small">Certifierade och försäkrade.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h2>Om BRT Höjd AB</h2>
                <p>
                  Vi är ett svenskt företag specialiserat på bygg och arbete på
                  höjd. Med utbildad personal, hög säkerhetsstandard och lång
                  erfarenhet erbjuder vi smarta lösningar för svåråtkomliga
                  platser.
                </p>
                <Button variant="dark" href="/om">
                  Läs mer om oss
                </Button>
              </Col>
              <Col md={6}>
                <Image
                  src="/workPictures/brt-loggo.png"
                  alt="BRT Höjd AB logotyp"
                  width={0}
                  height={0}
                  sizes="(min-width: 992px) 350px, 400px"
                  priority
                  className="d-inline-block align-top logo-img"
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <h2 className="text-center mb-4">Våra tjänster</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm p-3">
                  <h5 className="fw-bold">Fasadrenovering</h5>
                  <p className="small mb-0">
                    Vi renoverar fasader där ställningar är opraktiska.
                  </p>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm p-3">
                  <h5 className="fw-bold">Monteringsarbeten</h5>
                  <p className="small mb-0">
                    Vi monterar skyltar, rör, nät och andra element på höjd.
                  </p>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm p-3">
                  <h5 className="fw-bold">Inspektioner & Dokumentation</h5>
                  <p className="small mb-0">
                    Visuell kontroll av svåråtkomliga platser med foto/video.
                  </p>
                </Card>
              </Col>
            </Row>

            <div className="text-center mt-4">
              <p className="mb-3 fw-semibold">...och mer</p>
              <Button variant="dark" href="/referenser">
                Läs mer om våra tjänster
              </Button>
            </div>
          </Container>
        </section>

        <section className="py-5 text-center">
          <Container>
            <h2 className="mb-3">Redo att ta nästa steg?</h2>
            <p>Kontakta oss idag för offert, rådgivning eller akuta ärenden.</p>
            <Button
              variant="dark"
              href="mailto:elias@brthojd.se?subject=Förfrågan&body=Hej! Jag är intresserad av industriklättring."
            >
              Skicka ett mail
            </Button>
          </Container>
        </section>
      </main>
    </SplashIntro>
  );
}
