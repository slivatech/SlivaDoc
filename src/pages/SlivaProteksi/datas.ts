import SliderPic from "../../assets/icon/SliderPic.png"
import Doctiorpic from "../../assets/icon/Doctorpic.png"
import image1 from "../../assets/icon/image1.png"
import image2 from "../../assets/icon/image2.png"
import image3 from "../../assets/icon/image3.png"
import image4 from "../../assets/icon/image4.png"
import truepic from "../../assets/icon/true.png";
import falsepic from "../../assets/icon/false.png";
import protectpic from "../../assets/icon/ProteksiLogo.svg";
export const questionsFaq = [
  {
    id: 1,
    question: "Manfaat SlivaProteksi",
    faqs: [
      {
        id: 1,
        questionId: 1,
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "Lorem ? ",
      },
      {
        id: 2,
        questionId: 1,
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "manfaat?",
      },
      {
        id: 3,
        questionId: 1,
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the ",
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
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "lorem?",
      },
      {
        id: 5,
        questionId: 2,
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the ",
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
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "lorem?",
      },
      {
        id: 7,
        questionId: 3,
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the ",
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
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "Wlorem ipsum?",
      },
      {
        id: 9,
        questionId: 4,
        answer: "Lorem Ipsum has been the industry's standard dummy text ever since the ",
        questions: "What is ?",
      },
    ],
  },
  
];


export const packages = [
  {
    paket: "Chat Dokter",
    chat: truepic,
    drugs: falsepic,
    lab:falsepic,
    outpatient:falsepic,
    inpatient:falsepic,
  },
  {
    paket: 'Register',
    chat: truepic,
    drugs: truepic,
    lab:truepic,
    outpatient:truepic,
    inpatient:falsepic,
  },
  {
    paket: 'Plus',
    chat: truepic,
    drugs: truepic,
    lab:truepic,
    outpatient:truepic,
    inpatient:truepic,
  },
];

export const cardData = [
  {
    logo: protectpic,
    packageType: "Chat Dokter",
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
    packageType: "plus",
    description: "100 juta per tahun cashless biaya rawat inap & obat-obatan",
    pricePerMonth: 250000,
    backgroundColor:
      "linear-gradient(180deg, #AAE6EA 0%, rgba(234, 243, 245, 0) 100%);",
  },
];
export const sectionRegister = [
  {
    number: 1,
    title: "Pilih Paket Asuransi",
    description: "Pilih Paket dan Periode berlangganan sesuai kebutuhan Anda."
  },
  {
    number: 2,
    title: "Isi Detail Diri",
    description: "Isi form registrasi diri seperti nama, alamat, nomor telpon dan lainnya."
  },
  {
    number: 3,
    title: "Lakukan Pembayaran",
    description: "Pilih metode pembayaran sesuai kebutuhan Anda."
  },
  {
    number: 4,
    title: "Member SlivaProteksi Aktif!",
    description: "Anda berhasil menjadi member dan bisa manfaatkan semua kelebihannya.",
    note: "Khusus SlivaProteksi Reguler dan SlivaProteksi Plus membutuhkan waktu 1-3 hari kerja"
  }
];


