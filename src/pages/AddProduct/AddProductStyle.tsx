import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
  .action-btns {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 1rem;
    button {
      width: 157px;
      height: 37px;
      background: transparent;
      border-radius: 3px;
      font-size: 12px;
      color: #4b4545;
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .colored {
      background: #b3e8f3;
      border: none !important;
    }
  }
  .header-text {
    font-size: 24px;
  }
  .product-box {
    padding: 2rem;
    border: 1px solid #eadada;
    margin-top: 1rem;
    border-radius: 3px;
    box-shadow: 0.3px 0.5px 3px 0px rgba(0, 0, 0, 0.25);
  }
  .product-header {
    line-height: 24px;
    h2 {
      font-weight: 500;
      font-size: 20px;

      /* margin-bottom:1rem; */
    }
    p {
      font-size: 10px;
    }
  }

  .secondary {
    flex: 0.7;
  }

  .custom-file-upload {
    cursor: pointer;
    border: 1px solid #eadada;
    padding: 3rem;
    border-radius: 3px;
  }

  .video-upload {
    cursor: pointer;
    border-radius: 3px;
    cursor: pointer;

    input {
      display: none;
    }
    div {
      border: 1px solid #eadada;
      width: 132px;
      height: 35px;

      background-color: transparent;
      font-size: 12px;
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      justify-content: center;
    }
  }

  .images-input {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .conditions {
    .active {
      font-weight: 700;
    }
  }

  .text {
    color: #4b4545;
    flex: 0.3;
    h3 {
      font-size: 14px;
      font-weight: 600;
    }
    p {
      font-size: 10px;
      margin-top: 0.5rem;
    }
  }
  .description-textarea {
    padding: 1rem;
    outline: none;
    resize: none;
    width: 100%;
    border-radius: 3px;

    &::placeholder {
      font-style: italic;
    }
    border: 1px solid #eadada;
  }
  input {
    padding: 0.5rem 1rem;
    border: 1px solid #eadada;
    outline: none;
    width: 100%;
    border-radius: 3px;
    &::placeholder {
      font-style: italic;
    }
  }

  .product-fill {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    column-gap: 4rem;
    margin-top: 2rem;
  }

  .product-fill {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    column-gap: 4rem;
    margin-top: 2rem;
  }

  .input-price {
    border: 1px solid #eadada;
    border-radius: 3px;
    display: flex;
    align-items: center;
    input {
      outline: none;
      border: none;
    }
    .currency {
      padding: 0.5rem;
      background: rgba(39, 218, 231, 0.14);
      color: #4b4545;
      font-weight: 700;
      font-style: italic;
      height: 100%;
      font-size: 11px;
    }
  }
  .switch-wrapper {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    p {
      font-size: 10px;
      font-style: italic;
    }
  }

  .radio-boxes {
    display: flex;
    column-gap: 1rem;
    font-size: 10px;
    line-height: 24px;

    .radio-box {
      display: flex;
      column-gap: 1rem;
      input {
        /* ...existing styles */
        display: grid;
        place-content: center;
        accent-color: #4b4545;
      }

      input::before {
        content: "";
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
      }

      input[type="radio"]:checked::before {
        transform: scale(1);
      }
    }
    .choice {
      display: flex;
      align-items: start;
      flex-direction: column;
      width: 45%;
    }
  }

  .switch {
    width: 40px;
    height: 20px;
    border-radius: 20px;
    border: 2px solid #4b4545;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 0.2rem;

    justify-content: start;
    &.active {
      justify-content: end;

    }
    .circle {
      width: 10px;
      height: 10px;
      
      background-color: #4b4545;
      border-radius: 100%;
 
    }
  }

  .promo-banner {
    padding: 1rem;
    background: #FAF4EC;
    border: 1px solid #CFCFCF;
    border-radius: 3px;
    margin-top: 1rem;
    p {
      font-size: 10px;
      font-style: italic;
      margin-top: .5rem;
    }
  }

  .shippingOption {
    border: 1px solid #cfcfcf;
    display: flex;
    margin-top:1rem;
    border-radius: 3px;
    width: 25%;
    align-items: center;
    color: #473E3E;
    font-size: 10px;
    column-gap: 1rem;
    padding: .5rem;
    input {
      width: auto;
    }
    img {
      object-fit: contain;
      flex: .5;
    }
    .text {
      display: flex;
      flex: 1;
      flex-direction:column;
    }
  }

  .warning {
    background: #b0d9e7;
    font-size: 10px;
    font-style: italic;
    color: #473e3e;
    padding: 1rem;
    margin-top: 1rem;

    border-radius: 3px;
    border: 1px solid #cfcfcf;
    width: 80%;
  }
  .sizes-input {
    display: flex;
    column-gap: 1rem;
  }
  .product-weight-input {
    display: flex;
    align-items: center;
    border-radius: 3px;
    width: 40%;
    border: 1px solid #eadada;
    input {
      border: none;

      &::placeholder {
        font-style: italic;
      }
    }
    .gram {
      padding: 1rem;
      font-style: italic;
      font-size: 10px;
      background-color: rgba(166, 206, 215, 0.404);
    }
  }
`;
