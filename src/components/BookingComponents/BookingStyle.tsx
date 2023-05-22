import styled from "styled-components";

// export const BookingStyle = styled.div`
//   padding: 2rem 1rem;
//   padding: 2rem 8%;

//   h1 {
//     font-size: 24px;
//   }
//   width:65%;
// `;

export const FeatureContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  div {
    display: flex;
    column-gap: 0.5rem;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 540px) {
      column-gap: 0.25rem;
      img {
        width: 11px;
        height: 11px;
      }
    }
  }
  p {
    color: rgba(28, 28, 28, 0.671);
    font-size: 12px;
    @media (max-width: 540px) {
      font-size: 6px;
    }
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  /* position:absolute; */
  width: 100%;
  flex: 1;
  margin: 0 auto;

  input {
    outline: none;
    padding: 0 1rem;
    flex: 0.8;
  }
  .btn {
    flex: 0.2;
  }
`;

export const TimeDropdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
  position: relative;
  div {
    white-space: nowrap;
  }
`;
export const DoctorResultStyle = styled.div`
  padding: 1rem;
  @media (max-width: 1024px) {
    border: none;
  }
  border: 1px rgba(153, 146, 146, 0.7) solid;
  border-radius: 5px;
  color: rgba(28, 28, 28, 0.7);
  font-size: 10px;
  .span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-top: 0.5rem;

    img {
      width: 14px;
      height: 14px;
    }
    .location {
      font-weight: 700;
    }
  }
  p {
    margin: 0;
  }
  img {
    border-radius: 50px;
    width: 60px;
    height: 60px;
    object-fit: cover;
  }

  .firstChild {
    display: flex;
    gap: 1rem;
    /* flex: .78; */
    h2 {
      color: rgba(28, 28, 28, 0.7);
      font-size: 16px;
      margin: 0;
    }
  }
  .secondChild {
    display: flex;
    /* flex: .22; */
    flex-direction: column;
    .reviewContainer {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      img {
        width: 14px;
        height: 14px;
      }
    }

    border-left: 0.5px solid rgba(28, 28, 28, 0.6);
    padding: 0 0.5rem;
  }
  .secondChild.doctorTab {
    justify-content: space-between;
  }

  .scheduleContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    img {
      width: 17px;
      height: 23px;
    }
  }
`;

export const PriceInput = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: rgba(28, 28, 28, 0.7);
  white-space: nowrap;
  border: 1px solid rgba(146, 146, 146, 0.7);
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    border: none;
    outline: none;
    color: rgba(28, 28, 28, 0.7);

    padding: 0 0.5rem;
    border-left: 1px solid rgba(28, 28, 28, 0.7);
    margin-left: 0.5rem;
  }
`;

export const GunakanLokasi = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 10px;
`;

export const TimePickerButton = styled.div`
  padding: 0.1rem 0.5rem;
  min-width: 7rem;
  width: 100%;
  font-size: 12px;
  background-color: #fff;
  border-radius: 5px;
  color: rgba(28, 28, 28, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid rgba(153, 146, 146, 0.7);
  cursor: pointer;
  position: relative;
`;

export const TimePickerDropdown = styled.div`
  position: absolute;
  background: white;
  padding: 1rem;
  right: 0;
  bottom: -400%;
  z-index: 50;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
`;
