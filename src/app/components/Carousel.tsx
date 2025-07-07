"use client";
import { useState } from "react";

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

const getBackgroundColor = (index: number): string => {
  switch (index) {
    case 0:
      return "#d6cfc6"; // Mörk färg för hero1.jpg
    case 1:
      return "#e7edf7"; // Mörk färg för hero2.jpg
    case 2:
      return "#1e2422"; // Mörk färg för hero3.jpg
    default:
      return "#000000";
  }
};

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const bgColor = getBackgroundColor(index);

  return (
    <div
      className="carousel-wrapper text-center"
      style={{
        backgroundColor: !isMobile ? bgColor : "transparent",
        transition: "background-color 0.5s ease",
      }}
    >
      <Carousel fade interval={4000} indicators={false} onSelect={handleSelect}>
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
