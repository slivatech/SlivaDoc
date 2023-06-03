import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { BenefitContainer, Container, FaqContainer, Heading, SectionTop, SliderContainer, SponsorContainer, Table, TableCell, TableHeadCell, TableRow, Title } from "./RegulerStyle";
import Proteksipic from "../../assets/icon/ProteksiLogo.svg";
import Benefits from "../../components/Benefits/Benefits";
import { benefits, data, questions } from "./datas";
import FaqDropdown from "../../components/FaqDropdown/FaqDropdown";
import line from "../../assets/icon/line.png";
import SliderProteksi from "../../components/SliderProteksi/SliderProteksi";
import BannerContainer from "../../components/BannerContainer/BannerContainer";
import Sponsorpic from "../../assets/image/sponsor.png"
import TableProteksi from "../../components/TableProteksi/TableProteksi";
interface RegulerProps{
    width:number;
}
const tableData = [
  {
    title: "Manfaat Konsultasi Online",
    rows: [
      {
        title: "Konsultasi Dokter Pribadi",
        description: "(Termasuk dokter umum dan dokter spesialis)",
        value: "Gratis dan tanpa batas",
        isBlue: true
      },
      {
        title: "Obat-obatan",
        description: "Tiba dalam 1 jam",
        value: "Dibayar Cashless",
        isBlue: true
      }
    ]
  },
  {
    title: "Manfaat Rawat Jalan",
    rows: [
      {
        title: "Biaya Konsultasi",
        description: "(Termasuk dokter umum dan dokter spesialis)",
      },
      {
        title: "Biaya Administrasi",
      },
      {
        title: "Obat-Obatan",
      },
      {
        title: "Pemeriksaan Laboratorium",
      },
      {
        title: "Pemeriksaan Lain yang Direkomendasikan Dokter",
      }
    ]
  }
];
const Reguler:React.FC<RegulerProps> = ({width}) => {

    return(
        <>
        <Navbar width={0}/>
        <Container>
        <SectionTop>
          <img src={Proteksipic} alt="logo" />
          <p>Reguler</p>
          <h1>
            Paket <span>Reguler</span> <br /> Nikmati Kualitas Layanan Yang
            Lebih Baik{" "}
          </h1>
          <button>Daftar Sekarang</button>
        </SectionTop>
        <BenefitContainer>
          <h1>Pilihan Dokter Hewan Terlengkap</h1>
          <div>
          <Benefits benefits={benefits} columns={2} rows={2}/>
          </div>
          </BenefitContainer>
          <div style={{marginTop:"103px"}}>
          <Heading>
            <Title>Detail Manfaat</Title>
            <img src={line} alt="line" />
            </Heading>
            <Table>
      <thead>
        <TableRow>
          <TableHeadCell colSpan={2}>Manfaat Konsultasi Online</TableHeadCell>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Konsultasi Dokter Pribadi
          <br />
            <span style={{ fontStyle: 'italic', fontSize: '10px' }}>
            (Termasuk dokter umum dan dokter spesialis)
            </span>
          </TableCell>
          <TableCell isBlue>Gratis dan tanpa batas</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Obat-obatan
          <br />
            <span style={{ fontStyle: 'italic', fontSize: '10px' }}>
            Tiba dalam 1 jam
            </span>
          </TableCell>
          <TableCell isBlue>Dibayar Cashless</TableCell>
        </TableRow>
      </tbody>
    </Table>
    <Table>
      <thead>
        <tr>
          <TableHeadCell colSpan={2}>Manfaat Rawat Jalan</TableHeadCell>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableCell >Biaya Konsultasi
          <br />
            <span style={{ fontStyle: 'italic', fontSize: '10px' }}>
            (Termasuk dokter umum dan dokter spesialis)
            </span>
          </TableCell>
          <TableCell isBlue rowSpan={5}>Dibayar Cashless</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
          Biaya Administrasi
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
          Obat-Obatan
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell >
          Pemeriksaan Laboratorium
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
          Pemeriksaan Lain yang Direkomendasikan Dokter
          </TableCell>
        </TableRow>
      </tbody>
    </Table>
          </div>
          <div style={{marginTop:"103px"}}>
            <Heading>
            <Title>Keuntungan Lainnya</Title>
            <img src={line} alt="line" />
          </Heading>
          <SliderContainer>
            <SliderProteksi data={data} />
          </SliderContainer>
        </div>
        <SponsorContainer>
          <h1>
            Rekanan Rumah Sakit Yang Mendukung SLIVA<span>PROTEKSI</span>
          </h1>
          <img src={Sponsorpic} alt="sponsor" />
        </SponsorContainer>
        <div style={{ marginTop: "103px" }}>
          <Heading>
            <Title>Informasi Lainnya</Title>
            <img src={line} alt="line" />
          </Heading>
          <FaqContainer>
            <FaqDropdown questions={questions} />
          </FaqContainer>
        </div>
        <div
          style={{ margin: "auto", marginTop: "38px", marginBottom: "40px" }}
        >
          <BannerContainer />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Reguler;
