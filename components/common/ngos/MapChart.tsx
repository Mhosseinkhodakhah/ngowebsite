"use client";

import { Chart } from "react-google-charts";

function MapChart() {
  const data = [
    ["Country", "NGO"],
    ["North Korea", 200],
    ["Pakistan", 300],
    ["India", 400],
    ["Iraq", 500],
    ["japan", 600],
    ["Iran", 700],
  ];

  const options = {
    region: "142",
    colorAxis: { colors: ["#96B7E4", "#5C9EDC", "#2185D5"] },
    datalessRegionColor: "#F3F3F3",
    defaultColor: "#f5f5f5",
  };

  return (
    <div className="md:my-32 w-[90%] md:w-auto">
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper?.getChart();
              const selection = chart?.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        data={data}
        height="100%"
        options={options}
        width="100%"
      />
    </div>
  );
}

export default MapChart;
