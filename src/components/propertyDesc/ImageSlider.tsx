import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLength, setImageLength] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const imgLen = images.length % 2 == 1 ? images.length - 1 : images.length;
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  useEffect(() => {
    setImageLength(images.length % 2 == 1 ? images.length - 1 : images.length);
    if (isSmallScreen) {
      setImageLength(images.length);
    }
  }, [images.length, isSmallScreen]);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageLength);
    console.log(imageLength);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageLength) % imageLength);
  };

  const transformValue = isSmallScreen ? 100 : 50;
  return (
    <div className="flex items-center">
      <button
        className="m-2 -translate-y-1/2 transform cursor-pointer border-none bg-transparent text-[40px] text-black"
        onClick={goToPrev}
      >
        {"<"}
      </button>
      <div className="relative my-[2%] w-[90%] overflow-hidden">
        <div
          className="flex items-center transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * transformValue}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex max-h-80 min-h-80 min-w-[100%] justify-center sm:min-w-[50%]"
            >
              <Image
                className="w-[90%] object-cover "
                src={image}
                alt={`Image ${index + 1}`}
                width={500}
                height={200}
              />
              {/* <img src={image} alt={`Image ${index + 1}`} /> */}
            </div>
          ))}
        </div>
      </div>
      <button
        className="m-2 -translate-y-1/2 transform cursor-pointer border-none bg-transparent text-[40px] text-black"
        onClick={goToNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;
