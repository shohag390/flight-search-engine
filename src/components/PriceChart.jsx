import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PriceChart = ({ flights = [] }) => {
  const data = flights.map((f, index) => ({
    name: `Flight ${index + 1}`,
    price: Number(f.price.total),
  }));

  return (
    <div className="w-full h-55 border border-gray-100 rounded-md">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
