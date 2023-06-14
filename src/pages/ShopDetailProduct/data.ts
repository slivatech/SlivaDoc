import imgPet from '../../assets/image/dog.png'
import logoShop from '../../assets/image/logoShop.png'



export const imagesProduct = [
    imgPet, imgPet, imgPet, imgPet, imgPet
]



export const Testimoni = [
    {
        id: 1,
        image: imgPet,
        product: 'Anjing Samoyed',
        rate: 4,
        testi:[
            {
                pict: logoShop,
                name: "Koko Sutiyem",
                desc: 'Anjing nya sampai dengan selamat dan Anjing nya lucu banget',
                kepuasan: 'Sangat Puas'
            }
        ]

    },
    {
        id: 2,
        image: imgPet,
        product: 'Anjing Buldog',
        rate: 5,
        testi:
            [

                {
                    pict: logoShop,
                    images: [imgPet, imgPet, imgPet, imgPet],
                    name: "Koko Sutiyem",
                    desc: 'Anjing nya sampai dengan selamat dan Anjing nya lucu banget',
                    kepuasan: 'Sangat Puas'
                },
            ],
        reply:
            {
                logo: logoShop,
                shop: "Koko Sutiyem",
                role: "penjual",
                desc: 'Terima kasih telah berbelanja di SlivaPetStore. Bagikan link toko kami https://www.slivadoc.com/slivashop/slivaPetStore kepada teman-teman kamu. Jangan lupa follow toko kami untuk tahu update terbaru tentang stok dan produk yang kami tawarkan.',
            }

    }
]
