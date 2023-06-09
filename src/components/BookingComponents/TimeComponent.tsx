import { useState } from "react";
import { TimePickerButton, TimePickerDropdown } from "./BookingStyle";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import useClickOutside from "../../Hooks/useClickOutside";
import { LooseValue } from "react-calendar/dist/cjs/shared/types";
import { useDispatch } from "react-redux";
import {
  setEndTime,
  setStartTime,
} from "../../features/filterSlices/filterSlice";
import { useAppSelector } from "../../store/hooks";
const TimeComponent = () => {
  const dispatch = useDispatch();
  const { endTime, startTime } = useAppSelector(
    (state) => state.filter.availableTime
  );
  // const [startSeconds, setStartSeconds] = useState<number>(today.getSeconds());
  // const [endSeconds, setEndSeconds] = useState<number>(today.getSeconds());

  const [isOpen, setOpen] = useState<boolean>(false);
  // const [startTime, setStartTime] = useState<LooseValue>(today);
  // const [endTime, setEndTime] = useState<LooseValue>(today);
  const timeRef = useClickOutside<HTMLDivElement>(() => {
    setOpen(false);
  });

  const handleStartChange = (timeValue: LooseValue) => {
    dispatch(setStartTime(timeValue));
  };

  const handleEndChange = (timeValue: LooseValue) => {
    dispatch(setEndTime(timeValue));
  };

  return (
    <>
      <TimePickerButton onClick={() => setOpen(true)}>
        <span>
          {endTime || startTime  ?`${startTime} - ${endTime}` :"Pilih Waktu"}
        </span>
        <img src="/assets/arrow_dropdown.svg" />
      </TimePickerButton>
      {isOpen ? (
        <TimePickerDropdown ref={timeRef}>
          <p>Start Time</p>
          <TimePicker value={startTime} onChange={handleStartChange} />
          <p>End Time</p>
          <TimePicker value={endTime} onChange={handleEndChange} />
        </TimePickerDropdown>
      ) : null}
    </>
  );
};

export default TimeComponent;
