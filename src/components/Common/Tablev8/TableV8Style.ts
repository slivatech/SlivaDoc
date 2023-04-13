import styled, { css } from 'styled-components';

interface IStyledTableHeader {
  stickyHeader: boolean;
  stickyFromTop: number;
}
const StyledTableHeader = styled.div<IStyledTableHeader>`
    ${({ stickyHeader, stickyFromTop }) => (stickyHeader) ? css`
    position: sticky;
    top: ${stickyFromTop || 0}px;
    z-index: 9;
    ` : ''};
    .resizer {
        height: 100%;
        width: 5px;
        margin: 0 0 0 8px;
        
        cursor: col-resize;
        user-select: none;
        touch-action: none;
    }
    .resizer.isResizing {
        background: red;
        opacity: 1;
    }
`;
export interface StyledProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * Whether to have a border separating the rows
   */
  hasRowBorder?: boolean;
  /**
   * Whether a row is clickable, when mouse hover on a row the cursor will be a pointer.<br/>
   * This will be always set to true when onRowClick function is defined.
   */
  clickableRow?: boolean;
  /**
   * Padding Style for th, tr, td.
   * Default value is   paddingStyle = {
    tr: '0.4rem 0',
    th: '0 0 0.7rem 0',
    td: '0',
  },
   */
  paddingStyle?: {
    th?: string;
    tr?: string;
    td?: string;
  };
  /**
   * increase/decrease table font size 
   */
  fontSize?: number;

  minWidthTr?: string;
}
const defaultPaddingStyle = {
  tr: '0.4rem 0',
  th: '0 0 0.7rem 0',
  td: '0',
}
const StyledTable = styled.div<StyledProps>`
padding: 0rem;
display: block;
.table {
  background: ${() => 'transparent' || '#FFFFFF'};
  color: rgb(102, 102, 102);
  .thead {
    /* overflow-y: auto; */
    display: flex; 
    flex: 1 0 auto; 
    min-width: 0px;
  }
  .tr {
    display: flex; 
    flex: 1 0 auto; 
    min-width: ${({ minWidthTr }) => minWidthTr? minWidthTr : '0px'};;
    padding: ${({ paddingStyle }) => paddingStyle!.tr || defaultPaddingStyle.tr};
    ${({ clickableRow }) => (clickableRow === true) ? `cursor: pointer;` : ''};
    /* background: transparent; */
    background-color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    /* &:hover {
      background: #f0f3fa;
    } */
    &.active-row {
      background: #f0f3fa;
    }
    
    border-bottom: #E6E6E6;
    :last-child {
      .td {
        border-bottom: 0;
      }
      border-bottom: 0;
    }
  }
  .td {
    padding: ${({ paddingStyle }) => paddingStyle!.td || defaultPaddingStyle.td};
    font-size: 13px;
  }
  .th, .td {
    display: flex; 
    min-width: 0px;
    position: relative;
    flex-wrap: wrap;
    box-sizing: border-box;
    :last-child {
      border-right: 0;
    }
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .th {
    flex: 1 0 auto; 
    padding: ${({ paddingStyle }) => paddingStyle!.th || defaultPaddingStyle.th};
    font-size: 16px;
    /* border-right: solid 1px #E6E6E6; */
    margin: 1rem 0;
    &.edit-th{
      flex-direction: column;
      justify-content: end;
      padding: 0 8px;
    }
    &.edit-th.editable{
      min-width: 42px;
    }
    :last-child {
      border-right: 0;
    }
  }
  .left {
    justify-content: flex-start;
    align-items: flex-start;
  }
  .right {
    justify-content: flex-end;
    align-items: flex-end;
  }
  .center {
    justify-content: center;
    align-items: center;
  }
  .sortable {
    cursor: pointer;
    i {
      margin-top: 3px;
      margin-left: 5px;
      text-decoration: none;
    }
  }
  .delete-column {
    box-sizing: border-box; 
    flex: 30 0 auto; 
    min-width: 0px; 
    width: 30px; 
    justify-content: flex-end; 
    align-items: flex-start; 
    display: flex;
  }
}
`;
const TableWrapper = styled.div`
    border-spacing: 0;
    min-width: 0;
`;
const NoDataDisplayContainer = styled.div`

`;
const NoData = styled.div`
  text-align: center;
`;
const StyledPaginationControl = styled.span`
  font-size: 12px;
  padding-bottom: 1rem;
  color: #000000;
  background: #F4F4F4;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    margin: 0.2rem 0.3rem;
    padding: 0.2rem 0.5rem;
    border: 1px solid #999999;
  }
  span.active, span:hover {
    font-weight: 600;
    background: #666666;
    color: #FFFFFF;
    border: 1px solid #F4F4F4;
  }
  span.disabled {
    cursor: default;
    color: #CCCCCC;
  }
`;
const StyledFirstLastPaginationControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #999999;
  font-size: 12px;
  margin: 0.5rem 0;
  div {
    flex: 1;
  }
  .pagenum {
    margin-left: 1rem;
  }
  .pagecontrol {
    text-align: right;
    margin-right: 1rem;
    a {
      margin: 0 0.5rem;
      span {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
`;
export {
  StyledTable,
  TableWrapper,
  StyledTableHeader,
  NoDataDisplayContainer,
  NoData,
  StyledPaginationControl,
  StyledFirstLastPaginationControl
}