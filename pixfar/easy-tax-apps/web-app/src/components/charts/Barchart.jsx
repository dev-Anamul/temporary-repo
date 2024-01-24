import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//   },
//   {
//     name: "Page G",
//     uv: 7490,
//     pv: 5300,
//   },
//   {
//     name: "Page G",
//     uv: 7490,
//     pv: 9300,
//   },
//   {
//     name: "Page G",
//     uv: 6490,
//     pv: 9300,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 7300,
//   },
//   {
//     name: "Page G",
//     uv: 8490,
//     pv: 4300,
//   },
// ];

function BarCharts({ width, height, data }) {
  return (
    <div>
      <BarChart width={width} height={height} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip wrapperStyle={{ backgroundColor: "#000" }} />
        <Legend />
        <Bar
          dataKey="expense"
          barSize={25}
          fill="#EF3131"
          className="capitalize"
        />
        <Bar dataKey="income" barSize={25} fill="#3CB559" />
      </BarChart>
    </div>
  );
}

// props types validation
BarCharts.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default BarCharts;
