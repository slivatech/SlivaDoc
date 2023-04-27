/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import img from "../../assets/image/img-artikel.svg";
import Live from '../../assets/icon/live.png';
import {
  Banner,
  Button,
  Card,
  CardImage,
  Col,
  Container,
  List,
  ListImage,
  ListInfo,
  Row,
  Search,
  Top,
} from "./PageArtikelStyle";
import { ListWrap } from "../DetailArtikel/DetailArtikelStyle";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

interface IListArticle {
  id: number;
  image: string;
  title: string;
  desc?: string;
  category?: string;
}

const ListArticle = [
  {
    id: 1,
    image: img,
    title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    desc: "Kumpulan makanan 4 sehat 5 Sempurna yang enak. Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    category: "Radang Usus",
  },
  {
    id: 2,
    image: img,
    title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    desc: "Kumpulan makanan 4 sehat 5 Sempurna yang enak. Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    category: "Radang Usus",
  },
  {
    id: 3,
    image: img,
    title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    desc: "Kumpulan makanan 4 sehat 5 Sempurna yang enak. Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    category: "Radang Usus",
  },
  {
    id: 4,
    image: img,
    title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    desc: "Kumpulan makanan 4 sehat 5 Sempurna yang enak. Kumpulan makanan 4 sehat 5 Sempurna yang enak",
    category: "Radang Usus",
  },
];

interface PageArtikelProps {
  width: number;
}

const PageArtikel: React.FC<PageArtikelProps> = ({width}) => {
  return (
    <>
      <Navbar width={width} />
      <Container>
        <Search>
          <form>
            <input
              type="text"
              placeholder="Cari artikel berdasarkan judul, kategori, topik"
              name="search"
            />
            <button type="submit">Search</button>
          </form>
          <button className="btn-all">Lihat Semua</button>
        </Search>
        <Top>
          <h1>Artikel Terpopuler</h1>
          <div className="top-article">
            <Banner>
              <div>
                <h1>Penyebab Bintik Putih di Kelopak Mata Bagian Dalam</h1>
              </div>
            </Banner>
            <List>
              {ListArticle.map((i: IListArticle) => (
                <Row className="item">
                  <ListImage src={i.image} />
                  <ListInfo>
                    <h2 style={{marginBottom: '5px'}}>{i.title}</h2>
                    <ListWrap to={''}>
                      <img src={Live} alt="live" />
                      <div>{i.category}</div>
                    </ListWrap>
                  </ListInfo>
                </Row>
              ))}
            </List>
          </div>
        </Top>
        <div>
          <h1>Artikel Terbaru</h1>
          <Col>
            {ListArticle.map((i: IListArticle) => (
              <Card>
                <CardImage src={img} />
                <button>{i.category}</button>
                <div>
                  <h3>{i.title}</h3>
                  <p>{i.desc}</p>
                  <a href="#">Selengkapnya</a>
                </div>
              </Card>
            ))}
            {ListArticle.map((i: IListArticle) => (
              <Card>
                <CardImage src={img} />
                <button>{i.category}</button>
                <div>
                  <h3>{i.title}</h3>
                  <p>{i.desc}</p>
                  <a href="#">Selengkapnya</a>
                </div>
              </Card>
            ))}
          </Col>
          <Button>
            <button>Tampilkan Lebih Banyak</button>
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default PageArtikel;
