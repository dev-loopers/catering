import { Container, Row, Col, Tab, Nav, InputGroup, Form, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/MenuMaker.scss';
import HeaderSec from '../includes_comp/HeaderSec';
import React, { useEffect, useState } from "react";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { arrayMove, insertAtIndex, removeAtIndex } from "../utils/DropDownArrays";
import axios from 'axios';
import {Button as UIButton } from '@mui/material';
import GetLocation from "../utils/GetLocation";

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
    { _id: 1, name: "item-1", categories: "Sweet", belongs: "indian", is_veg: true },
    { _id: 2, name: "item-2", categories: "Sweet", belongs: "indian", is_veg: true },
    { _id: 3, name: "item-3", categories: "Non veg", belongs: "italian", is_veg: false },
    { _id: 4, name: "item-4", categories: "Sweet", belongs: "indian", is_veg: true },
    { _id: 5, name: "item-5", categories: "Desert", belongs: "italian", is_veg: false },
    { _id: 6, name: "item-6", categories: "Desert", belongs: "chines", is_veg: false },
  ]
  function setIntialValue(a) {
    foodList = [];
    a.map((i) => {
      foodList.push(JSON.stringify(i))
    })

    foodList.sort();
    return foodList.reverse();
  }
  const [itemGroups, setItemGroups] = useState({
    group1: setIntialValue(cartItem),
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


  const searchHandler = async (e) => {
    let value = e.target.value;
    const options = { itemname: value }
    const { data } = await axios.post('/api/getItems', options);
    console.log(data.data)
    setItemGroups({
      group1: setIntialValue(data.data),
      group2: [...itemGroups.group2]

    }
    );


  }

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(()=>{
    const getQuots = ()=>{
      let draggedcart = itemGroups.group2;
      if (draggedcart.length > 0){
        setIsCartEmpty(false);
      }else{
        setIsCartEmpty(true);
      }

    }
    getQuots()
  },[itemGroups.group2])

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
                      <small style={{ color: "green", fontWeight: "bold", fontFamily: 'Comfortaa' }}> Drag &amp; Drop to create your menu </small>
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
                          <Form.Control id="searchMenuMakerFood" placeholder="Search Food" onKeyUp={searchHandler} />
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
                          <div className="mb-4 ">  
                          { isCartEmpty ? null :<UIButton variant="contained" >Get Quotation</UIButton>}
                          </div>
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



