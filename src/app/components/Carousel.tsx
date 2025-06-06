"use client";

import { Carousel } from "react-bootstrap";

const images = [
  {
    src: "/workPictures/hero7.jpg",
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
    <Carousel fade interval={4000}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image.src}
            className="d-block w-100 object-fit-cover"
            alt={`Bild ${index + 1}`}
            style={{ height: "75vh", objectFit: "cover" }}
          />
          <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-2">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
