import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  .Tab-Container{
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
border-radius: 20px 20px 0px 0px;
    h1{
      font-style: italic;
      font-weight: 700;
      font-size: 24px;
      line-height: 22px;
      color: #1C1C1C;
      padding: 20px;
      border-bottom: 2px solid #617A80;
    }
  }
  .Head-filter{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-between;
    margin: auto;
  
    margin-top:48px;
    width: 100%;;
    div{
      display: flex;
      align-items: center;

      
    }

    h1{
      font-style: italic;
font-weight: 700;
font-size: 20px;
line-height: 22px;
cursor: pointer;
color: #FF0B0B;
margin-right:20px;
    }
    
  }
`;

export const FilterButton = styled.button`
display: flex;
  width: 94px;
height: 43px;
background: #FFFFFF;
border: 0.5px solid #000000;
border-radius: 5px;
padding: 10px;
justify-content:space-between;
align-items: center;

  cursor: pointer;
  img{
    width: 25px;
height: 24px;
  }
  p{
    font-weight: 400;
font-size: 14px;
line-height: 22px;
font-weight: 400;
font-size: 14px;
line-height: 22px;
  }
`;
export const HeadPopup =styled.h1`
  font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 22px;
margin-bottom:45px;
color: #1C1C1C;
;`
export const FilterPopup = styled.div`
  background: #FFFFFF;
border-radius: 20px;
  padding: 53px;
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 895px;
height: 794px;
  .filter {
    display: flex;
    flex-direction: column;
    margin-bottom:50px;
    .input-filter{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  label {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    color: #674c4c;
    margin-bottom:28px;
  }
  .filter-select {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    div{
      background: #FFFFFF;
border: 0.5px solid #CEEAF0;
border-radius: 5px;
margin-right: 23px;
    }
  }

  .filter-select > div {
    padding: 5px 10px;
    background: #ffffff;
    border: 0.5px solid #ceeaf0;
    border-radius: 5px;
  }

  .filter-select > div.selected {
    background-color: #007bff;
    color: #fff;
  }
`;

export const FilterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const FilterDropdown = styled.select`
  padding: 5px;
  width: 174px;
height: 43px;
left: 359px;
top: 1095px;

background: #FFFFFF;
border: 0.5px solid #CEEAF0;
border-radius: 5px;
`;

export const FilterInput = styled.input`
  padding: 5px;
  width: 292px;
height: 43px;
background: #FFFFFF;
border: 0.5px solid #CEEAF0;
border-radius: 5px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  margin-top: 20px;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 25px;
  background: none;
  border: none;
  font-size: 28px;
  font-style:bold;
  font-weight:800;
  cursor: pointer;
`;

export const OriginalPrice = styled.p`
 font-weight: 400;
font-size: 10px;
line-height: 15px;

  color: #2335d4;
  text-decoration: line-through;
`;
export const Discount =styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 16px;
height: 13px;
left: 550px;
top: 1506px;
background: #C5EFF1;
border-radius: 2px;
margin-right: 5.21px;
p{
  font-weight: 700;
font-size: 6px;
line-height: 10px;
color: #2335D4;

}
`;
export const TabContainer = styled.div`
  display: flex;
  margin-top:57px;
`;

export const Tab = styled.div<{ isActive: boolean }>`
font-style: italic;
margin-right:88px;
font-weight: 700;
font-size: 20px;
line-height: 22px;
color: #1c1c1c;
font-weight:  ${(props) => (props.isActive ? "700" : "400")};
  padding: 10px;
  cursor: pointer;
  border-bottom: ${(props) => (props.isActive ? "5px solid #617A80;" : "none")};

`;

export const DiscountedPrice = styled.h1`
  font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 22px;
color: #2335D4;
`;
export const Card = styled.div`
  background: #fff;
  padding: 10px;
  width: 171px;
  height: auto;
  border: 0.3px solid #CEEAF0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
 export const Detailproduk=styled.div`
  margin-top: 5px;
  p{
    font-weight: 800;
font-size: 6px;
line-height: 15px;
font-style:bold;
color: #2335D4;
span{
  font-style: normal;
  font-weight:400;
}
  }
 `;
export const CardTitle = styled.h1`
  font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 22px;
color: #2335D4;
`;

export const CardContent = styled.div`
border-bottom:0.5px solid #625757;
.discount-detail{
  display: flex;
  align-items: center;
  margin-bottom:6px;
  margin-right: 5px;
}
`;


export const Rating = styled.div`
  display: flex;
  color: gold;

  span {
    margin-right: 2px;
  }

  .empty {
    display: none;
   
  }
`;
export const Images =styled.img`
  width: 153px;
height: 120px;
`;

export const Button =styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:37px;
margin-bottom: 37px;

button{
  cursor: pointer;
  width: 272px;
  padding: 16px;
  background: #EEF2F6;
box-shadow: 3px 2px 4px rgba(0, 0, 0, 0.25);
border: none;
border-radius: 5px;
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align: center;

color: #040000;
}
`;