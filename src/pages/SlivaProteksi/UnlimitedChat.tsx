import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { Container, DocterContainer, FaqContainer, Heading, SectionTop, SliderContainer } from "./UnlimitedChatStyle";
import Proteksipic from "../../assets/icon/ProteksiLogo.svg";
import PilihanDokter from "../../components/PilihanDokter/PilihanDokter";
import { Title } from "./SlivaProteksiStyle";
import line from "../../assets/icon/line.png";
import SliderProteksi from "../../components/SliderProteksi/SliderProteksi";
import { data, doctors, questions } from "./datas";
import FaqDropdown from "../../components/FaqDropdown/FaqDropdown";
import BannerContainer from "../../components/BannerContainer/BannerContainer";


interface UnlimitedChatProps{
    width:number;
}



const UnlimitedChat:React.FC<UnlimitedChatProps> = ({width}) => {

    return(
        <>
        <Navbar width={0}/>
        <Container>
          <SectionTop>
            <img src={Proteksipic} alt="logo" />
            <p>Chat Dokter</p>
            <h1>Paket <span>Unlimited Chat</span> Dokter Spesialis Hewan Paling Terjangkau </h1>
            <button>Daftar Sekarang</button>
          </SectionTop>
          <DocterContainer>
          <h1>Pilihan Dokter Hewan Terlengkap</h1>
          <PilihanDokter doctors={doctors}></PilihanDokter>
          </DocterContainer>
          <div style={{marginTop:"103px"}}>
            <Heading>
            <Title>Keuntungan Lainnya</Title>
            <img src={line} alt="line" />
            </Heading>
            <SliderContainer>
              <SliderProteksi data={data}/>
            </SliderContainer>
          </div >
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

};
export default UnlimitedChat;