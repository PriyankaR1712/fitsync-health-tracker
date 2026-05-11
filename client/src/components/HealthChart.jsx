import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

function HealthChart({ data }) {
  // Convert data to cleaner chart labels
  const chartData = data.map((item, index) => ({
    name: `Entry ${index + 1}`,
    calories: item.calories,
    waterIntake: item.waterIntake,
    steps: item.steps,
    sleepHours: item.sleepHours,
  }));

  return (
    <div className="mt-10 bg-gray-950 p-6 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-white mb-6">
        Health Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.05} />
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

          <YAxis
            stroke="#9CA3AF"
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "1px solid #374151",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="calories"
            stroke="#22d3ee"
            strokeWidth={4}
            fill="url(#colorCalories)"
          />

          <Line
            type="monotone"
            dataKey="calories"
            stroke="#22d3ee"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#22d3ee",
            }}
            activeDot={{
              r: 7,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HealthChart;