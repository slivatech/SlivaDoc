import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../PageArtikel/PageArtikelStyle'
import { CardDoc, CardMed, Col, SeeAll } from './TindakanMedisStyle'

const TindakanMedis = () => {
    const ListDoctor = [
        "Dokter Umum", "Mata", "Bedah", "Gizi Klinik", "Dokter Gigi", "Dokter Kulit", "Patologi Klinik", "Farmakologi"
    ]
  return (
    <>
        <Container>
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                <h1 style={{fontSize: '20px'}}>Pilih Spesialis Dokter Di Rumah Sakit Hewan</h1>
                <SeeAll to='/'>
                    Lihat Semua
                </SeeAll>
            </div>
            <Col>
                {ListDoctor.map((i : string, index: number) => (
                    <CardDoc key={index}>
                        <div>
                            <h1>{i}</h1>
                        </div>
                    </CardDoc>
                ))}
            </Col>
            <div style={{display: 'flex', justifyContent: "space-between"}}>
                <h1 style={{fontSize: '20px'}}>Pilih Spesialis Dokter Di Rumah Sakit Hewan</h1>
                <SeeAll to='/'>
                    Lihat Semua
                </SeeAll>
            </div>
            <Col>
                <CardMed>
                    <CardDoc>
                        <div>
                            <h1>Dokter Umum</h1>
                        </div>
                    </CardDoc>
                    <ul>
                        <li>Skrining Sifilis</li>
                        <li>Electrocauterization</li>
                        <li>Tes Alergi</li>
                        <li>Konsultasi Kulit dan Kelamin</li>
                    </ul>
                </CardMed>
            </Col>
        </Container>
    </>
  )
}

export default TindakanMedis