import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const PriceChart = ({ flights }) => {
  const data = flights.map((f, index) => ({
    name: `Flight ${index + 1}`,
    price: Number(f.price.total),
  }));

  return (
    <LineChart width={320} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="price" strokeWidth={2} />
    </LineChart>
  );
};

export default PriceChart;
