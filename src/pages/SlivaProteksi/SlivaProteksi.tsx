import FAQ from "../../components/FAQ/FAQ";
import {
  CardPaket,
  Container,
  FAQContainer,
  PaketContainer,
  Section,
  SectionRegister,
  Title,
} from "./SlivaProteksiStyle";
import Card from "../../components/PaketCard/PaketCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import protectpic from "../../assets/icon/ProteksiLogo.svg";
import ComparePaket from "../../components/ComparePaket/ComparePaket";
import listpic from "../../assets/icon/listpic.png";
import truepic from "../../assets/icon/true.png";
import falsepic from "../../assets/icon/false.png";
interface SLivaProteksirProps {
  width: number;
}
const questions = [
  {
    id: 1,
    question: "Manfaat SlivaProteksi",
    faqs: [
      {
        id: 1,
        questionId: 1,
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "Lorem ? ",
      },
      {
        id: 2,
        questionId: 1,
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "manfaat?",
      },
      {
        id: 3,
        questionId: 1,
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "What are the benefits?",
      },
    ],
  },
  {
    id: 2,
    question: "Keanggotaan SlivaProteksi",
    faqs: [
      {
        id: 4,
        questionId: 2,
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "lorem?",
      },
      {
        id: 5,
        questionId: 2,
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "lorem?",
      },
    ],
  },
  {
    id: 3,
    question: "Biaya SlivaProteksi",
    faqs: [
      {
        id: 6,
        questionId: 3,
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "lorem?",
      },
      {
        id: 7,
        questionId: 3,
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "What is ?",
      },
    ],
  },
  {
    id: 4,
    question: "Chat SlivaProteksi",
    faqs: [
      {
        id: 8,
        questionId: 4,
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "Wlorem ipsum?",
      },
      {
        id: 9,
        questionId: 4,
        answer:
          "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "What is ?",
      },
    ],
  },
];

const packages = [
  {
    paket: "Chat Dokter",
    chat: truepic,
    drugs: falsepic,
    lab: falsepic,
    outpatient: falsepic,
    inpatient: falsepic,
  },
  {
    paket: "Regular",
    chat: truepic,
    drugs: truepic,
    lab: truepic,
    outpatient: truepic,
    inpatient: falsepic,
  },
  {
    paket: "Plus",
    chat: truepic,
    drugs: truepic,
    lab: truepic,
    outpatient: truepic,
    inpatient: truepic,
  },
];

const cardData = [
  {
    logo: protectpic,
    packageType: "Unlimited Chat",
    description: "Unlimited chat dokter specialis 24 jam setiap hari",
    pricePerMonth: 50000,
    backgroundColor:
      "linear-gradient(180deg, #B4B7B7 0%, rgba(234, 243, 245, 0) 100%)",
  },
  {
    logo: protectpic,
    packageType: "Reguler",
    description: "100 juta per tahun cashless biaya rawat jalan & obat-obatan",
    pricePerMonth: 150000,
    backgroundColor:
      "linear-gradient(180deg, #D9D9D9 0%, rgba(234, 243, 245, 0) 100%);",
  },
  {
    logo: protectpic,
    packageType: "Plus",
    description: "100 juta per tahun cashless biaya rawat inap & obat-obatan",
    pricePerMonth: 250000,
    backgroundColor:
      "linear-gradient(180deg, #AAE6EA 0%, rgba(234, 243, 245, 0) 100%);",
  },
];
const sectionRegister = [
  {
    number: 1,
    title: "Pilih Paket Asuransi",
    description: "Pilih Paket dan Periode berlangganan sesuai kebutuhan Anda.",
  },
  {
    number: 2,
    title: "Isi Detail Diri",
    description:
      "Isi form registrasi diri seperti nama, alamat, nomor telpon dan lainnya.",
  },
  {
    number: 3,
    title: "Lakukan Pembayaran",
    description: "Pilih metode pembayaran sesuai kebutuhan Anda.",
  },
  {
    number: 4,
    title: "Member SlivaProteksi Aktif!",
    description:
      "Anda berhasil menjadi member dan bisa manfaatkan semua kelebihannya.",
    note: "Khusus SlivaProteksi Reguler dan SlivaProteksi Plus membutuhkan waktu 1-3 hari kerja",
  },
];

const SlivaProteksi: React.FC<SLivaProteksirProps> = ({ width }) => {
  return (
    <>
      <Navbar width={width} />
      <Container>
        <div>
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
        <div style={{ marginTop: "5.213rem", marginBottom: "5.063rem" }}>
          <Title>Bandingkan Semua Paket</Title>
          <PaketContainer>
            <ComparePaket packages={packages} />
          </PaketContainer>
        </div>
        <Section>
          <p>
            Rincian manfaat dan layanan untuk Slivaproteksi dan Slivaproteksi
            Plus dapat Anda lihat di sini
          </p>
          <button>
            <img src={listpic} alt="pic" />
            <p>Ringkasan Informasi Produk</p>
          </button>
        </Section>
        <div style={{ marginTop: "5.063rem" }}>
          <Title>Cara Mendaftar</Title>
          <SectionRegister>
            {sectionRegister.map((section, index) => (
              <div key={index}>
                <h3>{section.number}</h3>
                <h1>{section.title}</h1>
                <p>{section.description}</p>
                {section.note && (
                  <p
                    className="italic"
                    style={{ fontStyle: "italic", fontSize: "12px" }}
                  >
                    {section.note}
                  </p>
                )}
                {section.number === 3 && (
                  <button>Lihat Metode Pembayaran</button>
                )}
              </div>
            ))}
          </SectionRegister>
        </div>
        <div>
          <Title>Tentang SlivaProteksi</Title>
          <FAQContainer>
            <FAQ questions={questions} />
          </FAQContainer>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SlivaProteksi;
