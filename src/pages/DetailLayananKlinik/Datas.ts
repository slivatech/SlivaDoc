import img from "../../assets/doctor.png";
import morning from "../../assets/icon/morning.png";
import sun from "../../assets/icon/sun.png";
import night from "../../assets/icon/night.png";

interface Doctor {
  name: string;
  specialty: string;
  STR: string;
  photo: string;
  about: string;
  experienceTime: string[];
  experienceDetails: string[];
  education: string[];
  graduation: number[];
  medicalTreatment: String[];
}

export const doctor: Doctor = {
  name: "Dr.Evans moris",
  specialty: "Spesialis Kepo apa aja",
  STR: "1221 6023 2012 2045",
  photo: img,
  about:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numuam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid",
  experienceTime: ["2021 - Sekarang"],
  experienceDetails: ["Praktik Pribadi - Pekanbaru"],
  education: ["Fakultas Kedokteran Hewan - Universitas Indonesia"],
  graduation: [2012],
  medicalTreatment: [
    "Operasi Kandungan",
    "Lion Cut",
    "Grooming",
    "Pencabutan Gigi",
    "Pengobatan Gigi Sensitif",
  ],
};

export const consultType = [
  {
    value: "VideoCall",
  },
  {
    value: "Chat",
  },
];

export const data = [
  {
    timePeriod: "Pagi",
    imgSrc: morning,
    schedule: ["08:00 - 12:00", "08:00 - 12:00"],
  },
  {
    timePeriod: "Siang",
    imgSrc: sun,
    schedule: ["08:00 - 12:00", "08:00 - 12:00"],
  },
  {
    timePeriod: "Malam",
    imgSrc: night,
    schedule: ["08:00 - 12:00", "08:00 - 12:00"],
  },
];
