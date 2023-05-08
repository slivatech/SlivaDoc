import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { BenefitContainer, Container, FaqContainer, Heading, SectionTop, SliderContainer, SponsorContainer, Title } from "./RegulerStyle";
import Proteksipic from "../../assets/icon/ProteksiLogo.svg";
import Benefits from "../../components/Benefits/Benefits";
import { benefits, data, datatabel, questions } from "./datas";
import FaqDropdown from "../../components/FaqDropdown/FaqDropdown";
import line from "../../assets/icon/line.png";
import SliderProteksi from "../../components/SliderProteksi/SliderProteksi";
import BannerContainer from "../../components/BannerContainer/BannerContainer";
import Sponsorpic from "../../assets/image/sponsor.png"
import TableProteksi from "../../components/TableProteksi/TableProteksi";
interface RegulerProps{
    width:number;
}

const Reguler:React.FC<RegulerProps> = ({width}) => {

    return(
        <>
        <Navbar width={0}/>
        <Container>
        <SectionTop>
            <img src={Proteksipic} alt="logo" />
            <p>Reguler</p>
            <h1>Paket <span>Unlimited Chat</span> Dokter Spesialis Hewan Paling Terjangkau </h1>
            <button>Daftar Sekarang</button>
          </SectionTop>
          <BenefitContainer>
          <h1>Pilihan Dokter Hewan Terlengkap</h1>
          <div style={{width:"655px"}}>
          <Benefits benefits={benefits} columns={2} rows={2}/>
          </div>
          </BenefitContainer>
          <div style={{marginTop:"103px"}}>
          <Heading>
            <Title>Detail Manfaat</Title>
            <img src={line} alt="line" />
            </Heading>
            <TableProteksi head="My Table Header" col1Rows={2} col2Rows={1} data={datatabel}/>
          </div>
          <div style={{marginTop:"103px"}}>
            <Heading>
            <Title>Keuntungan Lainnya</Title>
            <img src={line} alt="line" />
            </Heading>
            <SliderContainer>
              <SliderProteksi data={data}/>
            </SliderContainer>
          </div >
          <SponsorContainer>
            <h1>Rekanan Rumah Sakit Yang Mendukung SLIVA<span>PROTEKSI</span></h1>
            <img src={Sponsorpic} alt="sponsor" />
          </SponsorContainer>
          <div style={{marginTop:"103px"}}>
          <Heading>
            <Title>Informasi Lainnya</Title>
            <img src={line} alt="line" />
            </Heading>
           <FaqContainer>
            <FaqDropdown questions={questions}/>
            </FaqContainer> 
          </div>
          <div style={{margin:"auto",marginTop:"38px",marginBottom:"40px"}}>
            <BannerContainer/>
          </div>
        </Container>
        <Footer/>
        </>
    );
}

export default Reguler;