import styled from "styled-components";

 const StyledRadioCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1c1c1c;
  font-size: 10px;
`;

interface RadioProps {
  value:string;
  label:string;
  checked?:boolean;
  handleChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton:React.FC<RadioProps> = ({ value,label,handleChange,checked }) => {
    return (
      <StyledRadioCategory>
        <input type="radio" checked={checked} value={value} onChange={handleChange} />
        <label>{label}</label>
      </StyledRadioCategory>
    );
  };

  export default RadioButton;