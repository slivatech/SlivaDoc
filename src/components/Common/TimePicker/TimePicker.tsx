import React, { useState, useRef } from "react";

interface TimePickerProps {
  label?: string;
  hour: string;
  minute: string;
  onHourChange: (value: string) => void;
  onMinuteChange: (value: string) => void;
  interval?: number;
  startHour?: number;
  endHour?: number;
}

const TimePicker: React.FC<TimePickerProps> = ({
  label,
  hour,
  minute,
  onHourChange,
  onMinuteChange,
  interval = 15,
  startHour = 0,
  endHour = 23,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (hour: number, minute: number) => {
    const hourStr = String(hour).padStart(2, "0");
    const minuteStr = String(minute).padStart(2, "0");

    onHourChange(hourStr);
    onMinuteChange(minuteStr);
    setIsOpen(false);

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const renderItems = () => {
    const items = [];

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const hourStr = String(hour).padStart(2, "0");
        const minuteStr = String(minute).padStart(2, "0");

        items.push(
          <li key={`${hourStr}-${minuteStr}`} onClick={() => handleItemClick(hour, minute)}>
            {hourStr}:{minuteStr}
          </li>
        );
      }
    }

    return items;
  };

  return (
    <div className="time-picker">
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        <input
          type="number"
          min="0"
          max="23"
          value={hour}
          onChange={(e) => onHourChange(e.target.value)}
          onFocus={toggleDropdown}
          onBlur={() => setIsOpen(false)}
          ref={inputRef}
        />
        <span className="colon">:</span>
        <input
          type="number"
          min="0"
          max="59"
          value={minute}
          onChange={(e) => onMinuteChange(e.target.value)}
          onFocus={toggleDropdown}
          onBlur={() => setIsOpen(false)}
          ref={inputRef}
        />
        <span className="caret" onClick={toggleDropdown}>
          &#x25BE;
        </span>
      </div>
      {isOpen && <ul className="dropdown-menu">{renderItems()}</ul>}
    </div>
  );
};

export default TimePicker;
