import React from 'react'
import img from '../image/artikel/img-artikel.svg';
import { Banner, Container, List, ListImage, ListInfo, Row } from './PageArtikelStyle';


interface IListArticle {
    id: number;
    image: string;
    title: string;
    status: string;
}

const ListArticle = [
    {
        id: 1,
        image: img,
        title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
        status: "Radang Usus",
    },
    {
        id: 2,
        image: img,
        title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
        status: "Radang Usus",
    },
    {
        id: 3,
        image: img,
        title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
        status: "Radang Usus",
    },
    {
        id: 4,
        image: img,
        title: "Kumpulan makanan 4 sehat 5 Sempurna yang enak",
        status: "Radang Usus",
    },
]

const PageArtikel = () => {
  return (
    <>
        <Container>
            <div style={{paddingTop: '23px'}}>
                <h1 style={{marginBottom: '28px'}}>Artikel Terpopuler</h1>
                <Row>
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
                                        <a href='#'>{i.status}</a>
                                    </span>
                                </ListInfo>
                            </Row>
                        )}
                    </List>
                </Row>
            </div>
            <div>
                <h1>Artikel Terbaru</h1>
            </div>
        </Container>
    </>
  )
}

export default PageArtikel