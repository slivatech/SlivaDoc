import React from 'react'
import img from '../../image/artikel/img-artikel.svg';
import { Banner, Button, Card, CardImage, Container, Content, List, ListImage, ListInfo, Row, Search, Top } from './PageArtikelStyle';


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
]

const PageArtikel = () => {
  return (
    <>
        <Container>
            <Search>
                <form>
                    <input type="text" placeholder="Cari artikel berdasarkan judul, kategori, topik" name="search"/>
                    <button type="submit">Submit</button>
                </form>
                <button className='btn-all'>Lihat Semua</button>
            </Search>
            <Top>
                <h1 style={{marginBottom: '28px'}}>Artikel Terpopuler</h1>
                <div className='top-article'>
                    <Banner>
                        <div>
                            <h1>Penyebab Bintik Putih di Kelopak Mata Bagian Dalam</h1>
                        </div>
                    </Banner>
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
                </div>
            </Top>
            <Content>
                <h1>Artikel Terbaru</h1>
                <Row className='cards'>
                    {ListArticle.map((i: IListArticle) =>
                    <Card>
                        <CardImage src={img}/>
                        <button>{i.category}</button>
                        <div>
                            <h3>{i.title}</h3>
                            <p>{i.desc}</p>
                            <a href='#'>Selengkapnya</a>
                        </div>
                    </Card>
                    )}
                    {ListArticle.map((i: IListArticle) =>
                    <Card>
                        <CardImage src={img}/>
                        <button>{i.category}</button>
                        <div>
                            <h3>{i.title}</h3>
                            <p>{i.desc}</p>
                            <a href='#'>Selengkapnya</a>
                        </div>
                    </Card>
                    )}
                </Row>
                <Button>
                    <button>Tampilkan Lebih Banyak</button>
                </Button>
            </Content>
        </Container>
    </>
  )
}

export default PageArtikel