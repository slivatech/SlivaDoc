import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";
import styled from "styled-components";

const TooltipStyle = styled.div`
  background-color: #ff69b4;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 10px;
  border: none;

`;
const BarContainer = styled.div`
  padding: 1rem;
`;

const CustomTooltip = ({ payload, active }: any) => {
  if (active) {
    return (
      <TooltipStyle>
        <p>{`${payload[0].value}`}</p>
      </TooltipStyle>
    );
  }

  return null;
};

const BarChartComponent = () => {
  const data = [
    {
      name: "Jan",
      rating: 2.5,
    },
    {
      name: "Feb",
      rating: 2.35,
    },
    {
      name: "Mar",
      rating: 3,
    },
    {
      name: "Apr",
      rating: 1.5,
    },
    {
      name: "May",
      rating: 1.6,
    },
    {
      name: "Jun",
      rating: 4.4,
    },
  ];
  return (
    <BarContainer>
      <BarChart
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        width={300}
        height={200}
        data={data}
      >
        <Bar
          radius={[50, 50, 0, 0]}
          barSize={10}
          dataKey="rating"
          fill="#FF69B4"
        />
        <Tooltip content={<CustomTooltip />} position={{ y: -40 }} />
        <XAxis dataKey="name" strokeWidth={0} />
      </BarChart>
    </BarContainer>
  );
};

export default BarChartComponent;
