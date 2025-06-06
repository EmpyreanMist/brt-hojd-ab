import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="bg-white text-dark min-vh-100">
      <div className="text-center py-5 px-3">
        <h1 className="display-4 fw-bold mb-4 fade-in">
          Når du inte? <br className="d-md-none" /> Det gör vi!
        </h1>
      </div>

      <Carousel />
    </main>
  );
}
