import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Table from 'react-bootstrap/Table';

function ThaliSample(props) {
    return (
        <div className="thali">
            <img src={props.image} alt="" />
            <div className="thali-description">
                <h1 className="thali-title">{props.name}</h1>
                <div className="thali-price">
                    <small>Starting From</small>
                    <p>
                        <h1>&#x20B9;{props.price} INR &nbsp;</h1><small>Per plate.</small>
                    </p>
                </div>
                <div className="thali-feauture">
       
                    <small style={{backgroundColor: props.cat?"green":"red"}}>{props.cat?"Veg":"Non-veg"}</small>
                    <OverlayTrigger
                        placement="auto"
                        overlay={<Popover id="popover-basic">
                            <Popover.Body>
                                <Table hover responsive >
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>ItemI</th>
                                            <th>Qty.</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>1 nos</td>

                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>2nos </td>

                                        </tr>

                                    </tbody>
                                </Table>
                            </Popover.Body>
                        </Popover>} trigger="click"
                    >

                        <small style={{cursor:"pointer"}} title="Click to see">12 Items</small>


                    </OverlayTrigger>


                    <Button variant="outline-link" size="sm" title='Edit menu'><FontAwesomeIcon icon={faEdit} /></Button>

                </div>
            </div>
        </div>
    )
}

export default ThaliSample;