export const questions = [
  {
    id: 1,
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

export const data = [
    {
      id: 1,
      img: SliderPic,
      title:"Tebus Obat Lebih Mudah",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      img: SliderPic,
      title:"Tebus Obat Lebih Mudah",
      desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      img: SliderPic,
      title:"Tebus Obat Lebih Mudah",
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      id: 4,
      img: SliderPic,
      title:"Tebus Obat Lebih Mudah",
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
    {
      id: 5,
      img: SliderPic,
      title:"Tebus Obat Lebih Mudah",
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
    {
      id: 6,
      img: SliderPic,
      title:"Tebus Obat Lebih Mudah",
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
    {
      id:7,
      img: SliderPic,
      title:"Tebus Obat Lebih Mudah",
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    },
  ];
  
  export const doctors =[
    {
      specialty: "Cardiologist",
      image: Doctiorpic,
    },
    {
      specialty: "Dermatologist",
      image: Doctiorpic,
    },
    {
      specialty: "Cardiologist",
      image: Doctiorpic,
    },
    {
  
      specialty: "Dermatologist",
      image: Doctiorpic,
    },
    {
 
      specialty: "Cardiologist",
      image: Doctiorpic,
    },
    {
  
      specialty: "Dermatologist",
      image: Doctiorpic,
    },
    {
      specialty: "Cardiologist",
      image: Doctiorpic,
    },
    {
      specialty: "Dermatologist",
      image: Doctiorpic,
    },
    {
      specialty: "Cardiologist",
      image: Doctiorpic,
    },
    {
  
      specialty: "Dermatologist",
      image: Doctiorpic,
    },
    {
  
      specialty: "Cardiologist",
      image: Doctiorpic,
    },
    {
      specialty: "Dermatologist",
      image: Doctiorpic,
    },
  ];
  
  export const benefits = [
    {
      image: image1,
      title: 'Rawat Jalan Cashless',
      description: 'Cashless seluruh biaya rawat jalan Rp100 Juta.',
    },
    {
      image: image2,
      title: 'Unlimited Chat',
      description: 'Konsultasi ke dokter pribadi dan spesialis gratis dan tanpa batas.',
    },
    {
      image: image3,
      title: 'Obat Tiba dalam 1 Jam',
      description: 'Cashless obat-obatan Rp100 Juta dan sampai ke rumah dalam waktu 1 jam.',
    },
    {
      image: image4,
      title: 'Jaringan Klink Hewan Lengkap',
      description: 'Lebih dari 1.500 klinik hewan rekanan',
    },

  ];

  export const benefitsplus = [
    {
      image: image1,
      title: 'Rawat Inap Cashless',
      description: 'Cashless seluruh biaya rawat jalan Rp100 Juta.',
    },
    {
      image: image1,
      title:'Rawat Jalan Cashless',
      description:'Cashless seluruh biaya rawat jalan Rp100 Juta.'
    },
    {
      image: image2,
      title: 'Unlimited Chat',
      description: 'Konsultasi ke dokter pribadi dan spesialis gratis dan tanpa batas.',
    },
    {
      image: image3,
      title: 'Obat Tiba dalam 1 Jam',
      description: 'Cashless obat-obatan Rp100 Juta dan sampai ke rumah dalam waktu 1 jam.',
    },
    
    {
      image: image4,
      title: 'Jaringan Klink Hewan Lengkap',
      description: 'Lebih dari 1.500 klinik hewan rekanan',
    },

    
  ];
 

 export const datatabel = [
    {
      title: 'Manfaat Konsultasi Online',
      rows: [
        {
          column1: 'Konsultasi Dokter Pribadi\n(Termasuk dokter umum dan dokter spesialis)',
          column2: 'Gratis dan tanpa batas',
          isBlue: true,
        },
        {
          column1: 'Obat-obatan\n(Tiba dalam 1 jam)',
          column2: 'Dibayar Cashless',
          isBlue: true,
        },
      ],
    },
    {
      title: 'Manfaat Rawat Jalan',
      rows: [
        {
          column1: 'Biaya Konsultasi\n(Termasuk dokter umum dan dokter spesialis)',
          column2: 'Dibayar Cashless',
          isBlue: true,
        },
        {
          column1: 'Biaya Administrasi',
          column2: '',
          isBlue: false,
        },
        {
          column1: 'Obat-Obatan',
          column2: '',
          isBlue: false,
        },
        {
          column1: 'Pemeriksaan Laboratorium',
          column2: '',
          isBlue: false,
        },
        {
          column1: 'Pemeriksaan Lain yang Direkomendasikan Dokter',
          column2: '',
          isBlue: false,
        },
      ],
    },
  ];
  