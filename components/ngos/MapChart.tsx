"use client";

import { Chart } from "react-google-charts";

function MapChart({ data }: { data: any }) {
  // const data = [
  //   ["Country", "NGO"],
  //   ["North Korea", 200],
  //   ["Pakistan", 300],
  //   ["India", 400],
  //   ["Iraq", 500],
  //   ["japan", 600],
  //   ["Iran", 700],
  // ];

  console.log("ddd", data);

  const options = {
    region: "142",
    colorAxis: { colors: ["#96B7E4", "#5C9EDC", "#2185D5"] },
    datalessRegionColor: "#F3F3F3",
    defaultColor: "#f5f5f5",
  };

  return (
    <div className="md:my-32 w-full md:w-auto">
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: () => {
              // این پارامز فانکشنه chartWrapper
              const chart = chartWrapper?.getChart();
              const selection = chart?.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        className="w-full border rounded-lg border-slate-400 "
        data={data}
        data-aos="fade-up"
        data-aos-duration="1000"
        height="100%"
        options={options}
        width="100%"
      />
    </div>
  );
}

export default MapChart;
