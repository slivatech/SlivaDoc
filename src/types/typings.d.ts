import { LooseValue } from "react-time-picker/dist/cjs/shared/types";

interface Doctor {
  imageSrc: string;
  name: string;
  role: string;
  venue: string;
  distance: number;
  isAvailable: boolean;
  reviewPercentage: number;
  reviewsCount: number;
  price: number;
  location: string;
  availableDays: string[];
  yearsOfExperience: number;
  availableTime: {
    startTime: LooseValue;
    endTime: LooseValue;
  };
}

interface Animal {
  name: string;
  rating: number;
  price: number;
  remainingStock: number;
  city: string;
  image: string;
  createdAt:Date;
  reviewsCount:number;
  soldCount:number
  viewsCount:number;
  updatedCount:number;
}

interface Review {
  productImage: string;
  productName: string;
  productRating: number;
  createdAt: Date;
  buyerImage: string;
  buyerName: string;
  reviewContent: string;
  satisfaction: "Sangat Puas" | "Puas" | "Cukup" | "Buruk";
  replies:Reply[];
  media?:string;
}

interface Reply {
  replyName:string;
replyImage:string;
  createdAt:Date;
  replyContent:string;
  isOwner:boolean;
}
