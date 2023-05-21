import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import styled from "styled-components";

interface CountdownProps {
  targetDate: Date;
}

const CountdownContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: center;
`;

const CountdownUnitWrapper = styled.span`
  display: inline-block;
    margin:0 11px;
    
`;

const CountdownUnit = styled.div<{ background: string }>`
  width: 41px;
height: 39px;
  background: ${(props) => props.background};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
font-size: 20px;
line-height: 22px;
`;

const CountdownSeparator = styled.span`
  font-size: 24px;
  color: #000;
`;

const CountdownText = styled.div`
  font-weight: 400;
font-size: 16px;
line-height: 22px;
  margin-right: 5px;
  color: #1C1C1C;
`;
const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetDate.getTime() - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = targetDate.getTime() - Date.now();
      setTimeRemaining(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
     
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    const elements = [
      <CountdownUnitWrapper key="hours">
        <CountdownUnit background="#2335D5">{hours.toString().padStart(2, "0")}</CountdownUnit>
      </CountdownUnitWrapper>,
      <CountdownSeparator key="separator-1">:</CountdownSeparator>,
      <CountdownUnitWrapper key="minutes">
        <CountdownUnit background="#2335D5">{minutes.toString().padStart(2, "0")}</CountdownUnit>
      </CountdownUnitWrapper>,
      <CountdownSeparator key="separator-2">:</CountdownSeparator>,
      <CountdownUnitWrapper key="seconds">
        <CountdownUnit background="#2335D5">{seconds.toString().padStart(2, "0")}</CountdownUnit>
      </CountdownUnitWrapper>
    ];

    return renderToString(<React.Fragment>{elements}</React.Fragment>);
  };

  return (
    <CountdownContainer>
        <CountdownText>Berakhir dalam</CountdownText>
      <div dangerouslySetInnerHTML={{ __html: formatTime(timeRemaining) }} />
     
    </CountdownContainer>
  );
};

export default Countdown;
