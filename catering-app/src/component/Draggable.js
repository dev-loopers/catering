import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {  Card } from "react-bootstrap";

export function Item(props) {
  return <Card className="mb-2">
    <Card.Body >{JSON.parse(props.element).itemTitle}<br />
      <small className="text-muted text-end">{JSON.parse(props.element).cat}</small>
    </Card.Body>
  </Card>
}

export default function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item element={props.id} />
    </div>
  );
}


