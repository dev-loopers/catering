import { Col, Container, Row } from "react-bootstrap";

function Footer(){
    return(
        <Container fluid className="footer p-5 bg-dark">
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">catering</a></li>
                            <li><a href="#">Decoration</a></li>
                            <li><a href="#">IT partner</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">catering</a></li>
                            <li><a href="#">Decoration</a></li>
                            <li><a href="#">IT partner</a></li>
                        </ul>
                    </Col>
                </Row>
               
            </Container>
        </Container>
    )
}

export default Footer;