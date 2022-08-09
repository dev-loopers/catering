import { Container ,Navbar ,Nav ,NavDropdown} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChampagneGlasses,faHollyBerry } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
function Menubar(){
    return(
    <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Account</Nav.Link>
                <Nav.Link href="#pricing">Inquiry</Nav.Link>
                <NavDropdown title="Services" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Link to="/caterers" className="nav-link"><FontAwesomeIcon icon={faChampagneGlasses} />Caterers</Link>
                <Link to="/decor" className="nav-link">
                    <FontAwesomeIcon icon={faHollyBerry} />decor
                </Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default Menubar;