import React from "react";
import HeroClinic from "../../components/HeroClinic/HeroClinic";
import TabSection from "../../components/TabSection/TabSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

interface DetailKlinikProps {
  width: number;
}

const DetailKlinik: React.FC<DetailKlinikProps> = ({ width }) => {
  return (
    <>
      <Navbar width={width} />
      <HeroClinic />
      <TabSection />
      <Footer />
    </>
  );
};

export default DetailKlinik;
