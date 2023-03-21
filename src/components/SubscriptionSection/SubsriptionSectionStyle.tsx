import styled from "styled-components";

export const SubscriptionStyled = styled.section`
  background: #eff2f4;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const EmailInput = styled.input`
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  &::placeholder {
    color: gray;
  }
  outline: none;
  background: none;
  color:gray;
`;
