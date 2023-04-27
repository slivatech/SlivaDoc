import { useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";
import styled from "styled-components";

const TooltipStyle = styled.div`
  background-color: #ff69b4;
  color: white;
  border-radius: 5px;
  font-size: 10px;
  width: 44px;
  height: 21px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;

  img {
    position: absolute;
    bottom:-4px;
    left:35%;
  }
`;
const BarContainer = styled.div`
`;

const TooltipArrow = styled.img`
  
`

const CustomTooltip = ({ payload, active }: any) => {
  if (active) {
    return (
      <TooltipStyle>
        <p>{`${payload[0].value}`}</p>
        <img src="/assets/arow.svg" />
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
      rating: 10,
    },
    {
      name: "Mar",
      rating: 5,
    },
    {
      name: "Apr",
      rating: 6,
    },
    {
      name: "May",
      rating: 5.5,
    },
    {
      name: "Jun",
      rating: 2.5,
    },
  ];
  const [focusBar, setFocusBar] = useState(null);
  let [barGraphData, setBarGraphData] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  return (
    <BarContainer>
      <BarChart
        onMouseMove={(state: any) => {
          if (state.isTooltipActive) {
            setFocusBar(state.activeTooltipIndex);
          } else {
            setFocusBar(null);
          }
        }}
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
          onMouseOver={(data) => {
            console.log("data", data);
            setBarGraphData(data);
          }}
          radius={[50, 50, 0, 0]}
          barSize={10}
          dataKey="rating"
        >
          {data.map((entry, index) => (
            <Cell
              fill={focusBar === index ? "#FF69B4" : "rgba(255, 105, 180, 0.3)"}
              // for this, we make the hovered colour #2B5CE7, else its opacity decreases to 20%
            />
          ))}
        </Bar>
        <Tooltip
          wrapperStyle={{ outline: "none" }}
          content={<CustomTooltip />}
          cursor={false}
          position={{ x: barGraphData.x - 18, y: barGraphData.y -25 }}
        />
        <XAxis dataKey="name" strokeWidth={0} />
      </BarChart>
    </BarContainer>
  );
};

export default BarChartComponent;
