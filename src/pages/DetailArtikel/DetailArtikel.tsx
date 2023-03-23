import React from "react";
import ArticlePage from "../../components/DetailArtikel/ArtikelContent";
import banner from'../../assets/banner.png';
import DoctorListItem from '../../components/DetailArtikel/DoctorListItem';
import {Button, Consult, Description,DoctorContainer,DoctorListContainer, List, ListImage, ListInfo, Row, Sidebar,  SidebarListItem,  SidebarTitle, Title, Top } from "./DetailArtikelStyle";
import doctor from '../../assets/doctor.png'
import img from '../../assets/artikelterkait.png'
import imgconsult from '../../assets/consult.png'
import Search from "../../components/Search/Search";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  price: number;
  image: string;
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
]


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
    <div >
      
      <ArticlePage
        title={article.title}
        author={article.author}
        date={article.date}
        coreContent={article.coreContent}
        content={article.content}
        image={article.image}
      /> 
      <Title>konsultasi Dokter Terkait</Title>
      <Description>Konsultasi online dengan dokter siaga kami</Description>
      <DoctorContainer>
       <DoctorListContainer>
      {doctors.map(doctor => (
        <DoctorListItem key={doctor.id} doctor={doctor} />
      ))}
      <Consult>
      <img style={{marginLeft:"40px"}} src={imgconsult} alt="consult" />
      <div>
        <h3>Konsultasi Instan</h3>
      <p>Tanya dokter untuk buat resep.</p>
      </div>
        <Button>
          <button>Mulai Konsultasi</button>
        </Button>
    </Consult>
    </DoctorListContainer>
    <div>
     <Sidebar>
      <SidebarTitle>Kategori</SidebarTitle>
      <SidebarTitle>
        <SidebarListItem>
          <a href='#'> Radang Usus</a>
        </SidebarListItem>
      </SidebarTitle>
      <SidebarTitle>Topik Terkait</SidebarTitle>
      <SidebarTitle>
      <SidebarListItem>
          <a href='#'> Radang Usus</a>
        </SidebarListItem>
        <SidebarListItem>
          <a href='#'> Radang Usus</a>
        </SidebarListItem>
        <SidebarListItem>
          <a href='#'> Radang Usus</a>
        </SidebarListItem>
        <SidebarListItem>
          <a href='#'> Radang Usus</a>
        </SidebarListItem>
      </SidebarTitle>
      </Sidebar>
      <Top>
      <List>
        {ListArticle.map((i: IListArticle) => 
            <Row className='item'>
                <ListImage src={i.image}/>
                <ListInfo>
                    <h2>{i.title}</h2>
                    <span>
                        <a href='#'>{i.category}</a>
                    </span>
                </ListInfo>
            </Row>
        )}
    </List>
    </Top>
    </div>
      </DoctorContainer>
      <div style={{margin:"100px",}}>
        <h3>Baca Artikel Silivadoc</h3>
      <Search/>
      </div>
    </div>
  );
};

export default DetailArtikel;