import { Container ,Row , Col} from "react-bootstrap";
import HeaderSec from "../includes_comp/HeaderSec";
function ContactUs(){
    return(
        <Container fluid className="pt-3 mt-3 contact-us">
            <HeaderSec title="Contact Us"/>
          
                <Row>
                    <Col className="contact-column-left" xs = {12} md={6}>
                    <h1>Mail</h1>
                    <a href = "mailto: demo@example.com">demo@example.com</a>
                    </Col>
                    <Col className="contact-column-right" xs = {12} md={6}>
                        <h1>Call</h1>
                        <a href="tel:+918419929338">8419 - 9293 - 38</a>
                    </Col>
                </Row>
  
        </Container>
    )
}

export default ContactUs;