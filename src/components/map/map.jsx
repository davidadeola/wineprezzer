import React from "react";
import { Map, Marker } from "pigeon-maps";

export function MyMap({ breweries }) {
  return (
    <>
      <Map
        height={700}
        defaultCenter={[40.879, 4.6997]}
        defaultZoom={3}
        minZoom={2}
      >
        {breweries?.map((brewery, index) => (
          <Marker
            key={index}
            width={50}
            color="#FC7C6C"
            anchor={[
              parseInt(brewery?.latitude) || 50.879,
              parseInt(brewery?.longitude) || 4.6997,
            ]}
          />
        ))}
      </Map>
    </>
  );
}
