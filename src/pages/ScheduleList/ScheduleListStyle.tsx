import styled from "styled-components";
import ReactCalendar from "react-calendar";

export const ScheduleListStyle = styled.div`
  background: #f1f4fa;
  height: 100vh;
  overflow-y: hidden;
  width: 100%;
  padding: 1rem;
  transition: margin-right 0.5s;
  color: "#06152B";
  overflow: hidden;
  padding-bottom: 4rem;
  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 25px;
  }
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
  .location {
    display: flex;
    width: 75%;
    padding: 0 1rem;
    gap: 0.5rem;
    border-radius: 50px;
    align-items: center;
    color: #3a36db;
    background-color: rgba(58, 54, 219, 0.1);
  }
  .column {
    font-size: 14px;
    color: #06152b;
  }
`;

export const ScheduleSidebar = styled.aside`
  padding: 1rem;
  background-color: white;
  flex: 0.2;
  border-radius: 5px;
  height: 90vh;

  /* .createBtn {
        background: #3A36DB;
        border-radius: 7px;
    } */
`;

export const EditColumn = styled.div`
  background: rgba(3, 168, 158, 0.1);
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: grid;
  cursor: pointer;
  place-items: center;
`;
export const DeleteColumn = styled.div`
  background: rgba(255, 105, 180, 0.1);
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: grid;
  cursor: pointer;

  place-items: center;
`;

export const Overlay = styled.div`
  background-color: #00000057;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 50;
`;

export const AddNewScheduleSidebar = styled.div`
  width: 25%;
  min-height: 90vh;
  background: white;
  position: absolute;
  top: 0;
  z-index: 50;
  right: 0;
  bottom: 0;
  padding: 1rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .header {
    display: flex;
    gap: 2rem;
    align-items: center;
    h2 {
      font-size: 18px;
      color: #06152b;
      font-weight: 500;
    }
  }

  form {
    .inputWrapper {
      margin-top: 1rem;
      label {
        font-weight: 500;
        color: #06152b;
      }
    }

    .input {
      border-radius: 10px;
      margin-top: 1rem;
      background-color: #f1f4fa;
      width: 100%;
      padding: 1rem 0.5rem;
      position: relative;
      display: flex;
      align-items: center;
      font-size: 14px;

      .btn {
        width: 100%;
        height: 100%;
        background: transparent;
      }
      .dropdown {
        position: absolute;
        z-index: 50;
        top: 110%;
        left: 0;
      }

      .icon {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 8px;
        cursor: pointer;
        right: 20px;
        &:hover {
          background: rgba(255, 105, 180, 0.1);
        }
        border-radius: 50%;
        display: grid;
        place-items: center;
      }
      input {
        outline: none;
        font-size: 14px;
        width: 100%;
        border: none;
        background-color: transparent;
        height: 100%;
      }
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  }
`;

export const StyledCalendar = styled(ReactCalendar)`
  &.react-calendar {
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

export const DeleteModalStyle = styled.div`
  background: white;
  border-radius: 10px;
  max-width: 500px;
  height: 244px;
  position: absolute;
  margin: 0 auto;
  z-index: 50;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);

  p {
    font-size: 22px;
    max-width: 75%;
    text-align: center;
    margin: 0 auto;
    font-weight: 700;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  div {
    font-weight: 400;
  }
`;
