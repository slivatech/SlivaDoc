import  { useState } from 'react'
import { CategorySectionStyled, ListItem } from './styled'

const CategorySection = () => {
    const [_category,setCategory] = useState("Semua Produk")
    const categories = ["Semua Produk","Aksesoris Hewan","Hewan Kesayangan","Hewan Peliharaan","Makanan Hewan"]
  return (
    <CategorySectionStyled>
        <p className='title'>Semua Kategori di Sliva <span className='shop'>Shop</span> </p>
        <div className='line'>

        </div>
        <ul>
            {categories.map((category,i)=>(
            <ListItem onClick={()=>setCategory(category)} key={i} isActive={category === _category }>
                {category}
            </ListItem>

            ))}
        </ul>
    </CategorySectionStyled>
  )
}

export default CategorySection