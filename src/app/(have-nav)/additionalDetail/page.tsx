"use client";

import { useState } from "react";
import FurnishingButton from "@/components/additional-detail/FurnishingButton";

export default function AdditionalDetails() {
  const [furnishing, setFurnishing] = useState("fully-furnished");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [floor, setFloor] = useState("");
  const [floorSize, setFloorSize] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (event) => {
    const files = event.target.files;
    const newPhotos = [...photos];
    for (let i = 0; i < files.length; i++) {
      newPhotos.push(URL.createObjectURL(files[i]));
    }
    setPhotos(newPhotos);
  };

  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-lg font-bold">Additional Details</h2>
      <div className="mb-4">
        {/* <h3 className="mb-2 text-sm font-semibold">Furnishing</h3> */}
        <div className="flex space-x-4">
          {/* <button
            className={`rounded-md px-4 py-2 ${
              furnishing === "fully-furnished"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setFurnishing("fully-furnished")}
          >
            Fully-Furnished
          </button> */}
          {/* Add other furnishing options */}
          <div className="">
            <h3 className="text-md ">Furnishing</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-row space-x-4">
                <FurnishingButton
                  furnishing={furnishing}
                  label="Ready to Move"
                  tag={"ready-to-move"}
                  onClick={() => setFurnishing("ready-to-move")}
                />
                <FurnishingButton
                  furnishing={furnishing}
                  label="Fully-Furnished"
                  tag={"fully-furnished"}
                  onClick={() => setFurnishing("fully-furnished")}
                />
              </div>
              <div className="flex flex-row space-x-4">
                <FurnishingButton
                  furnishing={furnishing}
                  label="Partially-Furnished"
                  tag={"partially-furnished"}
                  onClick={() => setFurnishing("partially-furnished")}
                />
                <FurnishingButton
                  furnishing={furnishing}
                  label="Unfurnished"
                  tag={"unfurnished"}
                  onClick={() => setFurnishing("unfurnished")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add input fields for other details */}
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="bedrooms"
              className="text-md block font-medium text-gray-700"
            >
              Bedrooms
            </label>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="bathrooms"
              className="text-md block font-medium text-gray-700"
            >
              Bathrooms
            </label>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="floor"
              className="text-md block font-medium text-gray-700"
            >
              Floor
            </label>
            <input
              type="number"
              id="floor"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="floorSize"
              className="text-md block font-medium text-gray-700"
            >
              Floor Size
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="number"
                id="floorSize"
                value={floorSize}
                onChange={(e) => setFloorSize(e.target.value)}
                className="block w-full rounded-md border-gray-300 pr-12 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <label htmlFor="floorSizeUnit" className="sr-only">
                  Floor Size Unit
                </label>
                <select
                  id="floorSizeUnit"
                  className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="sqm">sqm</option>
                  <option value="sqft">sqft</option>
                  {/* Add other units if needed */}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="unitNumber"
              className="text-md block font-medium text-gray-700"
            >
              Unit Number
            </label>
            <input
              type="number"
              id="unitNumber"
              value={unitNumber}
              onChange={(e) => setUnitNumber(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-md mb-2">Upload Photos of Your Property</h3>
        <div className="flex w-full items-center justify-center">
          <label
            htmlFor="photo-upload"
            className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-md bg-ci-gray outline outline-2 outline-ci-dark-gray hover:bg-ci-dark-gray"
          >
            <svg
              className="mb-2 h-8 w-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm text-gray-500">Add photos</span>
            <input
              id="photo-upload"
              type="file"
              className="hidden"
              multiple
              onChange={handlePhotoUpload}
            />
          </label>
        </div>
        <div className="mt-4 flex w-full overflow-x-auto">
          {photos.map((photo, index) => (
            // w-44
            <div key={index} className="relative mb-2 mr-2 h-28 w-64">
              <img
                src={photo}
                alt={`Property Photo ${index + 1}`}
                className="h-full w-full rounded-md object-cover"
              />
              <button
                className="absolute right-0 top-0 m-1 rounded-full bg-red-500 p-1 text-white"
                onClick={() => {
                  const newPhotos = [...photos];
                  newPhotos.splice(index, 1);
                  setPhotos(newPhotos);
                }}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <button className="rounded-md bg-white px-10 py-2 text-gray-700 outline outline-gray-300 hover:bg-ci-light-blue hover:text-white hover:outline-none">
          Back
        </button>
        <button className="rounded-md bg-ci-light-blue px-10 py-2 text-white">
          Next
        </button>
      </div>
    </div>
  );
}
