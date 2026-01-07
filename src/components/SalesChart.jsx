import { Line } from "react-chartjs-2";
import { salesData } from "../salesData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesChart() {
  const data = {
    labels: salesData.map((d) => d.date),
    datasets: [
      {
        label: "Sales ($)",
        data: salesData.map((d) => d.amount),
        borderColor: "#3b82f6", // Tailwind blue-500
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3, // smooth line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Sales Metric" },
    },
  };

  return (
    <div className="w-full h-50 md:h-100 flex justify-center items-center">
      <Line data={data} options={options} />;
    </div>
  );
}
