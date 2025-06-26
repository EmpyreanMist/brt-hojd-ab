import Image from "next/image";

type CardProps = {
  title: string;
  imageSrc: string;
  text: string;
  button?: boolean;
};

export default function Card({ title, imageSrc, text }: CardProps) {
  return (
    <div className="custom-card">
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={300}
        className="custom-card-img glow-border"
      />
      <div className="custom-card-body">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
