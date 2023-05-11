import React from "react";
import styled from "styled-components";
import ReactCalendar from "react-calendar";

interface CalendarProps {
  /**
   * Minimum date that the user can select.
   */
  minDate?: Date;
  /**
   * Maximum date that the user can select.
   */
  maxDate?: Date;
  /**
   * Calendar date value.
   * If you wish to use Calendar in an uncontrolled way, use defaultValue instead.
   */
  value?: Date;
  /**
   * Calendar value that shall be selected initially
   * If you wish to use Calendar in an controlled way, use value instead.
   */
  defaultValue?: Date;
  /**
   * A callback function called when the user clicks an item.
   */
  onChange?: (date: Date | Date[]) => any;

  /**
   * Width of the calender.
   */

  width?: string;
}

type StyledCalendarProps = {
  width?: string;
};

const StyledCalendar: any = styled(ReactCalendar)<StyledCalendarProps>`
  &.react-calendar {
    width: ${({ width }) => width || "200px"};
    max-width: 100%;
    background: #ffffff;
    font-feature-settings: "liga", "kern";
    line-height: 0em;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  &.react-calendar,
  &.react-calendar *,
  &.react-calendar *:before,
  &.react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  &.react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  &.react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    background-color: #f0f0f0;
    color: #4a4a4a;
  }
  .react-calendar__navigation button {
    min-width: 22px;
    background: none;
    color: #4a4a4a;
    font-size: 1.5em;
  }
  .react-calendar__navigation button:nth-child(3) {
    font-size: 0.8em;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
    color: #cccccc;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    /* text-transform: uppercase; */
    /* font-weight: bold; */
    font-size: 0.55em;
    padding: 1.2em 0;
    background-color: #f0f0f0;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--weekend {
    /* color: #d10000; */
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    color: #333333;
    font-size: 0.7em;
    max-width: 100%;
    text-align: center;
    padding: 0.4em 0.6em;
    background-color: #f0f0f0;
    border: 1px solid #f6f6f6 !important;
  }
  .react-calendar__tile:disabled {
    background-color: #ffffff;
    /* color: #333333; */
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    /* background-color: #e6e6e6; */
  }
  .react-calendar__tile--now {
    /* background: #ffff76; */
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    /* background: #ffffa9; */
  }
  .react-calendar__tile--hasActive {
    /* background: #76baff; */
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    /* background: #a9d4ff; */
  }
  .react-calendar__tile--active {
    color: #006edc;
    /* color: white; */
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    /* background: #1087ff; */
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    /* background-color: #e6e6e6; */
  }
`;

const Calendar: React.FC<CalendarProps> = ({
  minDate,
  maxDate,
  value,
  defaultValue,
  onChange,
  width,
}) => {
  return (
    <StyledCalendar
      minDate={minDate}
      maxDate={maxDate}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      width={width}
    />
  );
};

export default Calendar;
