import { useState } from "react";
import Select from "../../components/Select/Select";
import BaseButton from "../../components/Common/Buttons/BaseButton";
import {
  AddNewScheduleSidebar,
  Overlay,
  StyledCalendar,
} from "./ScheduleListStyle";
import TimePicker from "../../components/Common/TimePicker/TimePicker";
import useClickOutside from "../../hooks/useClickOutside";
import useSelect from "../../hooks/useSelect";
import { schedules } from "./fakeData";

interface Props {
  handleClose: () => void;
  id?:string;
}
const AddScheduleContainer = ({ handleClose,id }: Props) => {
  const singleSchedule = schedules.find((schedule)=>schedule.id === id);
  

  const date = new Date();
  const today = date.toLocaleDateString();
  const now = date.getHours() + ":" + date.getMinutes();

  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const [openTimePicker, setOpenTimePicker] = useState<boolean>(false);
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("00");

  const handleHourChange = (value: string) => {
    setHour(value);
  };

  const handleMinuteChange = (value: string) => {
    setMinute(value);
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
        <div className="header">
          <img
            src="/assets/back-arrow.svg"
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          />
          <h2>Add a new consultation</h2>
        </div>
        <form>
          <div style={{ marginBottom: "2rem" }}>
            <div className="inputWrapper">
              <label htmlFor="">Start Date</label>

              <div className="input" ref={dateRef}>
                <div className="btn">
                  {singleSchedule ? singleSchedule.date : today}  
                </div>
                <div
                  className="icon"
                  onClick={() => setOpenCalendar(!openCalendar)}
                >
                  <img src="/assets/calendar-schedule.svg" />
                </div>
                <div className="dropdown">
                  {openCalendar ? <StyledCalendar minDate={date} /> : null}
                </div>
              </div>
            </div>
            <div className="inputWrapper">
              <label htmlFor="">Time</label>

              <div className="input" ref={timeRef}>
                <div className="btn">{singleSchedule ? singleSchedule.time : now}</div>

                <div
                  className="icon"
                  onClick={() => setOpenTimePicker(!openTimePicker)}
                >
                  <img src="/assets/time-circle-purple.svg" />
                </div>
              </div>
              {openTimePicker ? (
                <TimePicker
                  label="Select a time"
                  hour={hour}
                  minute={minute}
                  onHourChange={handleHourChange}
                  onMinuteChange={handleMinuteChange}
                  interval={30}
                  startHour={8}
                  endHour={18}
                />
              ) : null}
            </div>
            <div className="inputWrapper">
              <label htmlFor="">Price</label>

              <div className="input">
                <span className="currency">Rp. </span>
                <input type="number" defaultValue={singleSchedule ? singleSchedule.price : 0}/>
              </div>
            </div>
            <div className="inputWrapper">
              <label htmlFor="">Location</label>
              <div style={{ marginTop: "1rem" }}>
                <Select
                  radius="10px"
                  border="none"
                  background="#f1f4fa"
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
