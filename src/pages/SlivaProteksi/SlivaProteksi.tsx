import FAQ from "../../components/FAQ/FAQ"
import { CardPaket, Container, FAQContainer, PaketContainer, Section, SectionRegister, Title } from "./SlivaProteksiStyle";
import Card from "../../components/PaketCard/PaketCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ComparePaket from "../../components/ComparePaket/ComparePaket";
import listpic from "../../assets/icon/listpic.png";
import { cardData, packages, questionsFaq, sectionRegister } from "./datas";

interface SLivaProteksirProps {
    width: number;
  }
  

const SlivaProteksi: React.FC<SLivaProteksirProps> = ({width}) => {

    return(
        <>
        <Navbar width={width}/>
        <Container>
    <div >
      <Title>Paket Yang Tersedia</Title>
      <CardPaket>
      {cardData.map((card) => (
        <Card
          logo={card.logo}
          packageType={card.packageType}
          description={card.description}
          pricePerMonth={card.pricePerMonth}
          backgroundColor={card.backgroundColor}
        />
      ))}
      </CardPaket>
    </div>
    <div style={{marginTop:"5.813rem",marginBottom:"5.063rem"}}>
      <Title>Bandingkan Semua Paket</Title>
      <PaketContainer>
      <ComparePaket packages={packages} />
      </PaketContainer>
    </div>
    <Section>
      <p>Rincian manfaat dan layanan untuk Slivaproteksi dan Slivaproteksi Plus dapat Anda lihat di sini</p>
      <button>
        <img src={listpic} alt="pic" />
        <p>Ringkasan Informasi Produk</p>
        </button>
    </Section>
    <div style={{marginTop:"5.063rem"}}>
      <Title>Cara Mendaftar</Title>
      <SectionRegister>
      {sectionRegister.map((section, index) => (
        <div key={index}>
          <h3>{section.number}</h3>
          <div>
          <h1>{section.title}</h1>
          <p>{section.description}</p>
          {section.note && <p className="italic" style={{fontStyle:"italic",fontSize:"12px"}}>{section.note}</p>}
          {section.number === 3 && <button>Lihat Metode Pembayaran</button>}
          </div>
        </div>
      ))}
      </SectionRegister>
    </div>
    <div style={{marginTop:"5.063rem"}}>
      <Title>Tentang SlivaProteksi</Title>
      <FAQContainer>
      <FAQ questions={questionsFaq} />
      </FAQContainer>
    </div>
        </Container>
        <Footer/>
        </>
    );
};

export default SlivaProteksi;