import BaseButton from "../Common/Buttons/BaseButton";
import { StyledAppointment } from "./TabSectionStyle";

interface AppointmentProps {
  image: string;
  title: string;
  category: string;
  price: number;
  yearExperience?:number;
  satisfaction?:number;
  isDoctorAppoinment?:boolean;
}



const AppointmentBox = ({
  image,
  title,
  category,
  price,  
  yearExperience,
  satisfaction,
  isDoctorAppoinment,
}: AppointmentProps) => {
  return (
    <StyledAppointment>
      <img src={image} alt="appointment" />
      <div className="appointmentInfo">
        <p className="title">{title}</p>
        <p className="cat">{category}</p>
        {isDoctorAppoinment ? (
            <div style={{display:"flex",gap:'.5rem'}}>
                
                <BaseButton gap='.4rem' fontSize="8px" iconStart={<img src="/assets/portfolio.svg" style={{width:"10px",height:"10px"}} />} radius="5px" width="59px" height="16px" text={`${yearExperience} years`} color="#ECE4E4" textColor="#1c1c1c" />
                <BaseButton gap='.4rem' fontSize="8px" iconStart={<img src="/assets/review.svg" style={{width:"10px",height:"10px"}} />} radius="5px" width="59px" height="16px" text={`${satisfaction}%`} color="#ECE4E4" textColor="#1c1c1c" />
            </div>
        ):null}
        <p>{isDoctorAppoinment ? "Mulai dari" : "Biaya"}</p>
        <p className="price">Rp {price}</p>
      </div>
      <div style={{alignSelf:"end",marginLeft:"auto"}}>
        <BaseButton text={isDoctorAppoinment ? "Buat Janji" : "Pilih Dokter"} textColor="white" width="156px" height="32px" color="linear-gradient(0deg,rgba(144, 170, 209, 1) 0%,rgba(82, 150, 229, 1) 100%)" radius="5px" />

      </div>
    </StyledAppointment>
  );
};

export default AppointmentBox;
