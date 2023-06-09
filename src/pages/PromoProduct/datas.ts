import img1 from "../../assets/image/Anjing.png";
import img2 from "../../assets/image/kucing.png";
interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    discount: number;
    rating: number;
    img:string;
    stok:number;
    city: string;
    province: string;
  }
export const DummyData: Product[] = [
    {
      id: 1,
      img:img1,
      name: "Produk 1",
      category: "Aksesoris Hewan",
      price: 5000000,
      discount: 10,
      city: "Bandung",
      province:"Jawa Barat",
      rating:3,
      stok:50,
      
    },
    {
      id: 2,
      img:img1,
      name: "Produk 2",
      category: "Obat & Vitamin",
      price: 1000000,
      discount: 20,
      city: "Medan",
      province:"Sumatra Utara",
      rating:5,
      stok:56,
    },
    {
      id: 3,
      img:img2,
      name: "Produk 3",
      category: "Hewan Peliharaan",
      price: 15000000,
      discount: 5,
      city: "jakarta",
      province:"DKI Jakarta",
      rating:3,
      stok:50,
    },
    {
      id: 4,
      img:img1,
      name: "Produk 4",
      category: "Makanan Hewan",
      price: 2000000,
      discount: 15,
      city: "Malang",
      province:"Jawa Timur",
      rating:4,
      stok:50,
    },
    {
      id: 5,
      img:img2,
      name: "Produk 5",
      category: "Hewan Peliharaan",
      price: 2000000,
      discount: 15,
      city: "Medan",
      province:"Sumatra Utara",
      rating:2,
      stok:50,
    },
    {
      id: 6,
      img:img1,
      name: "Produk 4",
      category: "Makanan Hewan",
      price: 4050000,
      discount: 5,
      city: "Medan",
      province:"Sumatra Utara",
      rating:3,
      stok:50,
    },
    {
      id: 7,
      img:img2,
      name: "Produk 4",
      category: "Obat & Vitamin",
      price: 2800000,
      discount: 1,
      city: "Malang",
      province:"Jawa Timur",
      rating:5,
      stok:50,
    },
  ];
  