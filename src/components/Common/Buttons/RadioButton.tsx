import styled from "styled-components";

 const StyledRadioCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1c1c1c;
  font-size: 12px;
`;

const RadioButton = ({ value }: { value: string }) => {
    return (
      <StyledRadioCategory>
        <input type="radio" value={value} />
        <label>{value}</label>
      </StyledRadioCategory>
    );
  };

  export default RadioButton;