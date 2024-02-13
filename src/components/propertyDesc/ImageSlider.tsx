import Image from "next/image";
import { useState } from "react";
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const updateCurrentImage = (index: number) => {
    setCurrentImage(index);
  };
  return (
    <div className="my-4 flex h-fit flex-row gap-1 overflow-y-hidden overflow-x-scroll">
      {images.map((img, i) => (
        <div className="relative aspect-video h-44 sm:h-96">
          <Image
            src={img}
            alt={`Image ${i + 1}`}
            layout="fill"
            objectFit="cover"
            onClick={() => updateCurrentImage(i)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
