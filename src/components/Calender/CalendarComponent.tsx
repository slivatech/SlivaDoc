import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import calenderIcon from "../../assets/icon/calender.png";

interface DatePickerProps {
  onClickIcon?: () => void;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: wrap;
  width: 100%;
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 1;
`;

const SelectedDatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const SelectedDate = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid rgba(153, 146, 146, 0.7);
  border-radius: 5px;

  padding: 12px;
  box-sizing: border-box;

  border: 0.5px solid rgba(153, 146, 146, 0.7);
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-top: 24px;
  left: 0;
  cursor: pointer;
  padding: 3px;
  border: 0.5px solid rgba(153, 146, 146, 0.7);
  border-radius: 3px;
  margin-right: 14px;
`;

const CalendarComponent: React.FC<DatePickerProps> = ({
  onClickIcon,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const minDate = new Date(); 

  const handleTileClick = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleIconClick = () => {
    if (onClickIcon) {
      onClickIcon();
    }
    setShowCalendar(!showCalendar);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return new Intl.DateTimeFormat("id-ID", options).format(date);
  }

  return (
    <Wrapper>
      <IconWrapper onClick={handleIconClick}>
        <img src={calenderIcon} alt="calendar" />
      </IconWrapper>
      {showCalendar && (
        <CalendarWrapper>
          <Calendar
            minDate={minDate}
            onClickDay={handleTileClick}
          />
        </CalendarWrapper>
      )}
      {selectedDate && (
        <SelectedDatesWrapper>
          <SelectedDate onClick={() => setSelectedDate(null)}>
            {formatDate(selectedDate)}
          </SelectedDate>
        </SelectedDatesWrapper>
      )}
    </Wrapper>
  );
};

export default CalendarComponent
