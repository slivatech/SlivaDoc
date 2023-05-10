import React, { useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Legend } from "recharts";
import arrowchart from "../../assets/icon/arrowchart.svg"
interface Data {
    name: string;
    value: number;
  }
interface Props {
  data: Data[];
  width: number | string;
  height: number | string;
  innerRadius?: number;
  outerRadius?: number;
}
interface ActiveShapeProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    fill: string;
    payload: Data;
    percent: number;
    value: number;
  }
  
const PieChartComp = ({ data, width, height}: Props) => {
const RADIAN = Math.PI / 180;
const [activeIndex, setActiveIndex] = useState(0);
const renderActiveShape = (props:ActiveShapeProps) => {
const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
const sin = Math.sin(-RADIAN * midAngle);
const cos = Math.cos(-RADIAN * midAngle);
const sx = cx + (outerRadius + 10) * cos;
const sy = cy + (outerRadius + 10) * sin;
const mx = cx + (outerRadius + 30) * cos;
const my = cy + (outerRadius + 30) * sin;
const ex = mx + (cos >= 0 ? 1 : -1) * 22;
const ey = my;
const textAnchor = cos >= 0 ? "start" : "end";
const imageWidth = 40;
const imageHeight = 40;

return (
    <g>
      <image
  href={arrowchart}
  x={cx - (imageWidth / 2)}
  y={cy - (imageHeight / 2)}
  width={imageWidth}
  height={imageHeight}
/>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

return (
    
<ResponsiveContainer width={width} height={height}>
<PieChart >
<Pie

  data={data}
  cx="50%"
  cy="50%"
  innerRadius={60}
  outerRadius={80}
  activeIndex={activeIndex}
  onMouseEnter={(data, index) => setActiveIndex(index)}
  activeShape={renderActiveShape}
  dataKey="value"
  cornerRadius={10}
  paddingAngle={0}
/>
<Legend layout="horizontal" verticalAlign="bottom" align="center" />
</PieChart>

</ResponsiveContainer>
);
};

export default PieChartComp;