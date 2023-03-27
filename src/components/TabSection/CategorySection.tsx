import { categories } from "./fakeData";
import {
  CategoryBox,
  StyledCategory,
  StyledRadioCategory,
} from "./TabSectionStyle";

const RadioCategory = ({ value }: { value: string }) => {
  return (
    <StyledRadioCategory>
      <input type="radio" value={value} />
      <label>{value}</label>
    </StyledRadioCategory>
  );
};

const CategorySection = () => {
  return (
    <StyledCategory>
      <h2>Kategori</h2>
      {categories?.map((category, i) => (
        <CategoryBox key={i}>
          <div className="selectWrapper">
            <select name="cat1" id="cat1" value={category.mainValue}>
              <option value={category.mainValue}>{category.mainValue}</option>
            </select>
            <label htmlFor="cat1">
              <img src="/assets/arrow_dropdown.svg" alt="dropdown" />
            </label>
          </div>

          {category.radios.map((radio, i) => (
            <RadioCategory key={i} value={radio} />
          ))}
        </CategoryBox>
      ))}
    </StyledCategory>
  );
};

export default CategorySection;
