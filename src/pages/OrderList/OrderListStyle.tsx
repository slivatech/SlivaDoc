import styled from "styled-components";
import { GlobalSearch } from "../InvoiceList/InvoiceListStyle";
import { TableV8 } from "../../components/Common/Tablev8";

export const NameColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const IconColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const StatusColumn = styled.div<{
  status?: "Complete" | "Cancel" | "In Delivery" | "Ready to Ship",
  paymentStatus?: "Complete" | "Pending" | "fail" | "Complained",
}>(
  ({ status, paymentStatus }) => `
    padding: 15px 44px;
    min-width: 150px;
    border-radius: 22.5px;
    font-size:14px;
    background:${
      status === "Complete" || status === "Ready to Ship" || paymentStatus === "Complete" ? "rgba(3, 168, 158, 0.1)"
        : status === "In Delivery" || paymentStatus === "Pending"  ? "rgba(58, 54, 219, 0.1)"
        : "rgba(255, 105, 180, 0.1)"
    };
    color: ${
        status === "Complete" || status === "Ready to Ship"  || paymentStatus === "Complete"? "#03A89E"
        : status === "In Delivery" || paymentStatus === "Pending" ? " #3A36DB"
        : "#FF69B4"
    };
    display:flex;
    justify-content:center;
    align-items:center;
`);

export const Header = styled.div`
    border-radius: 5px 5px 0px 0px;
    border: 1px solid #E4E4E4;
    background: #FFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    padding: 19px 32px 17px;
    button {
      border: none;
      background: #FFF;
      color: #5C5555;
      font-size: 16px;
      cursor: pointer;
    }
   
`

export const FilterContainer = styled.div`
    display: flex;
    gap: 20px;
    background: #FFF;
    padding: 16px 32px;
    width: 100%;
`
export const Filter = styled(GlobalSearch)`
    width: 100%;
    border-radius: 3px;
    border: 1px solid #E4E4E4;
    background: #FFF;

`


