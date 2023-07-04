import { Animal } from "../../types/typings";
import { AnimalCardStyled } from "./ResellerDetailStyled";

interface Props {
  animal: Animal;
}

const AnimalCard: React.FC<Props> = ({ animal }) => {
  return (
    <AnimalCardStyled>
      <img src={animal.image} alt="animal" />
      <p className="name">{animal.name}</p>
      <div className="rating">
        {[...new Array(animal.rating)].map(() => (
          <i className="fa-solid fa-star"></i>
        ))}
        <i className="fa-solid fa-star"></i>
      </div>
      <p className="price">
        Rp. {(animal.price - (animal.price * 5) / 100).toLocaleString()}
      </p>
      <div className="discount">
        <span>5%</span>
        <p className="strikethrough">Rp{animal.price.toLocaleString()} </p>
      </div>
      <div className="separator"></div>
      <div className="stock">
        <p>
          Stok tersisa <span> {animal.remainingStock} ekor</span>
        </p>
        <p className="city">Kota {animal.city}</p>
      </div>
    </AnimalCardStyled>
  );
};

export default AnimalCard;
