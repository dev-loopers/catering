import { Container, Row, Col, Tab, Nav, InputGroup, Form, Card, Button } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../css/MenuMaker.scss';
import HeaderSec from '../includes_comp/HeaderSec';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


function MenuMaker() {
    const cartItem = [
        { id: 1, itemTitle: "item-1 ", cat: "Sweet" },
        { id: 2, itemTitle: "item-2 ", cat: "Sweet" },
        { id: 3, itemTitle: "item-3 ", cat: "Non veg" },
        { id: 4, itemTitle: "item-4 ", cat: "Sweet" },
        { id: 5, itemTitle: "item-5 ", cat: "Desert" },
        { id: 6, itemTitle: "item-6 ", cat: "Desert" },
    ]


    return (
   
            <Container>
                <div className="text-center p-3">
                    <HeaderSec title="Create a dish"/>

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
                                                <small> Drag & Drop items to add in you menu</small>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                        <Droppable droppableId="droppable-1">
                                            {(provided, snapshot) => (
                                                <Row >

                                                    <Col xs={12} sm={12} md={4} lg={4} xxl={4} className="caters-items-list">
                                                        <InputGroup className="mb-2 mm-search-area">
                                                            <InputGroup.Text><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                                                            <Form.Control id="inlineFormInputGroup" placeholder="Search Food" />
                                                        </InputGroup>

                                                        {

                                                            cartItem.map((item, index) => (

                                                                <Draggable draggableId={item.id.toString()} index={index}>
                                                                    {(provided, snapshot) => 
                                                                        <Card ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                        >
                                                                            <Card.Body >index<br />
                                                                                <small className="text-muted text-end">test</small>
                                                                            </Card.Body>
                                                                        </Card>
                                                                    }
                                                                </Draggable>

                                                            ))


                                                        }



                                                    </Col>
                                                    <Col xs={12} sm={12} md={8} lg={8} xxl={8} >     <div
                                                        className="box"
                                                        ref={provided.innerRef}
                                                style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                                                {...provided.droppableProps}

                                                    >
                                                           {provided.placeholder}
                                                            f,h
                                                    </div> </Col>

                                                </Row>
                                            )}
                                        </Droppable>
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