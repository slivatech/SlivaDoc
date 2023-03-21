import React from "react";
import ArticlePage from "../components/DetailArtikel/ArtikelContent";
import banner from'../assets/banner.png';
import DoctorListItem from "../components/DetailArtikel/DoctorListItem";
import { DoctorListContainer } from "./DetailArtikelStyle";
import doctor from '../assets/doctor.png'

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  price: number;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr.Evans Moris',
    specialty: 'Dokter Umum',
    price: 250000,
    image: doctor,
  },
  {
    id: 2,
    name: 'Dr.Evans Moris',
    specialty: 'Dokter Anak',
    price: 300000,
    image: doctor,
  },

];



const DetailArtikel: React.FC = () => {
  const article = {
    title: "Ini 4 Cara Ampuh Mengatasi Kolitis pada Orang Dewasa",
    author: "dr. indra",
    date: "March 21, 2023",
    content:
      "Slivadoc, Jakarta – Kolitis adalah kondisi peradangan pada usus besar, yang merupakan bagian utama dari sistem pencernaan. Bisa dibilang, usus besar adalah tempat terakhir dari perjalanan makanan yang kamu konsumsi. Jika terjadi kolitis atau peradangan pada usus besar, proses perjalanan makanan tersebut dapat terganggu. Bahkan dapat mengakibatkan sakit perut, diare, dan adanya darah pada feses. Peradangan merupakan bentuk respon tubuh terhadap infeksi atau cedera pada usus besar. Kondisi tersebut dapat menyebabkan pembengkakan dan nyeri pada jaringan usus. Kolitis bisa menjadi kondisi yang serius jika tidak kunjung sembuh. Bahkan, bisa mengakibatkan kerusakan serius di usus besar yang akan mempengaruhi kualitas hidup. Nah, pertanyaannya bagaimana cara mengatasi kolitis pada orang dewasa?",
    image:banner,
    coreContent:"“Peradangan usus besar atau kolitis dapat menyebabkan diare, feses berdarah, hingga nyeri atau kram perut.Kabar baiknya, kondisi ini dapat diatasi dengan pengobatan hingga menjaga kebersihan tubuh.”",
  };


  return (
    <div>
      <ArticlePage
        title={article.title}
        author={article.author}
        date={article.date}
        coreContent={article.coreContent}
        content={article.content}
        image={article.image}
      /> 
       <DoctorListContainer>
      {doctors.map(doctor => (
        <DoctorListItem key={doctor.id} doctor={doctor} />
      ))}
    </DoctorListContainer>           
    </div>
  );
};

export default DetailArtikel;