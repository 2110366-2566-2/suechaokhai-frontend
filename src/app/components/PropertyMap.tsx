import React from "react";

let mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Wishdom+Sathorn+90`;

const PropertyMap = ({ address }) => {
  return (
    <div>
      <iframe
        width="600"
        height="450"
        // style="border:0"
        loading="lazy"
        // allowfullscreen
        // referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA2Qq9tiWUtSdlkiBJov0EMgRDPTEMKJHw&q=Wishdom+Sathorn+90"
      ></iframe>
    </div>
  );
};

export default PropertyMap;
