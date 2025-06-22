import Image from "next/image";

export default function References() {
  return (
    <main>
      <div className="imageWrapper">
        <Image
          src="/workPictures/climbers.jpg"
          alt="Climbers working on a high building"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <div className="darkOverlay" />

        <div className="textOverlay">
          <p className="label">ABCDEFHIJ</p>
          <h1 className="mainTitle">
            Lorem ipsum dolor sit amet, consectetuer a
          </h1>
          <p className="subTitle">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget
          </p>
        </div>
      </div>

      <main>
        <section className="contentSection">
          <h2>
            Lorem ipsum dolor sit amet, <br />
            consectetuer adipiscing elit
          </h2>
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
        </section>
      </main>
    </main>
  );
}
