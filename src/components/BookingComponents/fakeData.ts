import { Doctor } from "../../types/typings";

export const cities = ["Ambon", "Medan", "Jakarta", "Bali", "Bandung"];

export const yearsOfExperience = [
  "Dibawah 5 tahun",
  "5 - 10 tahun",
  "Di atas 10 tahun",
];

export const doctors: Doctor[] = [
  {
    imageSrc: "/assets/doc.png",
    name: "Drh.Evans Moris",
    role: "Dokter Kucing",
    venue: "RSH Evans Cemerlang, Medan",
    distance: 1.7,
    isAvailable: true,
    reviewPercentage: 100,
    reviewsCount: 20,
    availableDays: ["Senin", "Kamis", "Sabtu"],
    price: 300000,
    location: "Medan",
    yearsOfExperience: 4,
    availableTime: {
      endTime: "17.00",
      startTime: "10.00",
    },
  },
  {
    imageSrc: "/assets/doc.png",
    name: "Drh.Evans Moris",
    role: "Dokter Kucing",
    venue: "RSH Evans Cemerlang, Jakarta",
    distance: 1.7,
    isAvailable: true,
    reviewPercentage: 100,
    reviewsCount: 20,

    price: 500000,
    location: "Jakarta",
    yearsOfExperience: 5,
    availableDays: ["Rabu", "Kamis", "Jumat"],
    availableTime: {
      endTime: "17.00",
      startTime: "10.00",
    },
  },
  {
    imageSrc: "/assets/doc.png",
    name: "Drh. Jackson Wang",
    role: "Dokter Kucing",
    venue: "RSH Evans Cemerlang, Bandung",
    distance: 1.7,
    isAvailable: true,
    reviewPercentage: 100,
    reviewsCount: 20,
    price: 200000,
    location: "Bandung",
    yearsOfExperience: 11,
    availableDays: ["Selasa", "Rabu", "Sabtu"],
    availableTime: {
      endTime: "17.00",
      startTime: "10.00",
    },
  },
  {
    imageSrc: "/assets/doc.png",
    name: "Drh.Evans Moris",
    role: "Dokter Kucing",
    venue: "RSH Evans Cemerlang, Ambon",
    distance: 1.7,
    isAvailable: true,
    reviewPercentage: 100,
    reviewsCount: 20,
    price: 250000,
    location: "Ambon",
    yearsOfExperience: 8,
    availableDays: ["Selasa", "Rabu", "Jumat"],
    availableTime: {
      endTime: "17.00",
      startTime: "10.00",
    },
  },
  {
    imageSrc: "/assets/doc.png",
    name: "Drh.Evans Moris",
    role: "Dokter Kucing",
    venue: "RSH Evans Cemerlang, Jakarta",
    distance: 1.7,
    isAvailable: true,
    reviewPercentage: 100,
    reviewsCount: 20,
    price: 650000,
    location: "Jakarta",
    yearsOfExperience: 7,
    availableDays: ["Senin", "Rabu", "Kamis"],

    availableTime: {
      endTime: "17.00",
      startTime: "10.00",
    },
  },
  {
    imageSrc: "/assets/doc.png",
    name: "Drh.Evans Moris",
    role: "Dokter Kucing",
    venue: "RSH Evans Cemerlang, Jakarta",
    distance: 1.7,
    isAvailable: true,
    reviewPercentage: 100,
    reviewsCount: 20,
    price: 800000,
    location: "Jakarta",
    yearsOfExperience: 9,
    availableDays: ["Senin", "Rabu", "Sabtu"],

    availableTime: {
      endTime: "17.00",
      startTime: "10.00",
    },
  },
];

export const petHospitals = [
  {
    imageSrc: "/assets/doc.png",
    name: "Drh.Evans Moris",
    role: "Dokter Kucing",
    venue: "RSH Evans Cemerlang, Jakarta",
    distance: "1.7km",
    isAvailable: true,
    price: 400000,
  },
];
