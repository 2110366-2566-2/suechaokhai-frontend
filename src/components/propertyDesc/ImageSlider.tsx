import Image from "next/image";
import { useState } from "react";
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const updateCurrentImage = (index: number) => {
    setCurrentImage(index);
  };
  return (
    // <div className="my-4 flex flex-col">
    //   <div className="h-fit ">
    //     <Image
    //       src={images[currentImage]}
    //       width={200}
    //       height={10}
    //       objectFit="fill"
    //       alt={`Image ${currentImage}`}
    //     />
    //   </div>
    <div className="my-4 flex h-fit flex-row gap-1 overflow-y-hidden overflow-x-scroll">
      {images.map((img, i) => (
        <div className="relative aspect-video h-48 sm:h-96">
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
    // </div>
    // <div className="relative my-2 flex h-fit flex-row gap-1 overflow-scroll overflow-y-hidden">
    //   <div className="flex items-center">
    //     {images.map((image, index) => (
    //       <div
    //         key={index}
    //         // className="max-h-100 w-100 h-100 relative flex min-w-[100%] justify-center lg:min-w-[50%]"
    //         className="relative aspect-square h-96 w-1/2"
    //       >
    //         <Image
    //           src={image}
    //           alt={`Image ${index + 1}`}
    //           // width={500}
    //           // height={200}
    //           layout="fill"
    //           objectFit="cover"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default ImageSlider;
