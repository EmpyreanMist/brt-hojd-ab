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
            Industriklättring eller rope access har funnits åtminstone sedan
            1970-talet på oljeplattformar i nordsjön. Istället för att bygga
            ställningar för att byta en lampa började man använda rep som
            arbetspositionering på en bråkdel av tiden, och strax därefter kom
            det andra repet som säkerhetslina
          </p>
          <p className="lead fade-in delay-1">
            När vi klättrar har vi därför minst 2 rep, ett aktivt och ett
            passivt. Oftast börjar vi från toppen, kopplar på alla verktyg och
            firar ner till arbetsplatsen, utför jobbet och firar ner till
            marken. Men vi kan också klättra på repet, eller använda repmopeder
            och vinschar för att lyfta tunga saker eller minska belastningen på
            arbetaren.
          </p>
        </Container>
      </section>

      <section className="py-4 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8} className="fade-in delay-2">
              <p className="lead">
                Ett jobb inleds alltid med en riskanalys, för att t.ex. avgöra
                vilken skyddsutrustning som krävs, vilka repskydd mot kanter som
                är lämpligt, och enklast arbetsmetod. Vi jobbar alltid som minst
                2 personer, kamratcheckar varandra för att minska den mänskliga
                faktorn och har alltid en förberedd räddningsplan innan arbetet
                börjar.
              </p>
              <p className="lead">
                Med tiden utvecklades olika standarder, såsom IRATA, SPRAT, och
                SOFT. Dom kommer från olika delar av världen men delar oftast en
                likvärdig säkerhetsstandard, och därför är vi utbildade enligt
                IRATA och SOFT beroende på vars vi utför jobb.
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
                Är arbete via rep osäkert? På grund av den grundliga
                säkerhetskulturen vi följer har vår industri några av dom
                absolut lägsta snitten av skador per arbetad timme! Du har
                säkert funderat på det, men svaret är nej, vi har inte
                risktillägg när vi jobbar.
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
