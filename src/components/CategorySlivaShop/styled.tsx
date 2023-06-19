import styled from "styled-components";

export const SearchProductStyled = styled.div`
  display: flex;
  width: 100%;
  input {
    padding: 0.7rem 1rem;
    border: 1px solid #0d6efd;
    background: white;
    outline: none;
    border-radius: 5px 0px 0px 5px;

    font-size: 14px;
    flex: 0.9;
  }
  .btn {
    border-radius: 0px 5px 5px 0px;
    border: none;
    color: white;
    cursor: pointer;

    flex: 0.1;
    background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  }
`;

export const CategorySectionStyled = styled.section`
  padding: 3rem 2rem 1rem;
  background: #ceeaf0;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-family: "Inter";
    font-style: italic;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    /* identical to box height, or 92% */

    /* dark */

    color: #1c1c1c;
    span {
      color: #2335d4;
    }
  }

  .line {
    border: 1px solid #617a80;
    width: 200px;
    margin-top: 1rem;
  }
  ul {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    width: 100%;
    margin-top: 2rem;
    justify-content: space-between;
  }
`;

export const ListItem = styled.li<{ isActive: boolean }>`
  list-style: none;
  position: relative;
  cursor: pointer;
  font-style: italic;
  &::before {
    content: "";
    bottom: -15px;
    width: 100%;
    height: 2px;
    background: ${(props) => (props.isActive ? "black" : "")};
    position: absolute;
  }
`;

export const Filtering = styled.div`
  display: flex;
  margin: 2rem 0;
  width: 100%;
  justify-content: end;
  gap: 1rem;
  button {
    cursor: pointer;
    font-style: italic;
    color: black;
    font-weight: 700;
  }
  button.reset-btn,
  button.sort-btn {
    color: #ff0b0b;
    border: none;
    background: none;
  }
  button.sort-btn {
    color: black;
  }
`;

export const ProductContentStyled = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: start;
  .wrapper:last-child {
    border-bottom: none;
  }
  .wrapper {
    padding: 1.5rem;
    border-bottom: 0.5px solid #ceeaf0;
    .categories-wrapper {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;
      margin-top: 1rem;
      margin-left: 1rem;
    }
    .category-link {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      cursor: pointer;

      p {
        color: #7076ae;
        font-size: 13px;
        
        &.active-link {
        font-weight: 700;
      
        }
      }
  
      .active {
        transform: rotate(90deg);
        transition: all 0.2s ease-in-out;
      }
      .disabled {
        transform: rotate(0deg);
        transition: all 0.2s ease-in-out;
      }
    }
  }
  .price-input {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    .price-input-wrapper {
      display: flex;
      border: 0.5px solid #CEEAF0;
      border-radius: 5px;

      .rp {
        border-radius: 5px;
        background: #CEEAF0;
        color: #674C4C;
        font-size: 12px;
        height: 45px;
        width: 45px;
        font-weight: 700;
        display:grid;
        place-items: center;
      }
      input {
        appearance: none;
        border:none;
        outline:none;
        padding: 0 1rem;
        font-style: italic;
      }
    }
    p {
      font-weight: 700;
      font-size: 12px;
      line-height: 22px;

      color: #674c4c;
    }
  }
  .checkbox {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
    input {
      width: 28px;
      height: 27px;
    }
    label {
      color: #7076ae;
    }
  }
  .filter-section {
    background: #ffffff;
    border: 0.5px solid #ceeaf0;
    border-radius: 5px 5px 0px 0px;
    flex: 0.25;
    header {
      border-bottom: 0.5px solid #ceeaf0;

      p {
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;

        color: #1c1c1c;
      }
    }
  }
`;
