import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { formatCurrency } from "@/lib/formatters";

Chart.register(...registerables);

type ProjectionChartProps = {
  balanceData: number[];
  withdrawalData: number[];
  years: number[];
};

export default function ProjectionChart({ 
  balanceData, 
  withdrawalData,
  years 
}: ProjectionChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;
    
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: years,
        datasets: [
          {
            label: "Balance",
            data: balanceData,
            borderColor: "#0056b3", // primary color
            backgroundColor: "rgba(0, 86, 179, 0.1)",
            fill: true,
            tension: 0.1,
          },
          {
            label: "Withdrawals",
            data: withdrawalData,
            borderColor: "#00a67e", // secondary color
            backgroundColor: "rgba(0, 166, 126, 0.1)",
            borderDash: [5, 5],
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            mode: "index",
            intersect: false,
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                label += formatCurrency(context.parsed.y);
                return label;
              },
            },
          },
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return formatCurrency(value as number);
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [balanceData, withdrawalData, years]);

  return <canvas ref={chartRef} />;
}
