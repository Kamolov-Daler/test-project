import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: props.id });

  const style = {
    width: 100,
    height: 100,
    lineHeight: "100px",
    textAlign: "center",
    background: "#f1f1f1",
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? "100" : "auto"
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {props.id}
    </div>
  );
}
