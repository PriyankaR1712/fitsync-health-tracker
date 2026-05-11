import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function HealthChart({ data }) {
  const [selectedMetric, setSelectedMetric] = useState("calories");

  const metrics = [
    { key: "calories", label: "Calories", unit: " kcal" },
    { key: "waterIntake", label: "Water Intake", unit: " L" },
    { key: "steps", label: "Steps", unit: "" },
    { key: "sleepHours", label: "Sleep Hours", unit: " hrs" },
  ];

  const selected = metrics.find(
    (metric) => metric.key === selectedMetric
  );

  const chartData = data.map((item, index) => ({
    name: `Entry ${index + 1}`,
    calories: Number(item.calories) || 0,
    waterIntake: Number(item.waterIntake) || 0,
    steps: Number(item.steps) || 0,
    sleepHours: Number(item.sleepHours) || 0,
  }));

  if (chartData.length === 0) {
    return (
      <div className="mt-10 bg-gray-950 p-6 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-6">
          Health Analytics
        </h2>
        <p className="text-gray-400">
          No health data available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 bg-gray-950 p-6 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-6">
        Health Analytics
      </h2>

      {/* Metric Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {metrics.map((metric) => (
          <button
            key={metric.key}
            onClick={() => setSelectedMetric(metric.key)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedMetric === metric.key
                ? "bg-cyan-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {metric.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient
              id="colorMetric"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#22d3ee"
                stopOpacity={0.4}
              />
              <stop
                offset="95%"
                stopColor="#22d3ee"
                stopOpacity={0.05}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#374151"
          />

          <XAxis
            dataKey="name"
            stroke="#9CA3AF"
          />

          <YAxis stroke="#9CA3AF" />

          <Tooltip
            formatter={(value) => [`${value}${selected.unit}`, selected.label]}
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #374151",
              borderRadius: "12px",
              color: "white",
            }}
          />

          <Area
            type="monotone"
            dataKey={selectedMetric}
            stroke="#22d3ee"
            strokeWidth={3}
            fill="url(#colorMetric)"
            dot={{
              r: 5,
              fill: "#22d3ee",
            }}
            activeDot={{ r: 7 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HealthChart;
