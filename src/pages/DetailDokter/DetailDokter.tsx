import React, { useState } from "react";
import { ConsultationContainer, Container,DoctorSTR, DoctorAbout, DoctorInfoContainer, DoctorName, DoctorPhoto, DoctorSpecialty, ExperienceContainer, ExperienceDescription, ExperienceHeader, HeaderConsultation, HeaderExperience, HeaderInfo, InfoContainer, InfoDescription, List, Profile, ContainerInformasi, BookingContainer, DropdownWrap, Watch, WatchContent, WatchHead, ButtonContainer, CalendarContainer } from "./DetailDokterStyle";
import Dropdown from "../../components/Common/Dropdown/Dropdown";
import CalendarComponent from "../../components/Calender/CalendarComponent";
import { consultType, data, doctor,rate } from "./Datas";
import Button from "../../components/Common/Buttons/BaseButton";



const DetailDokter: React.FC = () => {
  const [type, setType] = useState()

  return (
    <Container>
      <ContainerInformasi>
      <InfoContainer>
        <DoctorInfoContainer>
          <DoctorPhoto src={doctor.photo} alt="Foto Dokter" />
          <Profile>
            <DoctorName>{doctor.name}</DoctorName>
            <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
            <DoctorSTR>STR {doctor.STR}</DoctorSTR>
   
            <DoctorAbout>
          {rate.map((item, index) => (
            <div key={index}>
              <img src={item.icon} alt={`Icon ${index}`} />
              <p>{item.text}</p>
            </div>
          ))}
          </DoctorAbout>
          </Profile>
        </DoctorInfoContainer>
        <ExperienceContainer>
          <ExperienceHeader>Informasi</ExperienceHeader>
          <HeaderInfo>Tentang Dokter</HeaderInfo>
          <InfoDescription>{doctor.about}</InfoDescription>
          <HeaderExperience>Pengalaman Praktik </HeaderExperience>
          {doctor.experienceDetails.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceDescription>{experience}</ExperienceDescription>
            <InfoDescription>{doctor.experienceTime[index]}</InfoDescription>
          </React.Fragment>
          ))}
           
           <HeaderExperience>Pendidikan Terakhir </HeaderExperience>
            {doctor.education.map((edu, index) => (
              <React.Fragment key={index}>
                <ExperienceDescription>{edu}</ExperienceDescription>
                  <InfoDescription>{doctor.graduation[index]}</InfoDescription>
              </React.Fragment>
            ))}
          <HeaderExperience>Tindakan Medis</HeaderExperience>
          <List>
          {doctor.medicalTreatment.map((treatment, index) => (
            <li key={index}>{treatment}</li>
          ))}
          </List>
        </ExperienceContainer>
      </InfoContainer>
      </ContainerInformasi>
      <BookingContainer>
      <ConsultationContainer>
        <HeaderConsultation>Tipe Konsultasi</HeaderConsultation>
       <DropdownWrap>
      <Dropdown
          options={consultType}
          border='0.5px solid rgba(153, 146, 146, 0.7);'
          fontSize="15px"
          value={type}
          setValue={setType}
          width= "363px"
          height="39px"
      />
       </DropdownWrap>
       <CalendarContainer>
       <CalendarComponent  />
       </CalendarContainer>
       <Watch> {data.map((item, index) => (
    <React.Fragment key={index}>
      <WatchHead>
        <img src={item.imgSrc} alt={item.timePeriod} />
        <h1>{item.timePeriod}</h1>
      </WatchHead>
      <WatchContent>
        {item.schedule.map((schedule, index) => (
          <div key={index}>{schedule}</div>
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
      height='40px'
      width='auto'
      />
      </ButtonContainer>
      </ConsultationContainer>

      </BookingContainer>
    </Container>
  );
};

export default DetailDokter;
