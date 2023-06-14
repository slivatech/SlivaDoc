import React from 'react'
import styled from 'styled-components';

const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  gap: 2rem;

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;

    width: 31px;
    height: 29px;
    border-radius: 5px;
    border: 0.5px solid #2B3335;
    outline: none;
    cursor: pointer;
  }

  label {
    color: #7076AE;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`



interface CheckboxProps {
  id?:  string;
  title?: string | number;
  name?: string ;
  handleChange?: any;
  checked?: any;
}

export const CheckboxFilter:React.FC<CheckboxProps> = ({id, title, name, handleChange, checked}) => {
  return (
    <CheckBox>
        <input
          id={id}
          type="checkbox"
          name={name}
          onChange={handleChange}
          checked={checked}
        />
        <label htmlFor={id}>{title}</label>
    </CheckBox>
  )
}


