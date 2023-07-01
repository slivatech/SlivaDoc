import React from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AreaChartData {
  name: string;
  value: number;
}

interface AreaChartProps {
  data: AreaChartData[];
}

const AreaChart: React.FC<AreaChartProps> = ({ data }) => {
   
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsAreaChart data={data}>
      <YAxis ticks={[0, 20, 40, 60, 80, 100]} />
        <defs>
          <linearGradient id="chartBackground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(58, 54, 219, 0.5)" />
            <stop offset="93%" stopColor="rgba(255, 105, 180, 0.35)" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          fill="url(#chartBackground)"
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;
