import styled from "styled-components";

export const ScheduleListStyle = styled.div`
  background: #f1f4fa;
  height: 100vh;
  overflow-x: hidden;
  width: 100%;
  padding: 1rem;
  transition: margin-right 0.5s;
  color: "#06152B";
  overflow: hidden;
  padding-bottom: 4rem;
  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 25px;
  }
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
  .location {
    display: flex;
    width: 75%;
    padding: 0 1rem;
    gap: 0.5rem;
    border-radius: 50px;
    align-items: center;
    color: #3a36db;
    background-color: rgba(58, 54, 219, 0.1);
  }
  .column {
    font-size: 14px;
    color: #06152b;
  }
`;

export const ScheduleSidebar = styled.aside`
  padding: 1rem;
  background-color: white;
  flex: 0.2;
  border-radius: 5px;
  height: 100vh;

  /* .createBtn {
        background: #3A36DB;
        border-radius: 7px;
    } */
`;

export const EditColumn = styled.div`
  background: rgba(3, 168, 158, 0.1);
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: grid;
  cursor: pointer;
  place-items: center;
`;
export const DeleteColumn = styled.div`
  background: rgba(255, 105, 180, 0.1);
  border-radius: 50px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
`;
