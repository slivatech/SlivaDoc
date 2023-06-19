
export type CategoryLink = {
    category:string;
    childCategories:CategoryLink[]
}



export const categoriesFilter = [
  {
    categoryType: "Aksesoris",
    categories: [
      {
        category: "Baju",
        childCategories:[{
            category:"Baju Anjing",
            childCategories:null
        },{
            category:"Baju Kucing",
            childCategories:null

        }],
      },
      {
        category: "Kalung",
        childCategories:[{
            category:"Kalung Anjing",
            childCategories:null
        }],
      },
    ],
  },
  {
    categoryType: "Hewan Kesayangan",
    categories: [
      {
        category: "Anjing",
        childCategories:[{
            category:"Anjing Husky",
            childCategories:null
        },{
          category:"Anjing Samoyed",
          childCategories:null
        }],
      },
      {
        category: "Kucing",
        childCategories:[{
            category:"Kucing Persia",
            childCategories:null
        }],
      },
    ],
  },
  {
    categoryType: "Hewan Peliharaan",
    categories: [
      {
        category: "Ayam",
        childCategories:[{
            category:"Ayam betina"
        }]
      },
      {
        category: "Burung",
        childCategories:[{
            category:"Burung Beo"
        }]
      },
    ],
  },
  {
    categoryType: "Makanan Hewan",
    categories: [
      {
        category: "Cemilan",
        childCategories:[{
            category:"Choize",
            childCategories:null
        }]
      },
      {
        category: "Makanan Berat",
        childCategories:[{
            category:"Wiskas",
            childCategories:null
        }]
      },
    ],
  },
  {
    categoryType: "Obat & Vitamin",
    categories: [
      {
        category: "Demam",
        childCategories:[{
            category:"Demam Anjing",
            childCategories:null
        }]
      },
      {
        category: "Flu",
        childCategories:[{
            category:"Flu Kucing",
            childCategories:null
        }]
      },
    ],
  },

];

export type Product = {
  name: string,
  rating: number,
  price: number,
  remainingStock: number,
  city: string,
  image: string,
  createdAt: Date,
  reviewsCount: number,
  soldCount: number,
  viewsCount: number,
  updatedCount: number,
  storeType:string;
  age:number;
  delivery:string;
}

