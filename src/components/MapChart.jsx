import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-90, -25, 0],
        center: [-5, -3],
        scale: 1100
      }}
    >
      <Geographies
        geography="/features.json"
        fill="rgb(179, 0, 94)"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[256.5, 151]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
          {"DELHI"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
