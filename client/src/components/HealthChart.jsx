import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function HealthChart({ data }) {

  return (
    <div className="bg-gray-900 p-6 rounded-2xl mt-12">

      <h2 className="text-2xl font-bold text-white mb-6">
        Health Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="_id" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="calories"
            stroke="#06b6d4"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default HealthChart;