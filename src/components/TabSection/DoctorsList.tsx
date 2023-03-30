import React from "react";
import AppointmentBox from "./AppointmentBox";
import { doctorAppointments } from "./fakeData";

const DoctorsList = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"1rem",marginTop:"1rem"}}>
      {doctorAppointments.map((appointment, i) => (
        <AppointmentBox isDoctorAppoinment={true} key={i} {...appointment} />
      ))}
    </div>
  );
};

export default DoctorsList;
