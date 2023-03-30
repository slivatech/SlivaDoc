import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import calenderIcon from "../../assets/icon/calender.png";

interface MultipleDatePickerProps {
  onClickIcon?: () => void;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: wrap;
  width:100%;
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top:30px;
  left: 0;
  z-index: 1;
`;

const SelectedDatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const SelectedDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid rgba(153, 146, 146, 0.7);
  border-radius: 5px;
  margin-left:10px;
  margin-bottom:10px;
  padding: 3px;
  box-sizing: border-box;
  width: 132px;
height: 27px;
border: 0.5px solid rgba(153, 146, 146, 0.7);
border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const IconWrapper = styled.div`
  margin-top:10px;
  left: 0;
  cursor: pointer;
`;

const CalendarComponent: React.FC<MultipleDatePickerProps> = ({
  onClickIcon,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const handleTileClick = (date: Date) => {
    const selectedDateIndex = selectedDates.findIndex(
      (selectedDate) =>
        selectedDate.getDate() === date.getDate() &&
        selectedDate.getMonth() === date.getMonth() &&
        selectedDate.getFullYear() === date.getFullYear()
    );
    if (selectedDateIndex === -1) {
      setSelectedDates([...selectedDates, date]);
    } else {
      const updatedDates = [...selectedDates];
      updatedDates.splice(selectedDateIndex, 1);
      setSelectedDates(updatedDates);
    }
  };

  const handleIconClick = () => {
    if (onClickIcon) {
      onClickIcon();
    }
    setShowCalendar(!showCalendar);
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }

  return (
    <Wrapper>
      <IconWrapper onClick={handleIconClick}>
        <img src={calenderIcon} alt="calendar" />
      </IconWrapper>
      {showCalendar && (
        <CalendarWrapper>
          <Calendar onClickDay={handleTileClick} />
        </CalendarWrapper>
      )}
      <SelectedDatesWrapper>
        {selectedDates.map((date) => (
          <SelectedDate key={date.toDateString()} onClick={() => handleTileClick(date)}>
            {formatDate(date)}
          </SelectedDate>
        ))}
      </SelectedDatesWrapper>
    </Wrapper>
  );
};

export default CalendarComponent;