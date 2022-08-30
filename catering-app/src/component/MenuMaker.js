import { Container, Row, Col, Tab, Nav, InputGroup, Form, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/MenuMaker.scss';
import HeaderSec from '../includes_comp/HeaderSec';
import React, { useState } from "react";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { arrayMove, insertAtIndex, removeAtIndex } from "../utils/DropDownArrays";

import {
  DndContext,

  KeyboardSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,

} from '@dnd-kit/core';

import Droppable from "./Droppable";
function MenuMaker() {

  let foodList = [];

  const cartItem = [
    { id: 1, itemTitle: "item-1", cat: "Sweet" },
    { id: 2, itemTitle: "item-2", cat: "Sweet" },
    { id: 3, itemTitle: "item-3", cat: "Non veg" },
    { id: 4, itemTitle: "item-4", cat: "Sweet" },
    { id: 5, itemTitle: "item-5", cat: "Desert" },
    { id: 6, itemTitle: "item-6", cat: "Desert" },
  ]
  cartItem.map((i) => {
    foodList.push(JSON.stringify(i))
  })



  const [itemGroups, setItemGroups] = useState({
    group1: foodList,
    group2: [],

  });
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );


  const handleDragStart = ({ active }) => setActiveId(active.id);

  const handleDragCancel = () => setActiveId(null);

  const handleDragOver = ({ active, over }) => {
    document.querySelector('.drop').querySelector('.droppable').classList.add("dropped");
    const overId = over?.id;
    if (!overId) {
      return;
    }

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId || over.id;

    if (activeContainer !== overContainer) {
      setItemGroups((itemGroups) => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex =
          over.id in itemGroups
            ? itemGroups[overContainer].length + 1
            : over.data.current.sortable.index;

        return moveBetweenContainers(
          itemGroups,
          activeContainer,
          activeIndex,
          overContainer,
          overIndex,
          active.id
        );
      });
    }
  };

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      setActiveId(null);
      return;
    }


    if (active.id !== over.id) {
      const activeContainer = active.data.current.sortable.containerId;
      const overContainer = over.data.current?.sortable.containerId || over.id;
      const activeIndex = active.data.current.sortable.index;
      const overIndex =
        over.id in itemGroups
          ? itemGroups[overContainer].length + 1
          : over.data.current.sortable.index;

      setItemGroups((itemGroups) => {
        let newItems;
        if (activeContainer === overContainer) {
          newItems = {
            ...itemGroups,
            [overContainer]: arrayMove(
              itemGroups[overContainer],
              activeIndex,
              overIndex
            ),
          };
        } else {
          newItems = moveBetweenContainers(
            itemGroups,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
          );
        }

        return newItems;
      });
    }

    setActiveId(null);
    document.querySelector('.drop').querySelector('.droppable').classList.remove("dropped");

  };

  const moveBetweenContainers = (
    items,
    activeContainer,
    activeIndex,
    overContainer,
    overIndex,
    item
  ) => {
    return {
      ...items,
      [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
      [overContainer]: insertAtIndex(items[overContainer], overIndex, item),
    };
  };


  return (

    <Container>
      <div className="text-center p-3">
        <HeaderSec title="Create a dish" />
        <Container className="shadow p-1 mt-3">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={6}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Caterers</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="second">Decorations</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>


              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col className="p-3">
                      <h5>Create your awesome menu</h5>
                    
                    </Col>
                  </Row>


                  <Row>
                    <DndContext
                      sensors={sensors}
                      onDragStart={handleDragStart}
                      onDragCancel={handleDragCancel}
                      onDragOver={handleDragOver}
                      onDragEnd={handleDragEnd}>
                      <Col xs={12} sm={12} md={4} lg={4} xxl={4} className="caters-items-list">
                        <InputGroup className="mb-2 mm-search-area">
                          <InputGroup.Text><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                          <Form.Control id="inlineFormInputGroup" placeholder="Search Food" />
                        </InputGroup>


                        <Droppable
                          id={'group1'}
                          items={itemGroups['group1']}
                          activeId={activeId}
                          key={'group1'}
                        />



                        {/* <DragOverlay>{activeId ? <Item id={activeId} dragOverlay /> : null}</DragOverlay> */}



                      </Col>
                      <Col xs={12} sm={12} md={8} lg={8} xxl={8} >
                        <div className="drop">
                        <div className="mb-4 "> Drag &amp; Drop here to add in you menu</div>
                          <Droppable
                            id={'group2'}
                            items={itemGroups['group2']}
                            activeId={activeId}
                            key={'group2'}
                          />

                        </div>

                      </Col>
                    </DndContext>

                  </Row>

                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col>
                      <Container className="mt-3">
                        <FloatingLabel controlId="floatingPassword" label="Your good name please" className="mb-3">
                          <Form.Control type="text" placeholder="Your good name please" />
                        </FloatingLabel>

                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email address"
                          className="mb-3"
                        >
                          <Form.Control type="text" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Contact Number"
                          className="mb-3"
                        >
                          <Form.Control type="email" placeholder="Contact number" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSelect" label="Works with selects">
                          <Form.Select aria-label="Which decoration you want">
                            <option>Click to select menu</option>
                            <option value="1">Birthday Decorations</option>
                            <option value="2">Party Decorations</option>
                            <option value="3">Marriage Decorations</option>
                            <option value="3">Family function Decorations</option>
                            <option value="3">Event Decorations</option>
                            <option value="3">Reception Decorations</option>
                            <option value="3">Other</option>
                          </Form.Select>
                        </FloatingLabel>
                        <Button variant="primary" size="lg">
                          Block level button
                        </Button>
                      </Container>

                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>

            </Row>
          </Tab.Container>

        </Container>
      </div>

    </Container>


  )

}

export default MenuMaker;



