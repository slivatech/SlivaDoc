import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  IndeterminateCheckbox,
  TableV8,
  createColumnHelper,
} from "../../components/Common/Tablev8";
import { customers } from "./InvoiceListData";
import moneyIc from "../../assets/icon/payment.svg";
import calenderIC from "../../assets/icon/Calendar.svg";
import editIc from "../../assets/icon/edit.svg";
import { IconColumn, NameColumn, StatusColumn } from "./InvoiceListStyle";
import { GlobalFilter } from "./GlobalFilter";
import { Container } from "../PageArtikel/PageArtikelStyle";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

interface InvoiceProps {
  width: number;
}

const Invoice: React.FC<InvoiceProps> = ({width}) => {
  const [editable, setEditable] = useState<number>(0);
  const { alertColumn } = useAlertColumn({
    editable: editable,
    setEditable: setEditable,
  });
  const [data, setData] = useState(customers);
  const [selectedRow, setSelectedRow] = useState<any>([]);
  const [selectedData, setSelectedData] = useState<any>([]);
  const alertRef: any = useRef(null);
  const itemPerPage = 10;
  // const detailItemPerPage = 1;
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(
    Math.ceil(customers.length / itemPerPage)
  );
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: itemPerPage,
  });
  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const toDetail = useCallback(
    (selectedRow: any, columnId: any, selectedData: any) => {
      if (alertRef && alertRef.current && columnId === "edit") {
        setSelectedData(selectedRow);
      }
    },
    []
  );

  const handleCheckRow = useCallback((rowsData: any) => {
    let temp = [...rowsData];

    setSelectedRow([...temp]);
  }, []);

  useEffect(() => {
    setPage(pageIndex + 1);
  }, [pageIndex]);

  useEffect(() => {
    let startIndex = pageIndex * itemPerPage;
    let endIndex = page * itemPerPage;
    let data = customers?.slice(startIndex, endIndex);

    setData(data);
  }, [page]);

  useEffect(() => {
    console.log({ selectedRow });
    console.log({ selectedData });
  }, [selectedData, selectedRow]);

  return (
    <>
    <Navbar width={width}/>
    <Container style={{ background: "rgba(153, 178, 198, 0.2)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>Invoice List</h2>
        <GlobalFilter />
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <TableV8
          data={data}
          ref={alertRef}
          columns={alertColumn}
          //   paginationStyle='firstlast'
          pagination={pagination}
          setPagination={setPagination}
          pageCount={pageCount}
          paddingStyle={{
            td: "0.1rem 0.2rem 0rem",
            th: "0 0.2rem 0.1rem",
            tr: "0.5rem 0",
          }}
          onCheckRow={handleCheckRow}
          onRowClick={toDetail}
          enableSorting={true}
          stickyHeader={true}
          // stickyFromTop={0}
          noDataLabel={""}
        />
      </div>
    </Container>
    <Footer/>
    </>
  );
};

export default Invoice;

interface IuseAlertColumn {
  editable?: number;
  setEditable?: any;
  selectedRow?: any;
  selectedData?: any;
}

export const useAlertColumn = ({
  editable,
  setEditable,
  selectedRow,
  selectedData,
}: IuseAlertColumn) => {
  const table = createColumnHelper();

  useEffect(() => {
    console.log(editable);
  }, [editable]);

  const alertColumn = React.useMemo(
    () => [
      table.display({
        size: 5,
        // align: 'right',
        header: (props: any) => {
          if (props) {
            const { table } = props;
            return (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <IndeterminateCheckbox
                  {...{
                    checked: table.getIsAllRowsSelected(),
                    indeterminate: table.getIsSomeRowsSelected(),
                    onChange: table.getToggleAllRowsSelectedHandler(),
                  }}
                />
              </div>
            );
          } else {
            return <></>;
          }
        },
        id: "checked",
        cell: (props: any) => {
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: "3px",
                justifyContent: "center",
              }}
            >
              <IndeterminateCheckbox
                {...{
                  checked: props.row.getIsSelected(),
                  indeterminate: props.row.getIsSomeSelected(),
                  onChange: props.row.getToggleSelectedHandler(),
                }}
              />
            </div>
          );
        },
      }),
      table.accessor("invoiceId", {
        size: 50,
        id: "invoiceId",
        header: "Invoice Id",
        enableSorting: true,
        cell: (props: any) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            {props.row.original.invoiceId}
          </div>
        ),
      }),
      table.accessor("name", {
        size: 100,
        id: "name",
        header: "name",
        cell: (props: any) => (
          <NameColumn>
            <img src={props.row.original.image} alt="originalImage" />
            <div>{props.row.original.name}</div>
          </NameColumn>
        ),
      }),
      table.accessor("payment", {
        size: 125,
        id: "payment",
        header: "Total Price",
        enableSorting: false,
        cell: (props: any) => (
          <IconColumn>
            <img src={moneyIc} alt="" />
            <div>Rp.{props.row.original.payment}</div>
          </IconColumn>
        ),
      }),
      table.accessor("date", {
        size: 100,
        id: "date",
        header: "Date",
        enableSorting: true,
        cell: (props: any) => (
          <IconColumn>
            <img src={calenderIC} alt="" />
            <div>{props.row.original.date}</div>
          </IconColumn>
        ),
      }),
      table.accessor("status", {
        size: 100,
        id: "status",
        header: "Status",
        enableSorting: true,
        cell: (props: any) => (
          <StatusColumn status={props.row.original.status}>
            {props.row.original.status}
          </StatusColumn>
        ),
      }),
      table.accessor("edit", {
        size: 30,
        enableSorting: false,
        header: () => (
          <div style={{ position: "relative" }}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setEditable(true)}
            >
              <img src={editIc} alt="" />
            </button>
          </div>
        ),
        id: "edit",
        cell: (props: any) => (
          <div style={{ position: "relative" }}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() =>
                editable === 0
                  ? setEditable(props.row.original.id)
                  : setEditable(0)
              }
            >
              <img src={editIc} alt="" />
            </button>
            {editable === props.row.original.id ? (
              <span
                style={{
                  position: "relative",
                  right: "0",
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <button style={{ display: "flex", padding: "5px" }}>
                  Complete
                </button>
                <button style={{ display: "flex", padding: "5px" }}>
                  Cancel
                </button>
                <button style={{ display: "flex", padding: "5px" }}>
                  Pending
                </button>
              </span>
            ) : (
              ""
            )}
          </div>
        ),
      }),
    ],
    [table]
  );
  return { alertColumn };
};
