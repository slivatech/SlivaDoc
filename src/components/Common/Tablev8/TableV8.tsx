import React, { useRef, useState, useCallback, useEffect, useImperativeHandle, useContext, useMemo } from 'react';
// import { ThemeContext } from 'styled-components';
import {
  PaginationState,
  OnChangeFn,
  ColumnOrderState,
  VisibilityState,
  ColumnSizingState,
  ExpandedState,
  SortingState,

  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
  getSortedRowModel,

  flexRender
} from '@tanstack/react-table';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import DraggableHeader from './DraggableHeader';
import IconButton from './IconButton';
import ActionText from './ActionText';
import trashIcon from '../../../assets/icon/trash.png'
import {
  StyledProps,
  StyledTable,
  TableWrapper,
  StyledTableHeader,
  NoDataDisplayContainer,
  NoData,
  StyledFirstLastPaginationControl,
  StyledPaginationControl
} from './TableV8Style';

const DND_ITEM_TYPE = 'row';
const PC_LIMIT = 10;
const range = (start: number = 1, end: number) => {
  const arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}
export declare type columnAlignType = {
  [key: string]: 'left' | 'right' | 'center'
}
interface ITableV8 extends StyledProps {
  /**
   * Data array for the table
   */
  data: any;
  /**
   * There are 3 ways of creating a column def:
   * table.createDisplayColumn()
   * Display columns do not have a data model which means they cannot be sorted, filtered, etc, but they can be used to display arbitrary content in the table, eg. a row actions button, checkbox, expander, etc.
   * table.createGroup()
   * Group columns do not have a data model so they too cannot be sorted, filterd, etc, and are used to group other columns together. It's common to define a header or footer for a column group.
   * table.createDataColumn()
   * Data columns have an underlying data model which means they can be sorted, filtered, grouped, etc.
   * refer https://tanstack.com/table/v8/docs/guide/04-column-defs for more details
   */
  columns: any;
  /**
   * set alignment of column
   * {
   *  [columnId]: 'left' | 'right' | 'center'
   * }
   */
  columnAlign?: any
  /**
   * pagination state {pageIndex, pageSize}
   */
  pagination?: any
  /**
   * set pagination state
   */
  setPagination?:any
  /**
   * Function(pageIndex) <br/>
   * A callback fucntion when a page is changed.
   */
  onPageChange?: (pageIndex: number) => any;
  /**
   * Controlled pageCount, when this value is passed, the table will use manual pagination
   */
  pageCount?: number;
  /**
   * Pagination Style. 'number' | 'firstlast'. Default to 'number'
   */
  paginationStyle?: 'number' | 'firstlast';
  /**
   * Edit Mode: Set to true to enable hide/show column. Use together with onHideColumnCheck callback and hideableColumns array.
   */
  editMode?: boolean;
  /**
   * Array, editableColumns columns. Define list of column id that allow to hide/show, checkbox will appear only for id that match in this array.
   * Define list of column id that allow to resize column, reorder column
   */
  editableColumns?: string[];
  /**
   * Array, default hidden columns. Specify the id of column to hide.
   */
  hiddenColumns?: string[];
  /**
   * Callback function with column id in array for columns that was unchecked or to hide.
   */
  onHideColumnCheck?: any;
  /**
   * column resize mode: set to true to enable column width resize. Use together with onColumnResize callback
   */
  columnResizeMode?: boolean;
  /**
   * initail columns width, this will overwrite the width value of props 'columns'
   */
  initialColumnsSize?: any;
  /**
   * Callback function on resizing column
   */
  onColumnResize?: any;
  /**
   * column order sequence mode: set to true to enable column re-order sequence. Use together with onColumnOrder callback
   */
  columnOrderMode?: boolean;
  /**
   * initial columns orders, this will reorder props 'columns'
   */
  initialColumnOrder?: string[];
  /**
   * Callback function on re-order column
   */
  onColumnOrder?: any;
  /**
   * Dragging preview style, show on drag header to reorder
   */
  headerDraggingStyle?: any;
  /**
   * Function(row, rowIndex) <br/>
   * A callback function when a row is clicked, when this defined the cursor will be changed to pointer on each row.
   */
  onRowClick?: any;
  /**
   * Function(row, rowIndex) <br/>
   * A callback function when a row is right clicked, when this defined the cursor will be changed to pointer on each row.
   */
  onRowContextClick?: any;
  /**
   * expanded row component
   */
  ExpandRow?: any;
  /**
   * Delete Mode: set to true to show a trash icon for each row. Use together with onDeleteRow callback.
   */
  deleteMode?: boolean;
  /**
  * Callback function when trash icon are click when deleteMode is activated.
  */
  onDeleteRow?: (row: any) => any;
  /**
   * Enables/Disables sorting for the table.
   */
  enableSorting?: boolean;
  /**
   * Drag and Drop mode: set to true to enable row drag&drop. Use together with onDragAndDrop callback
   */
  dndMode?: boolean;
  /**
  * Callback function with updated sequence of rows on drop.
  */
  onDragAndDrop?: (updatedRows: any[]) => any;
  /**
  * Callback function when checkbox are check or uncheck
  */
  onCheckRow?: (selectedRowInfo: any) => any;
  /**
   * Label shown when no data. Default is "No Data"
   */
  noDataLabel: string;
  /**
   * Boolean
   * Whether or not to render a header for the table.
   */
  hasHeader?: boolean;
  /**
   * to use sticky table header
  */
  stickyHeader?: boolean;
  /**
   * sticky position form top
  */
  stickyFromTop?: number;
}
const TableV8: React.FC<ITableV8> = React.forwardRef(({
  data,
  columns,
  columnAlign,
  paddingStyle = {},
  minWidthTr= '',
  hasHeader = true,
  hasRowBorder = true,
  pagination = undefined,
  setPagination,
  pageCount,
  paginationStyle = 'number',
  editMode = false,
  editableColumns = [],
  hiddenColumns = [],
  onHideColumnCheck,
  columnResizeMode = false,
  initialColumnsSize = [],
  onColumnResize,
  columnOrderMode = false,
  initialColumnOrder = [],
  onColumnOrder,
  headerDraggingStyle = {},
  onRowClick,
  onRowContextClick,
  ExpandRow,
  deleteMode = false,
  onDeleteRow,
  enableSorting = false,

  dndMode = false,
  onDragAndDrop,
  onCheckRow,

  noDataLabel,
  stickyHeader = false,
  stickyFromTop = 0
}: ITableV8, ref) => {
  const tableRef: any = useRef(null);
  const [tableColumns, setTableColumns] = useState<typeof columns>(() => [...columns]);
  const [columnVisibility, setColumnVisibility] = useState<any>({});
  const [columnOrder, setColumnOrder] = useState<any>(initialColumnOrder);
  const [columnSizing, setColumnSizing] = useState<any>({});
  const [rowSelection, setRowSelection] = useState({});
  const [expanded, setExpanded] = useState<any>({});
  const [sorting, setSorting] = React.useState<any>([])

  const [clickedColumnId, setClickedColumnId] = useState<string>('');
  const [fontSize] = useState<number>(0);

  const prevMode: any = useRef();

  useEffect(() => {
    if (columns) {
      setTableColumns(columns);
    }
  }, [columns]);

  //set initial hidden columns
  useEffect(() => {
    if (hiddenColumns && hiddenColumns.length > 0) {
      let visibleCol: any = {};
      hiddenColumns?.map((v) => {
        visibleCol[v] = false;
      })
      setColumnVisibility(visibleCol);
    }
  }, [hiddenColumns]);
  //set initial column size
  useEffect(() => {
    if (initialColumnsSize && initialColumnsSize.length > 0) {
      let colSize: any = {};
      initialColumnsSize?.map(({ id, width }: any) => {
        colSize[id] = width
      })
      setColumnSizing(colSize);
    }
  }, [initialColumnsSize]);

  useEffect(() => {
    if (editMode === false && prevMode && prevMode.current === true) {
      //on close edit mode pass back edited columns data
      //hide/show columns
      let updatedHiddenColumns = [];
      for (const [key, value] of Object.entries(columnVisibility)) {
        if (value === false) {
          updatedHiddenColumns.push(key)
        }
      }
      (typeof onHideColumnCheck === 'function') && onHideColumnCheck(updatedHiddenColumns);

      //resize columns
      let updatedColumnSize = [];
      for (const [key, value] of Object.entries(columnSizing)) {
        updatedColumnSize.push({ id: key, width: value })
      }
      (typeof onColumnResize === 'function') && onColumnResize(updatedColumnSize);

      //order columns
      (typeof onColumnOrder === 'function') && onColumnOrder(columnOrder);

    }
    prevMode.current = editMode;
  }, [editMode]);
  const instance = useReactTable({
    data,
    columns: tableColumns,
    pageCount: pageCount || -1,
    columnResizeMode: 'onChange',
    enableSorting,
    state: {
      pagination,
      columnVisibility,
      columnOrder,
      columnSizing,
      rowSelection,
      expanded,
      sorting
    },
    onPaginationChange: setPagination,
    manualPagination: pageCount ? true : false,
    // getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onExpandedChange: setExpanded,
    getSubRows: (row: any) => row.subRows,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnSizingChange: setColumnSizing,
    onColumnOrderChange: setColumnOrder,
    onSortingChange: setSorting,
    getExpandedRowModel: getExpandedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const getColumnsId = (ids: string[], id: string): string[] => {
    return ids.concat(id);
  };

  const reorder = useCallback((item: any, newIndex: any) => {
    const { index: currentIndex } = item;
    let currentColumnOrder: any = columnOrder;
    if (columnOrder.length === 0) {
      currentColumnOrder = instance.getAllColumns().map((col:any) => col.id).reduce(getColumnsId, []);
    }
    if (currentColumnOrder) {
      const dragRecord = currentColumnOrder[currentIndex];
      const updatedColumnOrder = update(currentColumnOrder, {
        $splice: [
          [currentIndex, 1],
          [newIndex, 0, dragRecord],
        ],
      });
      setColumnOrder(updatedColumnOrder);
    }
  }, [instance, columnOrder])

  //handle row select/checkbox
  useEffect(() => {
    if (rowSelection && onCheckRow && typeof onCheckRow === 'function') {
      const selectedRowData = instance.getSelectedRowModel().flatRows.map((row:any) => row.original);
      onCheckRow(selectedRowData)
    }
  }, [instance, rowSelection, onCheckRow]);

  const handleRowClick = (row: any, cellId: string) => {
    if (onRowClick && typeof onRowClick === 'function') {
      onRowClick(row, cellId);
    }
  }
  const handleContextMenu = (row: any) => {
    if (onRowContextClick && typeof onRowContextClick === 'function') {
      onRowContextClick(row);
    }
  }

  const TableHeader = useCallback(() => {
    const getHeaderGroups = instance.getHeaderGroups();
    const headers = getHeaderGroups[0].headers;
    return editMode ? <StyledTableHeader
      stickyHeader={stickyHeader}
      stickyFromTop={stickyFromTop}
      className={`thead ${stickyHeader === true ? 'sticky-header' : ''}`}
    >
      {
        instance.getAllLeafColumns().map((column:any, i:any) => {
          const header = headers.find((v:any) => column.id === v.id);
          const col = columns.find((v: any) => v.id === column.id);

          let title = column.id;
          if (typeof col?.header === 'string') {
            title = col.header;
          } else if (typeof col?.header === 'function') {
            title = col.header();
          } else {
            title = ""
          }

          const canEdit = editableColumns.includes(column.id);

          return <div
            key={column.id}
            className={columnAlign ? `th edit-th ${canEdit && 'editable'} ${columnAlign[column.id] || 'right'}` : `th edit-th ${canEdit && 'editable'}`}
            style={{
              width: header ? header.getSize() : column.getSize(),
              flex: `${header ? header.getSize() : column.getSize()} 0 auto`
            }}
          >
            {
              canEdit &&
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                onChange={column.getToggleVisibilityHandler()}
                style={{
                  alignSelf: 'end',
                }}
              />
            }

            {
              (columnOrderMode && header) ?
                <DraggableHeader
                  reorder={reorder}
                  key={column.id}
                  header={header}
                  column={column}
                  index={i}
                  setColumnOrder={setColumnOrder}
                  headerDraggingStyle={headerDraggingStyle}
                  textAlign={columnAlign ? columnAlign[column.id] : 'right'}
                />
                :
                title
            }

            {
              header && canEdit && columnResizeMode &&
              <div
                onMouseDown={header?.getResizeHandler()}
                onTouchStart={header?.getResizeHandler()}
                className={`resizer ${header?.column.getIsResizing() ? 'isResizing' : ''}`}
              />
            }
          </div>
        })
      }
      {deleteMode &&
        <div className="th delete-column">&nbsp;</div>
      }
    </StyledTableHeader>
      :
      <>
        {getHeaderGroups.map((headerGroup: any) => (
          <StyledTableHeader
            key={headerGroup.id}
            stickyHeader={stickyHeader}
            stickyFromTop={stickyFromTop}
            className={`thead ${stickyHeader === true ? 'sticky-header' : ''}`}
          >
            {headerGroup.headers.map((header: any) => {
              const headerClass = (columnAlign: any, canSort: boolean) => {
                let classStr = 'th';
                if (columnAlign) {
                  classStr += ` ${columnAlign[header.id] || 'right'}`;
                }

                if (canSort === true) {
                  classStr += ' sortable';
                }

                return classStr;
              }
              const sortIcon = (iconType: string) => {
                if (!iconType) {
                  return 'fa fa-sort';
                } else {
                  return `fa fa-sort-${iconType}`;
                }
              }
              return (
                <div
                  key={header.id}
                  className={headerClass(columnAlign, header.column.getCanSort())}
                  // colSpan={header.colSpan}
                  style={{
                    width: header.getSize(),
                    flex: `${header.getSize()} 0 auto`
                  }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {
                    header.column.getCanSort() && <i className={sortIcon(header.column.getIsSorted())}></i>
                  }
                </div>
              )
            })}
          </StyledTableHeader>
        ))}
      </>
  }, [instance, columnAlign, columns, editMode, deleteMode, stickyFromTop, stickyHeader, editableColumns, columnResizeMode, columnOrderMode, headerDraggingStyle, reorder]);

  const moveRow = (dragIndex: number, dropIndex: number) => {
    const dragRecord = data[dragIndex];
    if (onDragAndDrop && typeof onDragAndDrop === 'function') {
      onDragAndDrop(update(data, {
        $splice: [
          [dragIndex, 1],
          [dropIndex, 0, dragRecord],
        ],
      }))
    }
  }
  const DnDRow = useCallback(({ row, index, moveRow }: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dropRef = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dragRef = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, drop] = useDrop({
      accept: DND_ITEM_TYPE,
      drop(item: any, monitor: any) {
        if (monitor.didDrop()) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        moveRow(dragIndex, hoverIndex);
      }
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{ isDragging }, drag, preview] = useDrag({
      type: DND_ITEM_TYPE,
      item: { index },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    })
    const opacity = isDragging ? 0 : 1;
    preview(drop(dropRef));
    drag(dragRef);

    return (
      <div ref={dropRef}>
        <div ref={dragRef} style={{ cursor: 'ns-resize' }} className="tr">
          {row.getAllCells().map((cell: any) => {
            return (
              <div
                key={cell.id}
                className="td"
                style={{
                  width: cell.column.getSize(),
                  flex: `${cell.column.getSize()} 0 auto`
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            )
          })}
          {deleteMode &&
            <div className="td delete-column">
              <IconButton
                alt="deleteIcon"
                src={trashIcon}
                height="1.2rem"
                width="1.1rem"
                style={{
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                }}
                onClick={(e: any) => {
                  e.stopPropagation();
                  if (onDeleteRow && typeof onDeleteRow === 'function') {
                    onDeleteRow(row.original);
                  }
                }}
              />
            </div>
          }
        </div>
      </div>
    )
  }, [deleteMode])

  const toggleTableRowCustom = useCallback((rowId: any) => {
    setExpanded(rowId);
  }, [])
  const clearRowSelection = () => {
    setRowSelection({});
  }
  const selectRows = (rows: { [index: string]: boolean }) => {
    setRowSelection(rows);
  }

  useImperativeHandle(
    ref,
    () => {
      if (tableRef !== null && tableRef.current !== null) {
        tableRef.current.toggleTableRow = toggleTableRowCustom;
        tableRef.current.clearRowSelection = clearRowSelection;
        tableRef.current.selectRows = selectRows;
      }
      return tableRef.current;
    }
  );

  const pageStartEnd = useMemo(() => {
    let paginationStart: number = 1;
    let paginationEnd: number = (instance.getPageCount() > PC_LIMIT) ? PC_LIMIT : instance.getPageCount();
    if (paginationStyle === 'number') {
      if (pagination && instance.getState().pagination.pageSize) {
        if (instance.getState().pagination.pageIndex > 5) { // TODO: this is because when more than 10 pages, only the 6th items get center
          if (instance.getPageCount() - instance.getState().pagination.pageIndex > 4) {
            paginationStart = (instance.getState().pagination.pageIndex - 4 < 0) ? 1 : instance.getState().pagination.pageIndex - 4
            paginationEnd = instance.getState().pagination.pageIndex + 5
          } else {
            paginationStart = (instance.getPageCount() - 9 < 0) ? 1 : instance.getPageCount() - 9
            paginationEnd = instance.getPageCount()
          }
        }
      }
    }
    return { paginationStart, paginationEnd }
  }, [instance, paginationStyle, pagination]);
  return (
    <div>
      <StyledTable
        ref={tableRef}
        paddingStyle={paddingStyle}
        hasRowBorder={hasRowBorder}
        fontSize={fontSize}
        minWidthTr={minWidthTr}
      >
        <TableWrapper
          className={`table ${editMode ? 'edit-table' : ''}`}
        >
          {hasHeader &&
            <TableHeader />
          }
          {instance.getRowModel().rows.map((row: any, index: number) => {
            const rowData = editMode ? row.getAllCells() : row.getVisibleCells();
            const rowId = row.original.id;
            const rowClass = expanded === rowId ? 'tr active-row' : 'tr';
            return ((dndMode) ?
              <DnDRow
                key={rowId}
                index={index}
                row={row}
                moveRow={moveRow}
              />
              :
              <React.Fragment key={rowId}>
                <div
                  className={rowClass}
                  key={rowId}
                  onContextMenu={() => {
                    if (onRowContextClick && typeof onRowContextClick === 'function') {
                      handleContextMenu(row.original)
                    }
                  }}
                >
                  {rowData.map((cell: any) => (
                    <div
                      key={cell.id}
                      className="td"
                      style={{
                        width: cell.column.getSize(),
                        flex: `${cell.column.getSize()} 0 auto`
                      }}
                      onClick={() => {
                        if (!editMode) {
                          setClickedColumnId(cell.column.id);
                          if (onRowClick && typeof onRowClick === 'function') {
                            handleRowClick(row.original, cell.column.id)
                          }
                        }
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  ))}
                </div>
                {
                  expanded === rowId &&
                  <ExpandRow
                    value={row.original}
                    trigeredCellId={clickedColumnId}
                    toggleTableRow={toggleTableRowCustom}
                    onContextMenu={() => {
                      if (onRowContextClick && typeof onRowContextClick === 'function') {
                        onRowContextClick(row);
                      }
                    }}
                  />
                }
              </React.Fragment>
            )
          })}
          {instance.getRowModel().rows.length <= 0 &&
            <NoDataDisplayContainer>
              <NoData>{noDataLabel}</NoData>
            </NoDataDisplayContainer>
          }
        </TableWrapper>
        {pagination && instance.getState().pagination.pageSize && instance.getPageCount() > 1 && paginationStyle === 'number' &&
          <StyledPaginationControl className="PaginationControl">
            <span
              onClick={() => {
                if (instance.getCanPreviousPage()) {
                  instance.previousPage();
                }
              }}
              className={!instance.getCanPreviousPage() ? `disabled` : ''}
            >
              {'<'}
            </span>
            {range(pageStartEnd.paginationStart, pageStartEnd.paginationEnd).map((i: any) =>
              <span
                key={i}
                className={i === (instance.getState().pagination.pageIndex + 1) ? `active` : ''}
                onClick={() => {
                  instance.setPageIndex(i - 1)
                }}
              >
                {i}
              </span>
            )}
            <span
              onClick={() => {
                if (instance.getCanNextPage()) {
                  instance.nextPage();
                }
              }}
              className={!instance.getCanNextPage() ? `disabled` : ''}
            >
              {'>'}
            </span>
          </StyledPaginationControl>
        }
        {pagination && instance.getState().pagination.pageSize && instance.getPageCount() > 1 && paginationStyle === 'firstlast' &&
          <StyledFirstLastPaginationControl>
            <div className="pagenum">
              Page: {instance.getState().pagination.pageIndex + 1}
            </div>
            <div className="pagecontrol">
              <ActionText
                disabled={instance.getState().pagination.pageIndex <= 0}
                color='#999999'
                size={15}
                text="First"
                onClick={() => {
                  if (instance.getState().pagination.pageIndex > 0) {
                    instance.setPageIndex(0)
                  }
                }}
              />
              <ActionText
                disabled={instance.getState().pagination.pageIndex <= 0}
                color='#999999'
                size={15}
                text="Prev"
                onClick={() => {
                  if (instance.getCanPreviousPage() && instance.getState().pagination.pageIndex > 0) {
                    instance.previousPage();
                  }
                }}
              />
              <ActionText
                disabled={(instance.getState().pagination.pageIndex + 1) >= instance.getPageCount()}
                color='#999999'
                size={15}
                text="Next"
                onClick={() => {
                  if (instance.getCanNextPage() && (instance.getState().pagination.pageIndex + 1) < instance.getPageCount()) {
                    instance.nextPage();
                  }
                }}
              />
              <ActionText
                disabled={(instance.getState().pagination.pageIndex + 1) >= instance.getPageCount()}
                color='#999999'
                size={15}
                text="Last"
                onClick={() => {
                  if ((instance.getState().pagination.pageIndex + 1) < instance.getPageCount()) {
                    instance.setPageIndex(instance.getPageCount() - 1);
                  }
                }}
              />
            </div>
          </StyledFirstLastPaginationControl>
        }
      </StyledTable>
    </div>
  )
});

export default TableV8;