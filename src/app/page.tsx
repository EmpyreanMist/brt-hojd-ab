import Carousel from "./components/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <main className="bg-white text-dark">
      {/* Hero */}
      <section className="text-center py-5 bg-white">
        <Container>
          <h1 className="display-4 fw-bold fade-in mb-3">
            Når du inte? Det gör vi!
          </h1>
          <p className="lead">Experter på industriklättring & bygg på höjd.</p>
        </Container>
      </section>

      {/* Carousel */}
      <section>
        <Carousel />
      </section>

      {/* Fördelar */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <div>🧗‍♂️</div>
              <h5 className="mt-2">Industriklättring</h5>
              <p className="small">Vi når där andra inte kan.</p>
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
            <Col md={3} className="mb-4">
              <div>⚡</div>
              <h5 className="mt-2">Snabb respons</h5>
              <p className="small">Vi är snabbt på plats vid behov.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Om oss */}
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
              <Button variant="dark" href="/about">
                Läs mer om oss
              </Button>
            </Col>
            <Col md={6}>
              <img
                src="/loggo.jpg"
                alt="BRT Höjd AB logga"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tjänster */}
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
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="mb-3">Redo att ta nästa steg?</h2>
          <p>Kontakta oss idag för offert, rådgivning eller akuta ärenden.</p>
          <Button variant="dark" size="lg" href="#kontakt">
            Kontakta oss
          </Button>
        </Container>
      </section>

      {/* Kontaktblock */}
      <section id="kontakt" className="py-5 bg-dark text-light">
        <Container>
          <Row>
            <Col md={6}>
              <h4>Kontakt</h4>
              <p>E-post: hejhej@tjena.com</p>
              <p>Telefon: 123-456789</p>
              <p>Org.nr: 556789-XXXX</p>
            </Col>
            <Col md={6}>
              <h4>Adress</h4>
              <p>BRT Höjd AB</p>
              <p>Höjdgatan 1</p>
              <p>123 45 Klätterstad</p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
