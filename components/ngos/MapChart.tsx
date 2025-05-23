"use client";

// import { Chart } from "react-google-charts";

// function MapChart({ data }: { data: any }) {
//   // const data = [
//   //   ["Country", "NGO"],
//   //   ["North Korea", 200],
//   //   ["Pakistan", 300],
//   //   ["India", 400],
//   //   ["Iraq", 500],
//   //   ["japan", 600],
//   //   ["Iran", 700],
//   // ];

//   const options = {
//     region: "142",
//     colorAxis: { colors: ["#96B7E4", "#5C9EDC", "#2185D5"] },
//     datalessRegionColor: "#F3F3F3",
//     defaultColor: "#f5f5f5",
//   };

//   return (
//     <div className="md:my-32 w-full md:w-auto">
//       <Chart
//         chartEvents={[
//           {
//             eventName: "select",
//             callback: () => {
//               // این پارامز فانکشنه chartWrapper
//               const chart = chartWrapper?.getChart();
//               const selection = chart?.getSelection();
//               if (selection.length === 0) return;
//               const region = data[selection[0].row + 1];
//               console.log("Selected : " + region);
//             },
//           },
//         ]}
//         chartType="GeoChart"
//         className="w-full border rounded-lg border-slate-400 "
//         data={data}
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         height="100%"
//         options={options}
//         width="100%"
//       />
//     </div>
//   );
// }

// export default MapChart;

// import React from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// export default function MapChart({ data }: { data: any }) {
//   return (
//     <ComposableMap>
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography key={geo.rsmKey} geography={geo} />
//           ))
//         }
//       </Geographies>
//     </ComposableMap>
//   );
// }

import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { useTranslations } from "next-intl";
import { AgChartOptions } from "ag-charts-enterprise";

import { topology } from "./toplogy";

import "ag-charts-enterprise";

const MapChart = ({ data }: { data: any }) => {
  const t = useTranslations("common");

  const [options, setOptions] = useState<AgChartOptions>({
    data,
    topology,
    // legend: {
    //   enabled: true,
    //   maxHeight: 1000,
    //   maxWidth: 1000,
    //   position: "right",
    // },
    series: [
      {
        type: "map-shape-background",
        // stroke: "5px",
      },

      {
        cursor: "pointer",
        type: "map-shape",
        title: t("Count of NGOs"),
        idKey: "name",
        colorKey: "value",
        colorName: t("Number of NGOs"),
      },
    ],
    background: { fill: "transparent" },
    zoom: {
      enabled: true,
      axes: "xy",
    },
    navigator: { enabled: true, cornerRadius: 5 },
    animation: {
      duration: 1000,
    },

    gradientLegend: {
      enabled: true,
      position: "right",
      gradient: {
        preferredLength: 200,
        thickness: 2,
      },
      scale: {
        label: {
          fontSize: 10,
          formatter: (p) => p.value + "%",
        },
      },
    },
  });

  return (
    <div className="w-full  max-w-screen-lg mb-10">
      <AgCharts options={options} />
    </div>
  );
};

export default MapChart;
