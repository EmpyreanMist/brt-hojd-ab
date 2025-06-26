import Image from "next/image";
import Card from "../components/Card";

export default function References() {
  return (
    <main>
      <div className="imageWrapper">
        <Image
          src="/workPictures/suited.png"
          alt="Climbers working on a high building"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <div className="darkOverlay" />

        <div className="textOverlay">
          <h1 className="mainTitle">Våra tjänster</h1>
        </div>
      </div>

      <main>
        <section className="contentSection">
          <h2>Här finns BRTs tjänster</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <p>
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium.
          </p>

          <div className="cardContainer">
            <Card
              title="Fasad"
              imageSrc="/workPictures/climbers.jpg"
              text="Vi åtgärdar fasader när ställning blir opraktiskt"
            />
            <Card
              title="Montering"
              imageSrc="/workPictures/climbers.jpg"
              text="Snabbt montage av alla typer av element på höjd"
            />
            <Card
              title="Inspektion"
              imageSrc="/workPictures/climbers.jpg"
              text="Vi kombinerar drönare med fysisk inspektion på t.ex. tak, betong, eller fallskyddsutrustning."
            />
            <Card
              title="Bergsförstärkning"
              imageSrc="/workPictures/climbers.jpg"
              text="Skrotning av schakt, berg, samt nätning och bult."
            />
          </div>
        </section>
      </main>
    </main>
  );
}
