import Image from "next/image";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";

interface CarouselComponentProps {
  items: { image: string; title: string }[];
}

const CarouselComponent: FC<CarouselComponentProps> = ({ items }) => {
  return (
    <Carousel>
      {items.map(({ image, title }, i) => (
        <div key={i}>
          <Image
            src={image}
            alt={title}
            width={1000}
            height={400}
            layout="responsive"
          />
          <p className="legend">{title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
