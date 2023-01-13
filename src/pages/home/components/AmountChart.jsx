import React, { useEffect, useState } from "react";
import { Card, DatePicker } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function AmountChart(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <Card title="实付金额" extra={<DatePicker />}>
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              legendType="circle"
              dataKey="uv"
              name="金额"
              barSize={10}
              fill="#1677ff"
              background={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
