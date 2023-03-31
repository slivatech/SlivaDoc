import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../PageArtikel/PageArtikelStyle'
import { CardDoc, CardMed, Col, SeeAll, Location, Button, Top, Brand, SearchBar } from './TindakanMedisStyle'
import imgLoc from '../../assets/image/img-location.png'
import iconLoc from '../../assets/icon/location.svg'
import iconCheck from '../../assets/icon/check-circle.svg'
import iconFill from '../../assets/icon/location-fill.svg'
import Search from '../../components/Search/Search'


const TindakanMedis = () => {
    interface IMedis {
        id: number;
        title: string;
        medis?: any;
    }

    interface ILocation {
        id: number;
        img?: string;
        location: string,
        range: string
    }

    const service = ["Ribuan Dokter Berpengalaman", "Dari Klinik Hewan Terbaik", "Kepastian Jadwal Booking"]

    const listMedis = [
        {
            id: 1,
            title: "Doktor Umum",
            medis: [
                "Skrining Sifilis", "Electrocauterization", "Tes Alergi", "Konsultasi Kulit dan Kelamin"
            ]
        },
        {
            id: 2,
            title: "Mata",
            medis: [
                "Skrining Sifilis", "Electrocauterization", "Tes Alergi", "Konsultasi Kulit dan Kelamin"
            ]
        },
        {
            id: 3,
            title: "Bedah",
            medis: [
                "Skrining Sifilis", "Electrocauterization", "Tes Alergi", "Konsultasi Kulit dan Kelamin"
            ]
        },
        {
            id: 4,
            title: "Gizi Klinik",
            medis: [
                "Skrining Sifilis", "Electrocauterization", "Tes Alergi", "Konsultasi Kulit dan Kelamin"
            ]
        },
        {
            id: 5,
            title: "Dokter Gigi",
            medis: [
                "Skrining Sifilis", "Electrocauterization", "Tes Alergi", "Konsultasi Kulit dan Kelamin"
            ]
        },
        {
            id: 6,
            title: "Dokter Kulit",
            medis: [
                "Skrining Sifilis", "Electrocauterization", "Tes Alergi", "Konsultasi Kulit dan Kelamin"
            ]
        },
    ]

    const location = [
        {
            id: 1,
            img: imgLoc,
            location: "PetCare Bekasi",
            range: "1.7 KM"
        },
        {
            id: 2,
            img: imgLoc,
            location: "PetCare Surabaya",
            range: "1.7 KM"
        },
        {
            id: 3,
            img: imgLoc,
            location: "PetCare Jakarta",
            range: "1.7 KM"
        },
        {
            id: 4,
            img: imgLoc,
            location: "PetCare Pekanbaru",
            range: "1.7 KM"
        },
    ];

    const CardImage = (props: any) => {
        return (
            <CardDoc key={props.id}>
                <div>
                    <h1>{props.text}</h1>
                </div>
            </CardDoc>
        )
    };

    const Title = (props: any) => {
        return (
            <Top>
                <h1>{props.text}</h1>
                <SeeAll to='/'>
                    {props.link}
                </SeeAll>
            </Top>
        )
    }

  return (
    <>
        <Container>
                <h1>Buat Janji Mudah dan Cepat</h1>
                <Brand>
                    {service.map((i: string, index: number) => (
                        <div className='service' key={index}>
                            <img src={iconCheck}/>
                            <span>{i}</span>
                        </div>
                    ))}
                </Brand>
                <SearchBar>
                    <div className='input-loc'>
                        <img src={iconLoc}/>
                        <input type="text" placeholder="Seluruh Lokasi" name="search"/>
                        <img src={iconFill}/>
                    </div>
                    <Search/>
                </SearchBar>
            <>
                <Title text='Pilih Spesialis Dokter Di Rumah Sakit Hewan' link='Lihat Semua'/>
                <Col>
                    {listMedis.map((i : IMedis) => (
                        <CardImage id={i.id} text={i.title} />
                    ))}
                </Col>
                <Button>
                    <button>Tampilkan Lebih Banyak</button>
                </Button>
            </>
            <>
                <Title text='Pilih Tindakan Medis' link='Lihat Semua'/>
                <Col>
                    {listMedis.map((i: IMedis) => (
                        <CardMed>
                            <CardImage id={i.id} text={i.title} />
                            <ul>
                                {i.medis.map ((item: string) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </CardMed>
                    ))}
                </Col>
                <Button>
                    <button>Tampilkan Lebih Banyak</button>
                </Button>
            </>
            <>
                <Title text='Rekomendasi Fasilitas Kesehatan' link='Lihat Semua'/>
                <Col>
                    {location.map((i: ILocation) => (
                        <Location to='/' key={i.id}>
                            <div className='img-cover'>
                                <img src={i.img}/>
                            </div>
                            <div>
                                <h2>{i.location}</h2>
                                <div className='link'>
                                    <img src={iconLoc}/>
                                    <span>{i.range}</span> 
                                </div> 
                            </div>
                        </Location>
                    ))}
                </Col>
                <Button>
                    <button>Tampilkan Lebih Banyak</button>
                </Button>
            </>
        </Container>
    </>
  )
}

export default TindakanMedis