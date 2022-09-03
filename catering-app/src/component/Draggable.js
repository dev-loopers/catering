import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {  Card } from "react-bootstrap";

export function Item(props) {
  return <Card className={JSON.parse(props.element).is_veg?"mb-2 greenborder shadow":"mb-2 redborder shadow"} >
    <Card.Body >{JSON.parse(props.element).name}<br />
      <small className="text-muted text-end">{JSON.parse(props.element).categories}</small>
      <div className="text-muted d-flex justify-content-between align-items-center">
        <small>{JSON.parse(props.element).belongs}</small>
        <small className="dot" style={{backgroundColor:JSON.parse(props.element).is_veg?"green":"red"}}></small>
      </div>
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


