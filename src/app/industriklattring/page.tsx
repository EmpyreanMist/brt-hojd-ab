import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function IndustriklattringP() {
  return (
    <main className="bg-white text-dark">
      <section className="py-5 bg-white text-center">
        <Container>
          <h1 className="display-5 fw-bold fade-in">
            Vad är industriklättring?
          </h1>
          <p className="lead fade-in delay-1">
            Industriklättring är en metod där specialutbildade tekniker använder
            rep, sele och annan klätterutrustning för att utföra arbete på
            svåråtkomliga platser – utan behov av ställningar eller liftar.
          </p>
        </Container>
      </section>

      <section className="py-4 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8} className="fade-in delay-2">
              <p className="lead">
                Genom att använda denna metod kan arbetet utföras snabbare,
                säkrare och mer kostnadseffektivt. Industriklättrare arbetar
                ofta på höga höjder, inom trånga utrymmen eller på platser där
                traditionella metoder inte fungerar.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8} className="fade-in delay-3">
              <p className="lead">
                Alla våra klättrare är certifierade enligt IRATA eller SPRAT och
                har lång erfarenhet inom branschen. Säkerhet och kvalitet är
                alltid vår högsta prioritet.
              </p>
              <a
                href="mailto:elias@brthojd.se?subject=Industriklättring&body=Hej! Jag vill veta mer om industriklättring."
                className="btn btn-dark mt-3"
              >
                Skicka ett mail
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
