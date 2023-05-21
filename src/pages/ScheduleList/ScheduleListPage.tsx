import { useCallback, useRef, useState, useEffect, useMemo, PropsWithChildren } from "react";
import {
  AddNewScheduleSidebar,
  DeleteColumn,
  EditColumn,
  Overlay,
  ScheduleListStyle,
  ScheduleSidebar,
  ScheduleWrapper,
  StyledCalendar,
} from "./ScheduleListStyle";
import BaseButton from "../../components/Common/Buttons/BaseButton";
import Calendar from "../../components/Common/Calender/Calender";
import {
  IndeterminateCheckbox,
  TableV8,
  createColumnHelper,
} from "../../components/Common/Tablev8";
import { customers } from "../CustomerList/fakeData";
import { schedules } from "./fakeData";
import Select from "../../components/Select/Select";
import AddScheduleContainer from "./AddScheduleContainer";
import DeleteModal from "./DeleteModal";

const ScheduleListPage = () => {
  const [scheduleId,setScheduleId] = useState<string | null>(null);

  const handleOpenForm = (id?:string) => {
    setOpenForm(true);
    if(id) {
      setScheduleId(id as string);

    } else {
      setScheduleId(null)
    }
  }
  const handleOpenModal = () => {
    setOpenDeleteModal(true);
  }
  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  }


  const { alertColumn } = useAlertColumn(handleOpenForm,handleOpenModal);
  const [data, setData] = useState(schedules);
  const [selectedRow, setSelectedRow] = useState<any>([]);
  const alertRef: any = useRef(null);
  const itemPerPage = 10;
  const detailItemPerPage = 1;
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

    let data = schedules?.slice(startIndex, endIndex);

    setData(data);
  }, [page]);

  useEffect(() => {
    console.log({ selectedRow });
  }, [selectedRow]);

  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openDeleteModal,setOpenDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    if (openForm || openDeleteModal) {
      document.body.style.overflow = "hidden";
    }
    
    
    

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openForm,openDeleteModal]);

  const handleCloseForm = () => {
    setOpenForm(false);
  }

 

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f1f4fa",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {openForm ? (
       <AddScheduleContainer handleClose={handleCloseForm} id={scheduleId as string} />
      ) : null}
      {openDeleteModal ? <DeleteModal handleClose={handleCloseModal} /> : null}

      <ScheduleListStyle>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2>Schedule List</h2>

          <BaseButton
            text="Add new"
            color="#3A36DB"
            textColor="white"
            radius="10px"
            width="122px"
            height="40px"
            onClick={() => handleOpenForm("")}
            iconStart={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                color="white"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
              </svg>
            }
          ></BaseButton>
        </div>
        <ScheduleWrapper>
          <ScheduleSidebar>
            <BaseButton
              color="#3A36DB"
              textColor="white"
              radius="7px"
              iconStart={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  color="white"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
                </svg>
              }
              text="Create Schedule"
            ></BaseButton>
            <div style={{ marginTop: "1rem" }}>
              <StyledCalendar></StyledCalendar>
            </div>
          </ScheduleSidebar>
          <div style={{ flex: 0.8 }}>
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
        </ScheduleWrapper>
      </ScheduleListStyle>
    </div>
  );
};

export default ScheduleListPage;


export const useAlertColumn = (handleOpenForm:(id?:string)=>void,handleOpenModal:()=>void) => {
  const table = createColumnHelper();

  const alertColumn = useMemo(
    () => [
      table.display({
        size: 5,
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
      table.accessor("date", {
        size: 100,
        header: "Date",
        id: "date",
        cell: (props: any) => (
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
            }}
          >
            <img src="/assets/calendar-schedule.svg" />
            <p className="column">{props.row.original.date}</p>
          </div>
        ),
      }),
      table.accessor("time", {
        size: 100,
        id: "time",
        header: "Time",
        cell: (props: any) => (
          <div
            style={{
              width: "100%",
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
            }}
          >
            <img src="/assets/time-circle.svg" />
            <p className="column">{props.row.original.time}</p>
          </div>
        ),
      }),
      table.accessor("location", {
        size: 100,
        id: "location",
        enableSorting: true,
        header: "Location",
        cell: (props: any) => (
          <div className="location">
            <img src="/assets/location-schedule.svg" alt="" />
            <p className="column">{props.row.original.location}</p>
          </div>
        ),
      }),
      table.accessor("price", {
        size: 50,
        id: "price",
        enableSorting: true,
        header: "Price",
        cell: (props: any) => (
          <p className="column">
            Rp.{(props.row.original.price as number).toLocaleString()}
          </p>
        ),
      }),
      table.accessor("edit", {
        size: 25,
        enableSorting: false,
        header: null,
        id: "edit",
        cell:(props:any) => (
          <EditColumn onClick={()=>handleOpenForm(props.row.original.id)}>
            <img src="/assets/edit.svg" />
          </EditColumn>
        ),
      }),
      table.accessor("delete", {
        size: 25,
        enableSorting: false,
        header: null,
        id: "delete",
        cell: () => (
          <DeleteColumn onClick={handleOpenModal}>
            <img src="/assets/delete.svg" />
          </DeleteColumn>
        ),
      }),
    ],
    [table]
  );
  return { alertColumn };
};
