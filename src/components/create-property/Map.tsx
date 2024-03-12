import React from "react";

let googleApiKey = process.env.GOOGLE_MAPS_API_KEY;

const Map = ({ name }: { name: string }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="450"
        loading="lazy"
        style={{ borderRadius: "10px" }}
        // style="border:0"
        // allowfullscreen
        // referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=${name}`}
      ></iframe>
    </div>
  );
};

export default Map;
