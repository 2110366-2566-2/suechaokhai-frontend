// ImageSlider.tsx

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
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-99">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 mx-auto flex items-center justify-center h-full w-full">
            <Image src={image} alt={`Image ${index + 1}`} width={500} height={300} />
          </div>
        ))}
      </div>
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[40px] text-black bg-transparent border-none cursor-pointer" onClick={goToPrev}>
        {"<"}
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[40px] text-black bg-transparent border-none cursor-pointer" onClick={goToNext}>
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;
