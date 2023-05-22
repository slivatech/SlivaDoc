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
  availableDays:string[];
  yearsOfExperience: number;
  availableTime:{
    startTime:LooseValue,
    endTime:LooseValue
  }
}
