import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import generateData from "../data/generate-data";

function BarCharts() {
  return (
    <LineChart width={1500} height={550} data={generateData()}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="pv" tickCount={30} />
      <YAxis dataKey="uv" tickCount={20} scale="linear" allowDecimals={true} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="x" stroke="#8884d8" dot={false} />
      <Line type="monotone" dataKey="y" stroke="#82ca9d" dot={false} />
    </LineChart>
  );
}

export default BarCharts;
