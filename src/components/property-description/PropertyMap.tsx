import React from "react";

export default function PropertyMap({ name }: { name: string }) {
  const googleApiKey = process.env.GOOGLE_MAPS_API_KEY;
  return (

    <iframe
      width="100%"
      height="600"
      loading="lazy"
      allowFullScreen={true}
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${googleApiKey}&q=${"จุฬา"}`}
    ></iframe>

  );
};
