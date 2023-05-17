import Select from "../Select/Select";
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
          <Select
            border=" 0.5px solid rgba(153, 146, 146, 0.7)"
            label={category.mainValue}
            borderType="bottom"
            values={[category.mainValue]}
            iconEnd={
              <img src="/assets/arrow_dropdown.svg" alt="arrow_dropdown" />
            }
          />

          {category.radios.map((radio, i) => (
            <RadioCategory key={i} value={radio} />
          ))}
        </CategoryBox>
      ))}
    </StyledCategory>
  );
};

export default CategorySection;
