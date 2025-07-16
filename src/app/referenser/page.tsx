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
          <h1 className="mainTitle">Referenser</h1>
        </div>
      </div>

      <main>
        <section className="contentSection">
          <h2 className="text-center">Våra referenser</h2>

          <div className="cardContainer">
            <Card
              title="Vætabacken, Mattmar
"
              imageSrc="/workPictures/watchtower.jpg"
              text="Då utsiktstornet börjar ha några år på nacken hade en del vajrar vandrat in i timmerstockarna och hörnen som var strukturella hade börjat delvis ruttna. Nya hörn i 50x250 virke och salningar monterades, några fästen gjordes om och vajrarna spändes på nytt. 
"
            />
            <Card
              title="Kraftverk, indalsälven"
              imageSrc="/workPictures/hero3.jpg"
              text="Innan övriga yrkesgrupper och ställningsbyggare kunde gå ner i schaktet skrotade vi av berget för att säkerställa allas säkerhet. "
            />
            <Card
              title="Bergarbete, Berkåk"
              imageSrc="/workPictures/mountain.jpg"
              text="Skrotning, nätning och säkerhetsbultar monterades på högsta delen av klippan då det fanns risk att stenras på den höjden kunde ta sig över vallen intill kraftverksvägen. "
            />
            <Card
              title="Kraftverk, indalsälven"
              imageSrc="/workPictures/powerhouse.jpg"
              text="Det gamla hisschaktet hade vatten rinnande och strukturella delar behövde förstärkas, till detta användes Hiltis stålprofilssystem"
            />
            <Card
              title="Inspektion av skorsten"
              imageSrc="/workPictures/chimney.jpg"
              text="I samarbete med beställare utförde vi tjockleksmätning med ultraljud och inspektion av samtliga komponenter på höjd, som enkelt förmedlades via radio."
            />
          </div>
        </section>
      </main>
    </main>
  );
}
