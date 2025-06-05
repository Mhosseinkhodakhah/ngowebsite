"use client";

import { useTheme } from "next-themes";
import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";

function CountriesChart() {
  const { theme } = useTheme();

  const data = useMemo(() => {
    return {
      series: [44, 55, 41, 17, 25],
      options: {
        chart: {
          type: "donut",
          height: "100%", // Use percentage for height
        },
        labels: ["Iran", "Iraq", "Qatar", "Pakistan", "India"],
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                width: "90%", // Adjust width for tablet screens
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%", // Full width for mobile screens
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        legend: {
          position: "right",
          labels: {
            colors: theme === "dark" ? "#F3F3F3" : "#303841",
            fontSize: "14px", // Optional: Adjust font size
          },
        },
        tooltip: {
          y: {
            formatter: (val: any) => `${val}%`,
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "50%",
            },
          },
        },
      },
    };
  }, [theme]);

  return (
    <div className="w-full md:w-2/3 lg:w-1/3 mt-20" id="chart">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="donut"
      />
    </div>
  );
}

export default CountriesChart;
