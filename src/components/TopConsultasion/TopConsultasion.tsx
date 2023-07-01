import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
width:100%;
display: flex;
flex-direction:column;
background-color: rgba(255, 255, 255, 1);
.product-detail{
    display: flex;
    flex-direction: row;
    margin-top: 25px;
        img{
            
            padding: 16px;
            border-radius: 14px;
            width: 96px;
            height: 96px;
            background-color:#acd3f06a
            
        }

}
`;
const Descproduct=styled.div`
    display: flex;
    flex-direction:column;
    margin-left: 20px;
    h3{
        color: var(--light-version-type-text-dark, #06152B);
/* H6 */
font-size: 16px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
line-height: normal;
    }
    p{
        color: var(--light-version-type-text-dark, #06152B);
/* H6 */
font-size: 16px;
font-family: DM Sans;
font-style: normal;
font-weight: 500;
line-height: normal;
    }
`;

interface Product {
  id: number;
  name: string;
  rating: number;
  price: number;
  image: string;
}

interface TopConsultasionProps {
  products: Product[];
}

const TopConsultasion: React.FC<TopConsultasionProps> = ({ products }) => {
  const sortedProducts = products.sort((a, b) => b.rating - a.rating);
  const topProducts = sortedProducts.slice(0, 2);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor =  'pink';
      const starIcon = rating >= i ? '★' : '☆';
      stars.push(
        <span key={i} style={{ color: starColor }}>
          {starIcon}
        </span>
      );
    }
    return stars;
  };

  return (
    <Container>
      {topProducts.map((product) => (
        <div className='product-detail' key={product.id}>
          <img src={product.image} alt={product.name} />

          <Descproduct>
          <h3>{product.name}</h3>
          <p>{renderStars(product.rating)}</p>
          <p>Rp. {product.price.toLocaleString('id-ID')}</p>
          </Descproduct>
        </div>
      ))}
    </Container>
  );
};

export default TopConsultasion;
