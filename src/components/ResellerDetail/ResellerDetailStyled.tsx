import styled from "styled-components";

export const ResellerProfileStyled = styled.div`
  background: white;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0px 4px 4px 0px #00000040;
`;

export const ResellerProfileWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  .content {
    flex: 1;
    width: 100%;
  }

  .store-name {
    font-size: 20px;
  }

  .city {
    color: #7076ae;
    font-size: 14px;
    margin: 0.25rem;
  }
  .profile-buttons {
    display: flex;
    font-weight: 700;
    gap: 1rem;
  }

  .time {
    font-size: 14px;
    font-weight: 700;
    color: #2335d4;
    margin-top: 0.5rem;
  }
  p {
    font-size: 14px;
    color: #7076ae;
  }
`;

export const SecondaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  .stats {
    display: grid;
    padding: 0 2rem;
    gap: 2rem 4rem;
    grid-template-columns: 1fr 1fr;
    border-left: 0.5px solid #7076ae;
    .stat {
      display: flex;
      max-width: 200px;
      column-gap: 1rem;
      justify-content: space-between;
      span {
        color: #7076ae;
        font-size: 14px;
      }
      .number {
        font-size: 14px;
        font-weight: 700;
        color: #2335d4;
        width: 100px;
      }
    }
  }
`;

export const PromoBanners = styled.div`
  margin: 1rem 0;
  position: relative;
  .navBtns {
    position: absolute;
    top: 50%;
    z-index: 50;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    button {
      border-radius: 50px;
      outline: none;
      border: none;
      width: 46px;
      cursor: pointer;
      height: 46px;
    }
  }
`;

export const AnimalCardStyled = styled.div`
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
  background: white;
  .name {
    color: #2335d4;
    font-weight: 700;
    font-size: 12px;
  }
  .rating {
    color: #eeff00;
    font-size: 12px;
  }
  .price {
    color: #2335d4;
    font-weight: 700;
    font-size: 12px;
  }
  .discount {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: #2335d4;
    .strikethrough {
      position: relative;
    }
    .strikethrough:before {
      position: absolute;
      content: "";
      left: 0;
      top: 50%;
      right: 0;
      border-top: 1px solid;
      border-color: inherit;

      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      -o-transform: rotate(-5deg);
      transform: rotate(-5deg);
    }
    span {
      background: #c5eff1;
      border-radius: 2px;
      font-weight: 700;
      font-size: 8px;
      padding: 0.25rem;
    }
    p {
      font-size: 10px;
    }
  }

  .separator {
    width: 100%;
    height: 0.5px;
    background: #2335d4;
    margin: 0.5rem 0;
  }
  .stock {
    font-size: 8px;
    color: #2335d4;
    span {
      font-weight: 700;
    }
  }
  .city {
    font-weight: 700;
  }
`;

export const Row = styled.div`
  margin: 1.5rem 0;
  h2 {
    margin-bottom: 1.5rem;
  }
`;

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
`;

export const ShopDetailsStyled = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  border-radius: 5px;
  background: white;
  .title {
    color: #2335d4;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 5px;
    background: #ceeaf0;
  }
  .content {
    padding: 1rem 2rem;
    font-size: 14px;
    color: #7076ae;
    .key {
      width: 100px;
    }
    .value {
      font-weight: 700;
      font-size: 14px;
      width: 150px;
    }
    .subcontent {
      display: flex;
      gap: 2rem;
      margin: 1rem 0;
    }
  }
`;

export const ResellerProductHeader = styled.div`
  margin: 1rem 0;
  display: flex;
  column-gap: 1rem;
  .space {
    flex: 0.25;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0.75;
    h2 {
      font-size: 24px;
      color: #1c1c1c;
    }
  }
  .filtering {
    display: flex;
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
  }
`;

export const ProductContent = styled.div`
  display: flex;
  margin-top: 2rem;
  column-gap: 1rem;
  .product-row {
    flex:.75;
  }
  .sidebar {
    flex: 0.25;
    .etalase {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      row-gap: .5rem;
      label {
        font-style:italic;
        padding: .5rem 1rem;

      }
      .all-product {
        background: #F4FCFE;
        font-weight: 700;
        border-radius: 5px;
        border: 0.5px solid #66C2DF;
        margin-top:1rem;
      }

      .discount-promo {
        display:flex;
        align-items: center;
        column-gap: 1rem;
        .promo {
        text-transform: uppercase;
        color:white;
        font-weight: 700;
        border-radius: 2px;
        background-color: #F9032F;
        font-size: 10px;
        display: grid;
        place-items: center;
        width: 60px;
        height: 18px;
        align-items: center;
      }
      }

    }
    .voucher,
    .etalase {
      padding: 0.5rem;
      background: #ffffff;
      border: 0.5px solid #ceeaf0;
      border-radius: 5px;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }
    }
  }
`;

export const VoucherCard = styled.div`
  padding: 0.5rem;
  background: #ceeaf0;
  border-radius: 5px;
  color: #2335d4;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0.5rem;
  position: relative;
  .voucher-name {
    position: absolute;
    top: 0;
    right: 25%;
    transform: translateX(50%);
    align-items: center;
    display: flex;
    h1 {
      font-size: 20px;
      color: #2386e2;
    }
  }
  .firstRow {
    font-size: 14px;
  }
  .minimal {
    font-size: 10px;
    font-style: italic;
  }
`;
