"use client";

import { Carousel } from "react-bootstrap";
import { useState } from "react";

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
  const [index, setIndex] = useState(0);

  return (
    <div
      className="carousel-wrapper text-center"
      style={{
        backgroundColor: "#1e2422",
        transition: "background-color 0.5s ease",
      }}
    >
      <Carousel fade interval={4000} indicators={false} onSelect={setIndex}>
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-item-wrapper">
              <img src={image.src} alt={`Bild ${i + 1}`} />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: "1rem",
                  zIndex: 2,
                }}
              >
                <h3 className="mainTitle">{image.title}</h3>
                <p className="subTitle">{image.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
