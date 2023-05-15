import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  TableV8,
  createColumnHelper,
} from "../../components/Common/Tablev8";
import { customers } from "./fakeData";
import { CustomerListStyle, GenderColumn, NameColumn } from "./CustomerListStyle";
import CustomerSidebar from "../../components/CustomerList/CustomerSidebar";

const CustomerListPage = () => {
  const { alertColumn, isSidebarOpen } = useAlertColumn();
  const [data, setData] = useState(customers);
  const [selectedRow, setSelectedRow] = useState<any>([]);
  const alertRef: any = useRef(null);
  const itemPerPage = 5;
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

    let data = customers?.slice(startIndex, endIndex);

    setData(data);
  }, [page]);

  useEffect(() => {
    console.log({ selectedRow });
    console.log(data?.length)
  }, [data?.length, selectedRow]);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f1f4fa",
        display: "flex",
        justifyContent: "center",
        padding: '2rem'
      }}
    >
      <CustomerListStyle isSidebarOpen={isSidebarOpen}>
        <h2>Customer List</h2>

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
      </CustomerListStyle>
      {isSidebarOpen ? <CustomerSidebar isOpen={isSidebarOpen} /> : null}
    </div>
  );
};

export default CustomerListPage;

export const useAlertColumn = () => {
  // const { t } = useTranslation();
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const table = createColumnHelper();
  const alertColumn = React.useMemo(
    () => [
      table.accessor("name", {
        size: 50,
        header: "Name",
        id: "name",
        cell: (props: any) => (
          <NameColumn>
            <img
              src={props.row.original.image}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50px",
                objectFit: "cover",
              }}
              alt=""
            />
            <p
              style={{ color: "#06152B", cursor: "pointer" }}
              onClick={() => setSidebarOpen(true)}
            >
              {props.row.original.name}
            </p>
          </NameColumn>
        ),
      }),
      table.accessor("email", {
        size: 50,
        id: "email",
        enableSorting:false,

        header: "Email",
        cell: (props: any) => (
          <p style={{ color: "#06152B" }}>{props.row.original.email}</p>
        ),
      }),
      table.accessor("location", {
        size: 30,
        id: "location",
        header: "Location",
        cell: (props: any) => (
          <p style={{ color: "#06152B" }}>{props.row.original.location}</p>
        ),
      }),
      table.accessor("gender", {
        size: 20,
        id: "gender",
        enableSorting:false,
        header: "Gender",
        cell: (props: any) => (
          <GenderColumn gender={props.row.original.gender}>
            {props.row.original.gender}
          </GenderColumn>
        ),
      }),
    ],
    [table]
  );
  return { alertColumn, isSidebarOpen };
};
