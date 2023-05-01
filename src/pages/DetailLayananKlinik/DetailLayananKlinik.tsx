import React, { useState } from "react";
import {
  ConsultationContainer,
  Container,
  HeaderConsultation,
  ContainerInformasi,
  BookingContainer,
  Watch,
  WatchContent,
  WatchHead,
  ButtonContainer,
  CalendarContainer,
  InfoContainer,
  KlinikBanner,
  Price,
  LocationContainer,
  Location,
  LocationLogo,
} from "./DetailLayananKlinikStyle";
import CalendarComponent from "../../components/Calender/CalendarComponent";
import { data } from "./Datas";
import Button from "../../components/Common/Buttons/BaseButton";
import banner from "../../assets/image/KBanner.png";
import location from "../../assets/icon/location.png";
import locimage from "../../assets/image/locimage.png";
import TabSection from "../../components/DetailLayananKlinik/TabSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

interface DetailLayananKlinikProps {
  width: number;
}

const DetailLayananKlinik: React.FC<DetailLayananKlinikProps> = ({width}) => {
  const [selectedSchedule, setSelectedSchedule] = useState("");

  const handleScheduleClick = (schedule: string) => {
    setSelectedSchedule(schedule);
  };
  
  return (
    <>
      <Navbar width={width} />
      <Container>
        <ContainerInformasi>
          <InfoContainer>
            <KlinikBanner src={banner} alt="photo" />
            <Price>
              <h1>Swab Antigen Covid-19</h1>
              <p>Biaya</p>
              <h3>Rp.25.000</h3>
            </Price>
            <LocationContainer>
              
             <Location>
             <h1>Klinik Hewan Indonesia</h1>
             <div>
                <img src={location} alt="location" />
                <p>4.7 Km</p>
                </div>
              </Location>
              <LocationLogo src={locimage} />
            </LocationContainer>
            <TabSection />
          </InfoContainer>
        </ContainerInformasi>
        <BookingContainer>
          <ConsultationContainer>
            <HeaderConsultation>Atur Schedule Janji Anda</HeaderConsultation>
            <CalendarContainer>
              <CalendarComponent />
            </CalendarContainer>
            <Watch>
              {" "}
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <WatchHead>
                    <img src={item.imgSrc} alt={item.timePeriod} />
                    <h1>{item.timePeriod}</h1>
                  </WatchHead>
                  <WatchContent>
                    {item.schedule.map((schedule, index) => (
                      <div
                        key={index}
                        onClick={() => handleScheduleClick(schedule)}
                        className={selectedSchedule === schedule ? "selected" : ""}
                      >
                        {schedule}
                      </div>
                    ))}
                  </WatchContent>
                </React.Fragment>
              ))}
            </Watch>

            <ButtonContainer>
              <Button
                text="Buat Janji"
                textColor="#fff"
                color="#5296E5"
                fontSize="14px"
                radius="8px"
                height="40px"
                width="auto"
              />
            </ButtonContainer>
          </ConsultationContainer>
        </BookingContainer>
      </Container>
      <Footer />
    </>
  );
};

export default DetailLayananKlinik;
