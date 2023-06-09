import { BookingStyle } from "../BookingDoctor/BookingDoctorPage";
import BookingWrapperComponent from "../../components/BookingComponents/BookingWrapperComponent";

import DoctorResultsList from "../../components/BookingComponents/DoctorResultsList";
import Tabs from "../../components/Common/Tabs/Tabs";
import Select from "../../components/Select/Select";
import {
  SearchWrapper,
  TimeDropdownContainer,
  TimePickerButton,
} from "../../components/BookingComponents/BookingStyle";
import useMediaQuery from "../../Hooks/useMediaQuery";
import BaseButton from "../../components/Common/Buttons/BaseButton";
import FilterTags from "../../components/BookingComponents/FilterTags";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useFilterDoctors } from "../../Hooks/useFilterDoctors";
import TimeComponent from "../../components/BookingComponents/TimeComponent";
import useClickOutside from "../../Hooks/useClickOutside";
import useSelect from "../../Hooks/useSelect";

const BookingPetHospitalPage = () => {
  const tablet = useMediaQuery("(min-width:1024px)");
  const { handleDay } = useFilterDoctors();

  return (
    <>
      <Navbar width={100} />
      <BookingStyle>
        <h1 style={{ fontSize: "24px" }}>Buat Janji Mudah dan Cepat</h1>
        <BookingWrapperComponent>
          <div
            style={{
              flex: 1,
              marginLeft: tablet ? "2rem" : "0",
              paddingTop: "1rem",
            }}
          >
            <>
              {!tablet ? (
                <div style={{ marginBottom: "1rem" }}>
                  <h1 style={{ fontSize: "16px", fontWeight: 400 }}>
                    Dokter Hewan Rekomendasi
                  </h1>

                  <TimeDropdownContainer>
                    <Select
                    
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
                      onChange={handleDay}
                      padding=".1rem .5rem"
                      iconEnd={<img src="/assets/arrow_dropdown.svg" />}
                    />
                    <TimeComponent />
                  </TimeDropdownContainer>
                </div>
              ) : null}
            </>
            <Tabs
              tabs={[
                {
                  title: "Klinik Hewan",
                  render: () => (
                    <>
                      <h1
                        style={{
                          fontSize: tablet ? "20px" : "12px",
                          fontWeight: 400,
                          margin: "1rem 0",
                        }}
                      >
                        Estimasi Biaya Penyakit Kulit
                      </h1>

                      {/* <p
                      style={{
                        color: "rgba(28, 28, 28, 0.7)",
                        fontWeight: 500,
                      }}
                    >
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
                      <DoctorResultsList isDoctorTab={false} />
                    </>
                  ),
                },
                {
                  title: "Dokter",
                  render: () => (
                    <>
                      {tablet ? (
                        <>
                          <h1
                            style={{
                              fontSize: "18px",
                              fontWeight: 400,
                              margin: "1rem 0",
                            }}
                          >
                            Dokter Hewan Rekomendasi
                          </h1>

                          <TimeDropdownContainer>
                            <div>

                            </div>
                            <Select
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
                              onChange={handleDay}
                              radius="5px"
                              padding=".1rem .5rem"
                              iconEnd={<img src="/assets/arrow_dropdown.svg" />}
                            />
                            <TimeComponent />
                          </TimeDropdownContainer>
                        </>
                      ) : null}

                      {/* <p
                      style={{
                        color: "rgba(28, 28, 28, 0.7)",
                        fontWeight: 500,
                        fontSize: tablet ? "12px" : "8px",
                      }}
                    >
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
                      {!tablet ? <FilterTags /> : null}
                      <DoctorResultsList isDoctorTab={true} />
                    </>
                  ),
                },
              ]}
            />

            {/* <DoctorResultsList /> */}
          </div>
        </BookingWrapperComponent>
      </BookingStyle>
      <Footer />
    </>
  );
};

export default BookingPetHospitalPage;
