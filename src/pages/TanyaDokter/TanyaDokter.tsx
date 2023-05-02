import React, { useCallback, useEffect, useState } from "react";
import {
  ColumnContainer,
  Container,
  FilterContainer,
  SliderContainer,
  WrapperContainer,
  Title,
  Heading,
  Link,
  Banner,
  ImgBanner,
  DescBanner,
  ButtonContainer,
  ContainerDesc,
  DoctorGrid,
  ButtonGrid,
} from "./TanyaDokterStyle";
import Slider from "../../components/Slider/Slider";
import { sliderData, data, doctors } from "./datas";
import HargaKonsultasiFilter from "../../components/Filter/HargaKonsultasiFilter.tsx";
import HasilFilter from "../../components/Filter/HasilFilter";
import PengalamanPraktikFilter from "../../components/Filter/PengalamanPraktikFilter";
import ConsultImg from "../../assets/consult.png";
import Button from "../../components/Common/Buttons/BaseButton";
import DoctorList from "../../components/DoctorList/DoctorList";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

interface TanyaDokterProps {
  width: number;
}

const TanyaDokter: React.FC<TanyaDokterProps> = ({ width }) => {
  const [hargaKonsultasi, setHargaKonsultasi] = useState("");
  const [pengalamanPraktik, setPengalamanPraktik] = useState("");

  const handleHargaKonsultasiChange = (value: string) => {
    setHargaKonsultasi(value);
  };

  const handlePengalamanPraktikChange = (value: string) => {
    setPengalamanPraktik(value);
  };

  const filterData = useCallback(() => {
    let filteredData = data;
    if (hargaKonsultasi !== "") {
      if (hargaKonsultasi === "<50000") {
        filteredData = filteredData.filter((d) => d.hargaKonsultasi < 50000);
      } else if (hargaKonsultasi === "50000-100000") {
        filteredData = filteredData.filter(
          (d) => d.hargaKonsultasi >= 50000 && d.hargaKonsultasi <= 100000
        );
      } else if (hargaKonsultasi === ">=100000") {
        filteredData = filteredData.filter((d) => d.hargaKonsultasi >= 100000);
      }
    }

    if (pengalamanPraktik !== "") {
      if (pengalamanPraktik === "<5") {
        filteredData = filteredData.filter((d) => d.pengalamanPraktik < 5);
      } else if (pengalamanPraktik === "5-10") {
        filteredData = filteredData.filter(
          (d) => d.pengalamanPraktik >= 5 && d.pengalamanPraktik <= 10
        );
      } else if (pengalamanPraktik === ">10") {
        filteredData = filteredData.filter((d) => d.pengalamanPraktik > 10);
      }
    }

    return filteredData;
  }, [hargaKonsultasi, pengalamanPraktik]);

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(filterData());
  }, [filterData, hargaKonsultasi, pengalamanPraktik]);

  const [limit, setLimit] = useState(2);

  return (
    <>
      <Navbar width={width} />
      <Container>
        <ColumnContainer>
          <SliderContainer>
            <Slider images={sliderData} />
          </SliderContainer>
          <FilterContainer>
            <Heading>
              <Title>Filter</Title>
              <Link>Reset</Link>
            </Heading>
            <HargaKonsultasiFilter
              selectedValue={hargaKonsultasi}
              onValueChange={handleHargaKonsultasiChange}
              value={""}
              onChange={function (value: string): void {
                throw new Error("Function not implemented.");
              }}
            />
            <PengalamanPraktikFilter
              selectedValue={pengalamanPraktik}
              onValueChange={handlePengalamanPraktikChange}
              value={""}
              onChange={function (value: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </FilterContainer>
        </ColumnContainer>
        <WrapperContainer>
          <Heading>
            <ContainerDesc>
              <Title>Rekomendasi Dokter</Title>
              <p>Konsultasi online dengan dokter siaga kami</p>
            </ContainerDesc>
            <Link>Lihat Semua</Link>
          </Heading>
          {filteredData.length > 0 ? (
            <HasilFilter data={filteredData.slice(0, 2)} text={""} />
          ) : (
            <HasilFilter text="Tidak ada yang cocok" data={[]} />
          )}
          <Banner>
            <ImgBanner src={ConsultImg} />
            <DescBanner>
              <h1>Konsultasi Instan</h1>
              <p>Tanya dokter untuk buat resep.</p>
            </DescBanner>
            <ButtonContainer>
              <Button
                text="Mulai Konsultasi"
                textColor="#fff"
                color="#5296E5"
                fontSize="14px"
                radius="5px"
                height="32px"
                width="156px"
              />
            </ButtonContainer>
          </Banner>
          <DoctorGrid>
            <ContainerDesc>
              <Title>Cari Dokter atau Spesialisasi</Title>
              <p>Pilih kategori yang tersedia sesuai kondisimu</p>
            </ContainerDesc>
            <DoctorList doctors={doctors} />
            <ButtonGrid>
              <Button
                text="Tampilkan lebih banyak"
                textColor="#040000"
                color="#ECE4E4"
                fontSize="14px"
                radius="5px"
                height="35px"
                width="179px"
                outline={false}
              />
            </ButtonGrid>
          </DoctorGrid>
        </WrapperContainer>
      </Container>
      <Footer />
    </>
  );
};

export default TanyaDokter;
