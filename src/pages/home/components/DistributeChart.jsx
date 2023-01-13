import React, { useState, useEffect } from "react";
import { Card, Button, Space } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function DistributeChart(props) {
  const actionComp = () => (
    <Space>
      <Button>日</Button>
      <Button>周</Button>
      <Button>月</Button>
    </Space>
  );
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <Card title="时段分布" extra={actionComp()}>
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <Legend />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              strokeWidth={5}
              dataKey="pv"
              name="访客量"
              stroke="#118ab2"
              dot={false}
            />
            <Line
              type="monotone"
              strokeWidth={5}
              dataKey="uv"
              name="成交量"
              stroke="#ffd166"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
