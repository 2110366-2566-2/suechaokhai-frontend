import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="flex items-center">
      <div className="relative my-[2%] w-[90%] overflow-scroll overflow-y-auto">
        <div className="flex items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className="max-h-100 flex min-w-[100%] justify-center lg:min-w-[50%]"
            >
              <Image
                className="w-11/12 object-contain"
                src={image}
                alt={`Image ${index + 1}`}
                width={500}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
