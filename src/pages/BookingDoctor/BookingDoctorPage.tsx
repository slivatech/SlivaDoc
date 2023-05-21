import styled from "styled-components";
import BookingWrapperComponent from "../../components/BookingComponents/BookingWrapperComponent";
import { TimeDropdownContainer } from "../../components/BookingComponents/BookingStyle";
import Select from "../../components/Select/Select";
import DoctorResultsList from "../../components/BookingComponents/DoctorResultsList";
import useMediaQuery from "../../hooks/useMediaQuery";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export const BookingStyle = styled.div`
  padding: 2rem 8%;
  position: relative;
  overflow: hidden;
  max-width: 1920px;
  margin: 0 auto;
  h1 {
    font-size: 24px;
  }
  @media (min-width: 1024px) {
    padding: 1rem 4;
  }
`;

const BookingDoctorPage = () => {
  const tablet = useMediaQuery("(min-width:1024px)");
  return (
    <>
      <Navbar width={100} />
      <BookingStyle>
        <h1 style={{ fontSize: "24px" }}>Konsultasi Mudah dan Cepat</h1>
        <BookingWrapperComponent>
          <div
            style={{
              flex: 1,
              paddingTop: "1rem",
              marginLeft: tablet ? "2rem" : 0,
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: 400 }}>
              Nikmati Layanan Bersama Dokter Hewan Terbaik
            </h1>
            <TimeDropdownContainer>
              <Select
                onChange={() => null}
                border=" 0.5px solid rgba(153, 146, 146, 0.7)"
                label="Pilih Hari"
                values={["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]}
                radius="5px"
                iconEnd={<img src="/assets/arrow_dropdown.svg" alt="arrow-dropdown"/>}
              />
              <Select
                onChange={() => null}
                border=" 0.5px solid rgba(153, 146, 146, 0.7)"
                label="Pilih Jam"
                values={["08.00 - 11.59", "12.00 - 14.59","15.00 - 17.59", "18.00 - 21.00"]}
                radius="5px"
                iconEnd={<img src="/assets/arrow_dropdown.svg" alt="arrow"/>}
              />
            </TimeDropdownContainer>
            <DoctorResultsList isDoctorTab={true} />
          </div>
        </BookingWrapperComponent>
      </BookingStyle>
      <Footer />
    </>
  );
};

export default BookingDoctorPage;
