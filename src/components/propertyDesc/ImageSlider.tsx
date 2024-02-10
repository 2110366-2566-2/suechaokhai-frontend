import Image from "next/image";
import React, { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative my-[2%] w-full overflow-hidden">
      <div
        className="flex items-center transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex max-h-80 min-h-80 min-w-[50%] justify-center"
          >
            <Image
              className="object-cover w-[89%]"
              src={image}
              alt={`Image ${index + 1}`}
              width={500}
              height={200}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 transform cursor-pointer border-none bg-transparent text-[40px] text-black"
        onClick={goToPrev}
      >
        {"<"}
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer border-none bg-transparent text-[40px] text-black"
        onClick={goToNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;
