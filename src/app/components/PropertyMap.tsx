import React from "react";

// let mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Wishdom+Sathorn+90`;

let googleApiKey = process.env.GOOGLE_MAPS_API_KEY;

/*
TODO: 
- Use Google Maps API from .env
*/
const PropertyMap = ({ name }: { name: string }) => {
  return (
    <div>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        // style="border:0"
        // allowfullscreen
        // referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=${name}`}
      ></iframe>
    </div>
  );
};

export default PropertyMap;
