import styled from "styled-components";

export const ConsultationStyle = styled.div`
  padding: 2rem 1rem;
  padding: 2rem 8%;

  h1 {
    font-size: 24px;
  }
  width: 65%;
`;

export const FeatureContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  p {
    color: rgba(28, 28, 28, 0.671);
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  div {
    flex: 0.4;
  }
  input {
    outline: none;
    padding: 0 1rem;
    flex: 0.4;
  }
  .btn {
    flex: 0.2;
  }
`;

export const TimeDropdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
  div {
    white-space: nowrap;
  }
`;
export const DoctorResultStyle = styled.div`
  padding: 1rem ;

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
    align-items: flex-start;
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
    justify-content: space-between;
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
