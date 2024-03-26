import React from "react";

let googleApiKey = process.env.GOOGLE_MAPS_API_KEY;

const PropertyMap = ({ name }: { name: string }) => {
  return (

    <iframe
      width="100%"
      height="600"
      loading="lazy"
      allowFullScreen={true}
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBNOLDzeFNz4y8LNAy0-hVenLGVGX06Y6U&q=${"จุฬา"}`}
    ></iframe>

  );
};

export default PropertyMap;
