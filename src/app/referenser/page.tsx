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
          <h2>Våra referenser</h2>

          <div className="cardContainer">
            <Card
              title="Vætabacken, Mattmar
"
              imageSrc="/workPictures/climbers.jpg"
              text="Då utsiktstornet börjar ha några år på nacken hade en del vajrar vandrat in i timmerstockarna och hörnen som var strukturella hade börjat delvis ruttna. Nya hörn i 50x250 virke och salningar monterades, några fästen gjordes om och vajrarna spändes på nytt. 
"
            />
            <Card
              title="Kraftverk, indalsälven
"
              imageSrc="/workPictures/climbers.jpg"
              text="Innan övriga yrkesgrupper och ställningsbyggare kunde gå ner i schaktet skrotade vi av berget för att säkerställa allas säkerhet. 
"
            />
            <Card
              title="Bergarbete, Berkåk
"
              imageSrc="/workPictures/climbers.jpg"
              text="VSkrotning, nätning och säkerhetsbultar monterades på högsta delen av klippan då det fanns risk att stenras på den höjden kunde ta sig över vallen intill kraftverksvägen. "
            />
            <Card
              title="Kraftverk, indalsälven
"
              imageSrc="/workPictures/climbers.jpg"
              text="Det gamla hisschaktet hade vatten rinnande och strukturella delar behövde förstärkas, till detta användes Hiltis stålprofilssystem
"
            />
          </div>
        </section>
      </main>
    </main>
  );
}
