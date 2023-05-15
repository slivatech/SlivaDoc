import styled from "styled-components";
import useMediaQuery from "../../Hooks/useMediaQuery";
import BaseButton from "../Common/Buttons/BaseButton";
import { StyledAppointment } from "./TabSectionStyle";

interface AppointmentProps {
  image: string;
  title: string;
  category: string;
  price: number;
  yearExperience?: number;
  satisfaction?: number;
  isDoctorAppoinment?: boolean;
}

const Badges = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const AppointmentBox = ({
  image,
  title,
  category,
  price,
  yearExperience,
  satisfaction,
  isDoctorAppoinment,
}: AppointmentProps) => {
  const desktop = useMediaQuery("(min-width: 768px)");
  return (
    <StyledAppointment>
      <img src={image} alt="appointment" />
      <div className="appointmentInfo">
        <p className="title">{title}</p>
        <p className="cat">{category}</p>
        {isDoctorAppoinment ? (
          <Badges>
            <BaseButton
              gap=".4rem"
              fontSize="8px"
              iconStart={
                <img
                  src="/assets/portfolio.svg"
                  style={{ width: "10px", height: "10px" }}
                  alt=""
                />
              }
              radius="5px"
              width="59px"
              height="16px"
              text={`${yearExperience} years`}
              color="#ECE4E4"
              textColor="#1c1c1c"
            />
            <BaseButton
              gap=".4rem"
              fontSize="8px"
              iconStart={
                <img
                  src="/assets/review.svg"
                  style={{ width: "10px", height: "10px" }}
                  alt="review"
                />
              }
              radius="5px"
              width="59px"
              height="16px"
              text={`${satisfaction}%`}
              color="#ECE4E4"
              textColor="#1c1c1c"
            />
          </Badges>
        ) : null}
        <p>{isDoctorAppoinment ? "Mulai dari" : "Biaya"}</p>
        <p className="price">Rp {price}</p>
      </div>
      <div style={{ alignSelf: "end", marginLeft: "auto" }}>
        <BaseButton
          fontSize={desktop ? "14px" : "10px"}
          text={isDoctorAppoinment ? "Buat Janji" : "Pilih Dokter"}
          textColor="white"
          width={desktop ? "156px" : "90px"}
          height={desktop ? "32px" : "24px"}
          color="linear-gradient(0deg,rgba(144, 170, 209, 1) 0%,rgba(82, 150, 229, 1) 100%)"
          radius="5px"
        />
      </div>
    </StyledAppointment>
  );
};

export default AppointmentBox;
