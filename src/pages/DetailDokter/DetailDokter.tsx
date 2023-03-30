import React, { useState } from "react";
import { ConsultationContainer, Container,DoctorSTR, DoctorAbout, DoctorInfoContainer, DoctorName, DoctorPhoto, DoctorSpecialty, ExperienceContainer, ExperienceDescription, ExperienceHeader, HeaderConsultation, HeaderExperience, HeaderInfo, InfoContainer, InfoDescription, List, Profile, ContainerInformasi, BookingContainer, DropdownWrap, Watch, WatchContent, WatchHead, ButtonContainer } from "./DetailDokterStyle";
import img from "../../assets/doctor.png"
import Dropdown from "../../components/Common/Dropdown/Dropdown";
import CalendarComponent from "../../components/Calender/CalendarComponent";
import morning from "../../assets/icon/morning.png"
import sun from "../../assets/icon/sun.png"
import night from "../../assets/icon/night.png"
import Button from "../../components/Common/Buttons/BaseButton";

interface Doctor {
  name: string;
  specialty: string;
  STR: string;
  photo: string;
  about: string;
  experienceTime: string;
  experienceDetails: string;
  education: string;
  graduation: number;
  medicalTreatment: String[];
}

const doctor: Doctor = {
  name: "Dr.Evans moris",
  specialty: "Spesialis Kepo apa aja",
  STR: "1221 6023 2012 2045",
  photo: img,
  about: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numuam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid",
  experienceTime:"2021 - Sekarang",
  experienceDetails:
    "Praktik Pribadi - Pekanbaru",
  education:"Fakultas Kedokteran Hewan - Universitas Indonesia",
  graduation:2012,
  medicalTreatment:["Operasi Kandungan","Lion Cut","Grooming","Pencabutan Gigi", "Pengobatan Gigi Sensitif"],
};

const consultType = [
  {
      value: 'VideoCall'
  },
  {
      value: 'Chat'
  },
]
const data = [
  { timePeriod: 'Pagi', imgSrc: morning, schedule: ['08:00 - 12:00', '08:00 - 12:00'] },
  { timePeriod: 'Siang', imgSrc: sun, schedule: ['08:00 - 12:00', '08:00 - 12:00'] },
  { timePeriod: 'Malam', imgSrc: night, schedule: ['08:00 - 12:00', '08:00 - 12:00'] }
];


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
            <DoctorAbout>3tahun</DoctorAbout>
          </Profile>
        </DoctorInfoContainer>
        <ExperienceContainer>
          <ExperienceHeader>Informasi</ExperienceHeader>
          <HeaderInfo>Tentang Dokter</HeaderInfo>
          <InfoDescription>{doctor.about}</InfoDescription>
          <HeaderExperience>Pengalaman Praktik
          <ExperienceDescription>{doctor.experienceDetails}</ExperienceDescription>
          </HeaderExperience>
          <InfoDescription>{doctor.experienceTime}</InfoDescription>
          <HeaderExperience>Pendidikan Terakhir
          <ExperienceDescription>{doctor.education}</ExperienceDescription>
          </HeaderExperience>
          <InfoDescription>{doctor.graduation}</InfoDescription>
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
       <CalendarComponent  />
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
      />
      </ButtonContainer>
      </ConsultationContainer>

      </BookingContainer>
    </Container>
  );
};

export default DetailDokter;
