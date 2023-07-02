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
import { products } from "./OrderListData";
import moneyIc from "../../assets/icon/payment.svg";
import calenderIC from "../../assets/icon/Calendar.svg";
import searchIc from "../../assets/icon/Search.svg";
import { Filter, FilterContainer, Header, IconColumn, NameColumn, StatusColumn } from "./OrderListStyle";
import { Container } from "../PageArtikel/PageArtikelStyle";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Dropdown from "../../components/Common/Dropdown/Dropdown";

const OrderList = () => {
  const { alertColumn } = useAlertColumn();
  const [sort, setSort] = useState("Sort")
  const [filter, setFilter] = useState("Select Filter")
  const [search, setSearch] = useState("")
  const [data, setData] = useState(products);
  const [selectedRow, setSelectedRow] = useState<any>([]);
  const [selectedData, setSelectedData] = useState<any>([]);
  const alertRef: any = useRef(null);
  const itemPerPage = 10;
  // const detailItemPerPage = 1;
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(
    Math.ceil(products.length / itemPerPage)
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

    const toDetail = useCallback((selectedRow: any, columnId: any) => {
        if (alertRef && alertRef.current && columnId !== "checked") {
        console.log({ selectedRow });
        }
    }, []);

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
        let data = products?.slice(startIndex, endIndex);

        setData(data);
    }, [page]);
    const sortir = [
        {
            value: 'Terbaru'
        },
        {
            value: 'Terlama'
        },
    ]
    const filters = [
        {
            value: 'Terbaru'
        },
        {
            value: 'Terlama'
        },
    ]

  useEffect(() => {
    console.log({ selectedRow });
    console.log({ selectedData });
  }, [selectedData, selectedRow]);
  return (
    <>
        <Container style={{ background: "rgba(153, 178, 198, 0.2)" }}>
        <div

        >
            <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>Order List</h2>
        </div>
        <Header>
            <ul>
                <li>All Orders</li>
                <li>New Order</li>
                <li>Ready to ship</li>
                <li>In Delivery</li>
                <li>Complained</li>
                <li>Order Completed</li>
                <li>Canceled</li>
            </ul>
        </Header>
        <FilterContainer>
            <Dropdown
                options={sortir}
                border= '1px solid #E4E4E4'
                backgroundColor='#fff'
                fontSize="14px"
                width='174px'
                height='40px'
                value={sort}
                setValue={setSort}
            />
            <Dropdown
                options={filters}
                border= '1px solid #E4E4E4'
                backgroundColor='#fff'
                fontSize="14px"
                width='174px'
                height='40px'
                value={filter}
                setValue={setFilter}
            />
            <Filter>
                <img src={searchIc} alt="search" />
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                /> 
            </Filter>
        </FilterContainer>
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
    </>
  )
}

export default OrderList

  
export const useAlertColumn = () => {
    const table = createColumnHelper();
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
          size: 100,
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
        table.accessor("total", {
            size: 50,
            id: "total",
            header: "Total",
            enableSorting: true,
            cell: (props: any) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {props.row.original.total}
              </div>
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
        table.accessor("paymentStatus", {
          size: 100,
          id: "paymentStatus",
          header: "Payment Status",
          enableSorting: true,
          cell: (props: any) => (
            <StatusColumn paymentStatus={props.row.original.paymentStatus}>
              {props.row.original.paymentStatus}
            </StatusColumn>
          ),
        }),
        
      ],
      [table]
    );
    return { alertColumn };
  };
  