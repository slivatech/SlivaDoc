/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { Link } from "react-router-dom";
import ArticlePage from "../../components/DetailArtikel/ArtikelContent";
import banner from "../../assets/banner.png";
import DoctorListItem from "../../components/DetailArtikel/DoctorListItem";
import Live from "../../assets/icon/live.png";
import {
  ButtonContainer,
  Consult,
  Container,
  Description,
  DoctorContainer,
  DoctorListContainer,
  Heading,
  LinkTo,
  List,
  ListImage,
  ListInfo,
  ListWrap,
  Row,
  Sidebar,
  SidebarListItem,
  SidebarTitle,
  Title,
  Top,
} from "./DetailArtikelStyle";
import doctor from "../../assets/doctor.png";
import img from "../../assets/artikelterkait.png";
import imgconsult from "../../assets/consult.png";
import Search from "../../components/Search/Search";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


interface Doctor {
  id: number;
  name: string;
  specialty: string;
  price: number;
  image: string;
  rating:number;
  exp:number;
}
interface IListArticle {
  id: number;
  image: string;
  title: string;
  desc?: string;
  category?: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr.Evans Moris",
    specialty: "Dokter Umum",
    price: 250000,
    image: doctor,
    rating:90,
    exp:3,
  },
  {
    id: 2,
    name: "Dr.Evans Moris",
    specialty: "Dokter Anak",
    price: 300000,
    image: doctor,
    rating:96,
    exp:4,
  },
];
const ListArticle = [
  {
    id: 1,
    image: img,
    title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    category: "Radang Usus",
  },
  {
    id: 2,
    image: img,
    title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    category: "Radang Usus",
  },
  {
    id: 3,
    image: img,
    title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    category: "Radang Usus",
  },
  {
    id: 4,
    image: img,
    title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    category: "Radang Usus",
  },
];

interface DetailArtikelProps {
  width: number;
}

const DetailArtikel: React.FC<DetailArtikelProps> = ({ width }) => {
  const article = {
    title: "Ini 4 Cara Ampuh Mengatasi Kolitis pada Orang Dewasa",
    author: "dr. Fadhli",
    date: "March 21, 2023",
    content:
      "Slivadoc, Jakarta – Kolitis adalah kondisi peradangan pada usus besar, yang merupakan bagian utama dari sistem pencernaan. Bisa dibilang, usus besar adalah tempat terakhir dari perjalanan makanan yang kamu konsumsi. Jika terjadi kolitis atau peradangan pada usus besar, proses perjalanan makanan tersebut dapat terganggu. Bahkan dapat mengakibatkan sakit perut, diare, dan adanya darah pada feses. Peradangan merupakan bentuk respon tubuh terhadap infeksi atau cedera pada usus besar. Kondisi tersebut dapat menyebabkan pembengkakan dan nyeri pada jaringan usus. Kolitis bisa menjadi kondisi yang serius jika tidak kunjung sembuh. Bahkan, bisa mengakibatkan kerusakan serius di usus besar yang akan mempengaruhi kualitas hidup. Nah, pertanyaannya bagaimana cara mengatasi kolitis pada orang dewasa?",
    image: banner,
    coreContent:
      "“Peradangan usus besar atau kolitis dapat menyebabkan diare, feses berdarah, hingga nyeri atau kram perut.Kabar baiknya, kondisi ini dapat diatasi dengan pengobatan hingga menjaga kebersihan tubuh.”",
  };

  return (
    <>
      <Navbar width={width} />
      <Container>
        <ArticlePage
          title={article.title}
          author={article.author}
          date={article.date}
          coreContent={article.coreContent}
          content={article.content}
          image={article.image}
        />
     
        <DoctorContainer>
          <DoctorListContainer>
            <Heading>
          <Title>konsultasi Dokter Terkait</Title>
          <LinkTo>Lihat Semua</LinkTo>
          </Heading>
        <Description>Konsultasi online dengan dokter siaga kami</Description>
            {doctors.map((doctor) => (
              <DoctorListItem key={doctor.id} doctor={doctor} />
            ))}
            
            <Consult>
              <img style={{marginRight:"0.625rem"}} src={imgconsult} alt="consult" />
              <div>
                <h3>Konsultasi Instan</h3>
                <p>Tanya dokter untuk buat resep.</p>
              </div>
              <ButtonContainer>
              <button>Mulai konsultasi</button>
              </ButtonContainer>
            </Consult>
            <div>
              <h3>Baca Artikel Slivadoc</h3>
              <Search />
            </div>
          </DoctorListContainer>
          <div>
            <Sidebar>
              <SidebarTitle>Kategori</SidebarTitle>
              <SidebarTitle>
                <ListWrap to={""}>
                  <img src={Live} alt="live" />
                  <div>Radang Usus</div>
                </ListWrap>
              </SidebarTitle>
              <SidebarTitle>Topik Terkini</SidebarTitle>
              <SidebarTitle>
                <SidebarListItem>
                  <a href="#"> Radang Usus</a>
                </SidebarListItem>
                <SidebarListItem>
                  <a href="#"> Radang Usus</a>
                </SidebarListItem>
                <SidebarListItem>
                  <a href="#"> Radang Usus</a>
                </SidebarListItem>
                <SidebarListItem>
                  <a href="#"> Radang Usus</a>
                </SidebarListItem>
              </SidebarTitle>
            </Sidebar>
            <Top>
              <List>
                <h4>Artikel Terkait</h4>
                {ListArticle.map((i: IListArticle) => (
                  <Row className="item">
                    <ListImage src={i.image} />
                    <ListInfo>
                      <h2>{i.title}</h2>
                      <span>
                        <a href="#">{i.category}</a>
                      </span>
                    </ListInfo>
                  </Row>
                ))}
              </List>
            </Top>
          </div>
        </DoctorContainer>
      </Container>
      <Footer />
    </>
  );
};

export default DetailArtikel;
