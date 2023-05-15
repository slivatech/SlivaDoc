import styled from "styled-components";
import BookingWrapperComponent from "../../components/BookingComponents/BookingWrapperComponent";
import { TimeDropdownContainer } from "../../components/BookingComponents/BookingStyle";
import Select from "../../components/Select/Select";
import DoctorResultsList from "../../components/BookingComponents/DoctorResultsList";
import useMediaQuery from "../../Hooks/useMediaQuery";
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
                values={[
                  "Senin",
                  "Selasa",
                  "Rabu",
                  "Kamis",
                  "Jumat",
                  "Sabtu",
                  "Minggu",
                ]}
                radius="5px"
                iconEnd={<img src="/assets/arrow_dropdown.svg" />}
              />
              <Select
                onChange={() => null}
                border=" 0.5px solid rgba(153, 146, 146, 0.7)"
                label="Pilih Jam"
                values={["08.00 - 09.00", "14.00 - 15.00", "20.00 - 21.00"]}
                radius="5px"
                iconEnd={<img src="/assets/arrow_dropdown.svg" />}
              />
            </TimeDropdownContainer>

            {/* <p style={{ color: "rgba(28, 28, 28, 0.7)", fontWeight: 500 }}>
            Menampilkan{" "}
            <span
              style={{
                fontWeight: 700,
                color: "rgba(59, 32, 232, 0.7) 32, 232)",
              }}
            >
              150
            </span>{" "}
            hasil
          </p> */}
            <DoctorResultsList isDoctorTab={true} />
          </div>
        </BookingWrapperComponent>
      </BookingStyle>
      <Footer />
    </>
  );
};

export default BookingDoctorPage;
