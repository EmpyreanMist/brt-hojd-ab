"use client";

import { Carousel } from "react-bootstrap";

const images = [
  {
    src: "/workPictures/hero1.jpg",
    title: "Industriklättring",
    description: "Vi når platser andra inte kan.",
  },
  {
    src: "/workPictures/hero2.jpg",
    title: "Effektiv höjdservice",
    description: "Säkerhet och precision i varje uppdrag.",
  },
  {
    src: "/workPictures/hero3.jpg",
    title: "Bygg & underhåll",
    description: "Vi arbetar snabbt och säkert på höga höjder.",
  },
];

export default function ImageCarousel() {
  return (
    <div className="carousel-wrapper text-center">
      <Carousel fade interval={4000}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div style={{ display: "inline-block", position: "relative" }}>
              <img
                src={image.src}
                alt={`Bild ${index + 1}`}
                style={{
                  height: "75vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "1rem",
                }}
              >
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
