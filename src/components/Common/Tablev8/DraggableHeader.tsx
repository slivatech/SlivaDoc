import React, { useMemo, useRef, useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import { flexRender } from "@tanstack/react-table";
import update from "immutability-helper";
import styled from "styled-components";

const DND_HEADER_COL = "col";

const StyledTh = styled.div`
  cursor: move;
  box-sizing: border-box;
  width: calc(100% - 10px);
`;
const DraggableHeader = ({
  header,
  column,
  index,
  reorder,
  setColumnOrder,
  headerDraggingStyle,
  textAlign,
}: {
  header: any;
  column: any;
  index: any;
  reorder: any;
  setColumnOrder: any;
  headerDraggingStyle: {
    activeBackgroundColor?: string;
    activeBorder?: string;
    canDropBackgroundColor?: string;
    canDropBorder?: string;
  };
  textAlign: "left" | "right" | "center";
}) => {
  const ref: any = useRef();
  const dropRef: any = useRef();
  const [currentColumnsOrder, setCurrentColumnsOrder] = useState<string[]>([]);
  const { id } = column;

  const moveRow = (dragIndex: any, hoverIndex: any) => {
    const dragRecord = currentColumnsOrder[dragIndex];
    if (currentColumnsOrder && currentColumnsOrder.length > 0) {
      const updatedColumns = update(currentColumnsOrder, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragRecord],
        ],
      });
      // currentColOrder.current = updatedColumns;
      setCurrentColumnsOrder(updatedColumns);
      setColumnOrder(updatedColumns);
    }
  };

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DND_HEADER_COL,
    drop: (item) => {
      reorder(item, index);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    // hover(item: any, monitor: any) {
    //   if (!dropRef.current) {
    //     return
    //   }
    //   const dragIndex = item.index;
    //   const hoverIndex = index;
    //   console.log(dragIndex,  hoverIndex)
    //   // Don't replace items with themselves
    //   if (dragIndex === hoverIndex) {
    //     return
    //   }

    //   moveRow(dragIndex, hoverIndex);

    //   item.index = hoverIndex
    // },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: DND_HEADER_COL,
    item: () => {
      return {
        id,
        index,
        // header: Header,
      };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    options: {
      dropEffect: "copy",
    },
  });

  // useEffect(() => {
  //   if (isDragging && allColumns) {
  //     setCurrentColumnsOrder(allColumns.map((o: any) => o.id));
  //   }
  // }, [isDragging, allColumns]);
  // useEffect(() => {
  //   preview(getEmptyImage(), { captureDraggingState: true })
  // }, [preview])

  const isActive = isOver && canDrop;
  let backgroundColor = "";
  let border = "";
  if (isActive) {
    backgroundColor = headerDraggingStyle?.activeBackgroundColor || "#D6EBFF";
    border = `dashed 1px ${headerDraggingStyle?.activeBorder || "#0085ff"}`;
  } else if (canDrop) {
    backgroundColor = headerDraggingStyle?.canDropBackgroundColor || "#FFFFFF";
    border = `dashed 1px ${headerDraggingStyle?.canDropBorder || "#0085ff"}`;
  }

  preview(ref);
  drag(drop(ref));

  const memoizedColumn = useMemo(
    () => flexRender(header.column.columnDef.header, header.getContext()),
    [header]
  );

  return (
    <StyledTh
      ref={ref}
      style={{
        cursor: "e-resize",
        backgroundColor,
        border,
        opacity: isDragging ? 0 : 1,
        textAlign,
      }}
    >
      <div ref={dropRef}>{memoizedColumn}</div>
    </StyledTh>
  );
};

export default React.memo(DraggableHeader);
