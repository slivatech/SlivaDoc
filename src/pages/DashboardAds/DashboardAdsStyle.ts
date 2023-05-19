import styled from "styled-components";
import calendarPink from '../../assets/icon/calendar-pink.svg'

export const ImageColumn = styled.img`
  width: 79px;
  height: 31px;
  object-fit: cover;
  border-radius: 3px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
    @media (max-width: 720px) {
        flex-direction: column;
    }

  h5 {
    font-weight: 500;
    font-size: 18px;
    color: #06152b;
    opacity: 0.7;
  }

    .table {
        // width: auto;
        min-height: 100%;
        background-color: #fff;
        border-radius: 10px;
        flex-basis: 70%;
    }
`;

export const Chart =styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;

        .bar-chart {
            width: 100%;
            height: 100%;
            background-color: #fff;
            border-radius: 10px;
            margin-bottom: 30px;
            padding: 30px;
        }
        .pie-chart{
            background-color: #fff;
            border-radius: 10px;
            padding: 30px;
        }
`;

export const Form = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    
    .inpWrap{
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        label {
            font-weight: 500;
            font-size: 16px;
            color: #06152B;
        }

        input, textarea{
            outline: none;
            border: none;
            background-color: #F1F4FA;
            border-radius: 5px;
            padding: 20px 15px;
        }

        input[type=date] {
            padding: 15px;
        }
        input[type=date]::-webkit-calendar-picker-indicator {
            background-image: url(${calendarPink});
            width: 40px;
            height: 40px;
        }
    
    }

`

export const Profile = styled.div`
    width: 178px;
    height: 71px;
    background-color: #EBDEDE;
    border-radius: 5px;
    position: relative;
`

export const StatusColumn = styled.div<{
    status: "Complete" | "Pending" | "Cancel";
  }>(
    ({ status }) => `
      padding: 7px 20px;
      min-width: 89px;
      border-radius: 22.5px;
      font-size: 10px;
      background:${
        status === "Complete"
          ? "rgba(3, 168, 158, 0.1)"
          : status === "Pending"
          ? "rgba(58, 54, 219, 0.1)"
          : " rgba(255, 105, 180, 0.1)"
      };
      color: ${
        status === "Complete"
          ? "#03A89E"
          : status === "Pending"
          ? " #3A36DB"
          : "#FF69B4"
      };
      display:flex;
      justify-content:center;
      align-items:center;
  `
);