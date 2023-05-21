import { useState } from "react";
import Select from "../../components/Select/Select";
import BaseButton from "../../components/Common/Buttons/BaseButton";
import {
  AddNewScheduleSidebar,
  Overlay,
  StyledCalendar,
} from "./ScheduleListStyle";
import useClickOutside from "../../hooks/useClickOutside";
import useSelect from "../../hooks/useSelect";
import { schedules } from "./fakeData";
import TimePicker from "react-time-picker";
import { Value } from "react-time-picker/dist/cjs/shared/types";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import {
  LooseValue,
  Value as DateValue,
} from "react-calendar/dist/cjs/shared/types";
interface Props {
  handleClose: () => void;
  id?: string;
}
const AddScheduleContainer = ({ handleClose, id }: Props) => {
  const singleSchedule = schedules.find((schedule) => schedule.id === id);

  const date = new Date();
  const today = date.toLocaleDateString();

  const [openCalendar, setOpenCalendar] = useState<boolean>(false);

  const [startDate, setStartDate] = useState<LooseValue>();
  const handleStartDate = (dateValue: LooseValue) => {
    setStartDate(dateValue);
  };

  const [openTimePicker, setOpenTimePicker] = useState<boolean>(false);

  const [timeValue, setValue] = useState<Value>("");
  const onChange = (timeValue: Value) => {
    setValue(timeValue);
  };
  // const { handleClose: handleSelectLocationClose } = useSelect();

  const sidebarRef = useClickOutside<HTMLDivElement>(() => {
    handleClose();
  });

  const dateRef = useClickOutside<HTMLDivElement>(() => {
    setOpenCalendar(false);
  });
  const timeRef = useClickOutside<HTMLDivElement>(() => {
    setOpenTimePicker(false);
  });

  return (
    <Overlay>
      <AddNewScheduleSidebar ref={sidebarRef}>
        <form>
          <div className="header">
            <img
              src="/assets/back-arrow.svg"
              style={{ cursor: "pointer" }}
              onClick={handleClose}
            />
            <h2>{id ? "Edit consultation" : "Add a new consultation"}</h2>
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <div className="inputWrapper">
              <label htmlFor="">Start Date</label>

              <div className="input" ref={dateRef}>
                <div className="btn">
                  {startDate
                    ? startDate!
                        .toLocaleString()
                        .slice(0, startDate!.toLocaleString().indexOf(","))
                    : singleSchedule?.date}
                  {/* {singleSchedule
                    ? singleSchedule.date
                    : startDate!
                        .toLocaleString()
                        .slice(0, startDate!.toLocaleString().indexOf(","))} */}
                </div>
                <div
                  className="icon"
                  onClick={() => setOpenCalendar(!openCalendar)}
                >
                  <img src="/assets/calendar-schedule.svg" />
                </div>
                <div className="dropdown">
                  {openCalendar ? (
                    <StyledCalendar onChange={handleStartDate} minDate={date} />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="inputWrapper">
              <label htmlFor="">Time</label>

              <div className="input">
                <div className="btn">
                  {timeValue ? timeValue : singleSchedule?.time}
                </div>

                <div
                  className="icon"
                  onClick={() => setOpenTimePicker(!openTimePicker)}
                >
                  <img src="/assets/time-circle-purple.svg" />
                </div>
              </div>
              {openTimePicker ? (
                <div ref={timeRef}>
                  <TimePicker
                    format="h:m a"
                    onChange={onChange}
                    value={timeValue}
                  />
                </div>
              ) : null}
            </div>
            <div className="inputWrapper">
              <label htmlFor="">Price</label>

              <div className="input">
                <span className="currency">Rp. </span>
                <input
                  type="number"
                  defaultValue={singleSchedule ? singleSchedule.price : 0}
                />
              </div>
            </div>
            <div className="inputWrapper">
              <label htmlFor="">Location</label>
              <div style={{ marginTop: "1rem" }}>
                <Select
                  radius="10px"
                  border="none"
                  background="#f1f4fa"
                  onChange={()=>null}
                  label="Choose Location"
                  defaultValue={singleSchedule?.location}
                  iconEnd={<img src="/assets/arrow_dropdown2.svg" />}
                  values={["Online", "Clinic"]}
                  iconStart={<img src="/assets/location-schedule.svg" />}
                />
              </div>
            </div>
          </div>

          <BaseButton
            radius="10px"
            height="40px"
            iconStart={<img src="/assets/download.svg" />}
            color="#3A36DB"
            textColor="white"
            text="Save Sliva Ads"
          ></BaseButton>
        </form>
      </AddNewScheduleSidebar>
    </Overlay>
  );
};

export default AddScheduleContainer;
