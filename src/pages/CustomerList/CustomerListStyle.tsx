import styled from "styled-components";

export const CustomerListStyle = styled.div<{ isSidebarOpen: boolean }>(({ isSidebarOpen }) => `
      background: #f1f4fa;
    height: 100vh;
    overflow-x:hidden;
    width:100%;
    padding:1rem;
    margin-right:${isSidebarOpen ? "25%" : 0};
    transition: margin-right .5s; 
    color: "#06152B" ;
    overflow:hidden;
    padding-bottom:4rem;

    h2 {
      margin:0;
    }
  `
  );
export const NameColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:.5rem;
  padding: 0 .5rem;
`;

export const GenderColumn = styled.div<{ gender:"Male" | "Female" }>(({ gender })=>`
    border-radius: 50px;
    padding: 0 1rem;
    align-self:center;
    text-align: center;
    height:30px;
    font-size:14px;
    background:${gender === "Male" ? "rgba(3, 168, 157, 0.185)" :"rgba(255, 105, 180, 0.185)" };
    color: ${gender === "Male" ? "#03a89e" : "#FF69B4"};
    display:flex;
    justify-content:center;
    align-items:center;
`)