export const products:Product[] = [
  {
    name: "Kucing Persia",
    rating: 5,
    price: 9000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-05-15"),
    reviewsCount: 9,
    soldCount: 10,
    viewsCount: 100,
    updatedCount: 2,
    delivery:"Cargo",
    age:2,
    storeType:"Official Store"
  },
  {
    name: "Anjing Shepherd",
    rating: 5,
    price: 8000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/dog-reseller.png",
    createdAt: new Date("2023-02-11"),
    reviewsCount: 20,
    soldCount: 10,
    viewsCount: 40,
    updatedCount: 1,
    storeType:"Official Store",
    delivery:"Cargo",
    age:3,


  },
  {
    name: "Anjing Husky",
    rating: 5,
    price: 2000000,
    remainingStock: 5,
    city: "DKI Jakarta",
    image: "/assets/dog-reseller.png",
    createdAt: new Date("2022-11-11"),
    reviewsCount: 44,
    soldCount: 10,

    viewsCount: 19,
    updatedCount: 3,
    storeType:"Official Store",
    delivery:"SlivaPack",
    age:2,



  },
  {
    name: "Kucing Sphynx",
    rating: 5,
    price: 4000000,
    remainingStock: 5,
    city: "Surabaya",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-12-15"),
    reviewsCount: 24,
    soldCount: 10,
    viewsCount: 55,
    updatedCount: 5,
    storeType:"Official Store",
    delivery:"SlivaPack",
    age:2,



  },
  {
    name: "Kucing Angola",
    rating: 5,
    price: 3000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2023-01-14"),
    reviewsCount: 20,
    soldCount: 2,
    viewsCount: 24,
    updatedCount: 2,
    storeType:"Official Store",
    delivery:"SlivaPack",
    age:2,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 5000000,
    remainingStock: 5,
    city: "Bali",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-08-11"),
    reviewsCount: 40,
    soldCount: 20,
    viewsCount:111,
    updatedCount:1,
    storeType:"Sliva Merchant",
    delivery:"Kurir Rekomendasi",
    age:6,


  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 10000000,
    remainingStock: 5,
    city: "Bali",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2023-02-11"),
    reviewsCount: 55,
    soldCount: 43,
    viewsCount: 33,
    updatedCount: 0,
    storeType:"Official Store",
    delivery:"Kurir Rekomendasi",
    age:4,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 8000000,
    remainingStock: 5,
    city: "Pekanbaru",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2023-03-04"),
    reviewsCount: 20,
    soldCount: 22,
    viewsCount:54,
    updatedCount:1,
    storeType:"Sliva Merchant Pro",
    delivery:"Kurir Rekomendasi",
    age:5,


  },
  {
    name: "Anjing Shiba",
    rating: 5,
    price: 4000000,
    remainingStock: 5,
    city: "DKI Jakarta",
    image: "/assets/dog-reseller.png",
    createdAt: new Date("2023-03-02"),
    reviewsCount: 20,
    soldCount: 1,
    viewsCount: 44,
    updatedCount: 4,
    storeType:"Official Store",
    delivery:"SlivaPack",

    age:1,


  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 2000000,
    remainingStock: 5,
    city: "DKI Jakarta",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-03-06"),
    reviewsCount: 30,
    soldCount: 4,
    viewsCount: 23,
    updatedCount: 7,
    storeType:"Official Store",
    delivery:"Cargo",
    age:1,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 6000000,
    remainingStock: 5,
    city: "Surabaya",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-03-06"),
    reviewsCount: 10,
    soldCount: 22,

    viewsCount: 65,
    updatedCount: 8,
    storeType:"Official Store",
    delivery:"Cargo",
    age:4,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 3000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-07-06"),
    reviewsCount: 60,
    soldCount: 30,
    viewsCount: 45,
    updatedCount: 2,
    storeType:"Official Store",
    delivery:"Cargo",
    age:2,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 9000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-05-15"),
    reviewsCount: 9,
    soldCount: 10,
    viewsCount: 100,
    updatedCount: 2,
    delivery:"Cargo",
    age:2,
    storeType:"Official Store"
  },
  {
    name: "Anjing Shepherd",
    rating: 5,
    price: 8000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/dog-reseller.png",
    createdAt: new Date("2023-02-11"),
    reviewsCount: 20,
    soldCount: 10,
    viewsCount: 40,
    updatedCount: 1,
    storeType:"Official Store",
    delivery:"Cargo",
    age:3,


  },
  {
    name: "Anjing Husky",
    rating: 5,
    price: 2000000,
    remainingStock: 5,
    city: "DKI Jakarta",
    image: "/assets/dog-reseller.png",
    createdAt: new Date("2022-11-11"),
    reviewsCount: 44,
    soldCount: 10,

    viewsCount: 19,
    updatedCount: 3,
    storeType:"Official Store",
    delivery:"SlivaPack",
    age:2,



  },
  {
    name: "Kucing Sphynx",
    rating: 5,
    price: 4000000,
    remainingStock: 5,
    city: "Surabaya",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-12-15"),
    reviewsCount: 24,
    soldCount: 10,
    viewsCount: 55,
    updatedCount: 5,
    storeType:"Official Store",
    delivery:"SlivaPack",
    age:2,



  },
  {
    name: "Kucing Angola",
    rating: 5,
    price: 3000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2023-01-14"),
    reviewsCount: 20,
    soldCount: 2,
    viewsCount: 24,
    updatedCount: 2,
    storeType:"Official Store",
    delivery:"SlivaPack",
    age:2,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 5000000,
    remainingStock: 5,
    city: "Bali",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-08-11"),
    reviewsCount: 40,
    soldCount: 20,
    viewsCount:111,
    updatedCount:1,
    storeType:"Sliva Merchant",
    delivery:"Kurir Rekomendasi",
    age:6,


  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 10000000,
    remainingStock: 5,
    city: "Bali",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2023-02-11"),
    reviewsCount: 55,
    soldCount: 43,
    viewsCount: 33,
    updatedCount: 0,
    storeType:"Official Store",
    delivery:"Kurir Rekomendasi",
    age:4,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 8000000,
    remainingStock: 5,
    city: "Pekanbaru",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2023-03-04"),
    reviewsCount: 20,
    soldCount: 22,
    viewsCount:54,
    updatedCount:1,
    storeType:"Sliva Merchant Pro",
    delivery:"Kurir Rekomendasi",
    age:5,


  },
  {
    name: "Anjing Shiba",
    rating: 5,
    price: 4000000,
    remainingStock: 5,
    city: "DKI Jakarta",
    image: "/assets/dog-reseller.png",
    createdAt: new Date("2023-03-02"),
    reviewsCount: 20,
    soldCount: 1,
    viewsCount: 44,
    updatedCount: 4,
    storeType:"Official Store",
    delivery:"SlivaPack",

    age:1,


  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 2000000,
    remainingStock: 5,
    city: "DKI Jakarta",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-03-06"),
    reviewsCount: 30,
    soldCount: 4,
    viewsCount: 23,
    updatedCount: 7,
    storeType:"Official Store",
    delivery:"Cargo",
    age:1,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 6000000,
    remainingStock: 5,
    city: "Surabaya",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-03-06"),
    reviewsCount: 10,
    soldCount: 22,

    viewsCount: 65,
    updatedCount: 8,
    storeType:"Official Store",
    delivery:"Cargo",
    age:4,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 3000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-07-06"),
    reviewsCount: 60,
    soldCount: 30,
    viewsCount: 45,
    updatedCount: 2,
    storeType:"Official Store",
    delivery:"Cargo",
    age:2,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 9000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-05-15"),
    reviewsCount: 9,
    soldCount: 10,
    viewsCount: 100,
    updatedCount: 2,
    delivery:"Cargo",
    age:2,
    storeType:"Official Store"
  },
  {
    name: "Anjing Shepherd",
    rating: 5,
    price: 8000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/dog-reseller.png",
    createdAt: new Date("2023-02-11"),
    reviewsCount: 20,
    soldCount: 10,
    viewsCount: 40,
    updatedCount: 1,
    storeType:"Official Store",
    delivery:"Cargo",
    age:3,


  },
  {
    name: "Anjing Husky",
    rating: 5,
    price: 2000000,
    remainingStock: 5,
    city: "DKI Jakarta",
    image: "/assets/dog-reseller.png",
    createdAt: new Date("2022-11-11"),
    reviewsCount: 44,
    soldCount: 10,

    viewsCount: 19,
    updatedCount: 3,
    storeType:"Official Store",
    delivery:"SlivaPack",
    age:2,



  },
  {
    name: "Kucing Sphynx",
    rating: 5,
    price: 4000000,
    remainingStock: 5,
    city: "Surabaya",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-12-15"),
    reviewsCount: 24,
    soldCount: 10,
    viewsCount: 55,
    updatedCount: 5,
    storeType:"Official Store",
    delivery:"SlivaPack",
    age:2,



  },
  {
    name: "Kucing Angola",
    rating: 5,
    price: 3000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2023-01-14"),
    reviewsCount: 20,
    soldCount: 2,
    viewsCount: 24,
    updatedCount: 2,
    storeType:"Official Store",
    delivery:"SlivaPack",
    age:2,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 5000000,
    remainingStock: 5,
    city: "Bali",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-08-11"),
    reviewsCount: 40,
    soldCount: 20,
    viewsCount:111,
    updatedCount:1,
    storeType:"Sliva Merchant",
    delivery:"Kurir Rekomendasi",
    age:6,


  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 10000000,
    remainingStock: 5,
    city: "Bali",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2023-02-11"),
    reviewsCount: 55,
    soldCount: 43,
    viewsCount: 33,
    updatedCount: 0,
    storeType:"Official Store",
    delivery:"Kurir Rekomendasi",
    age:4,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 8000000,
    remainingStock: 5,
    city: "Pekanbaru",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2023-03-04"),
    reviewsCount: 20,
    soldCount: 22,
    viewsCount:54,
    updatedCount:1,
    storeType:"Sliva Merchant Pro",
    delivery:"Kurir Rekomendasi",
    age:5,


  },
  {
    name: "Anjing Shiba",
    rating: 5,
    price: 4000000,
    remainingStock: 5,
    city: "DKI Jakarta",
    image: "/assets/dog-reseller.png",
    createdAt: new Date("2023-03-02"),
    reviewsCount: 20,
    soldCount: 1,
    viewsCount: 44,
    updatedCount: 4,
    storeType:"Official Store",
    delivery:"SlivaPack",

    age:1,


  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 2000000,
    remainingStock: 5,
    city: "DKI Jakarta",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-03-06"),
    reviewsCount: 30,
    soldCount: 4,
    viewsCount: 23,
    updatedCount: 7,
    storeType:"Official Store",
    delivery:"Cargo",
    age:1,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 6000000,
    remainingStock: 5,
    city: "Surabaya",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-03-06"),
    reviewsCount: 10,
    soldCount: 22,

    viewsCount: 65,
    updatedCount: 8,
    storeType:"Official Store",
    delivery:"Cargo",
    age:4,



  },
  {
    name: "Kucing Persia",
    rating: 5,
    price: 3000000,
    remainingStock: 5,
    city: "Bandung",
    image: "/assets/cat-reseller.png",
    createdAt: new Date("2022-07-06"),
    reviewsCount: 60,
    soldCount: 30,
    viewsCount: 45,
    updatedCount: 2,
    storeType:"Official Store",
    delivery:"Cargo",
    age:2,



  },
];

