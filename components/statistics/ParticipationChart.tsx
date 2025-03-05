"use client";

import { useTheme } from "next-themes";
import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";

function ParticipationChart() {
  const { theme } = useTheme();

  const data = useMemo(() => {
    return {
      series: [
        {
          name: "2023",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "2024",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "2025",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            borderRadius: 5,
            borderRadiusApplication: "end",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "NGO Name",
            "NGO Name",
            "NGO Name",
            "NGO Name",
            "NGO Name",
            "NGO Name",
            "NGO Name",
            "NGO Name",
            "NGO Name",
          ],
          labels: {
            style: {
              colors: theme === "light" ? "#303841" : "#F3F3F3", // Set label color based on theme
              fontSize: "12px", // Optional: Adjust font size
            },
          },
        },
        yaxis: {
          // title: {
          //   text: "$ (thousands)",
          // },
          labels: {
            style: {
              colors: theme === "light" ? "#303841" : "#F3F3F3", // Set label color based on theme
              fontSize: "12px", // Optional: Adjust font size
            },
          },
        },
        legend: {
          position: "top", // Position of the legend
          horizontalAlign: "center", // Horizontal alignment
          labels: {
            colors:
              theme === "dark"
                ? ["#F3F3F3", "#F3F3F3", "#F3F3F3"]
                : ["#303841", "#303841", "#303841"], // Set series label colors
            fontSize: "14px", // Optional: Adjust font size
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          theme: theme === "dark" ? "dark" : "light",
          y: {
            formatter: (val: any) => {
              return `<div >${val}</div>`;
            },
          },
        },
      },
    };
  }, [theme]);

  return (
    <div className="w-full md:w-2/3 mt-20" id="chart">
      <ReactApexChart
        height={350}
        options={data.options}
        series={data.series}
        type="bar"
      />
    </div>
  );
}

export default ParticipationChart;
