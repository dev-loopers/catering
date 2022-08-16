import { Container, Col, Row } from "react-bootstrap";
import HeaderSec from "./includes_comp/HeaderSec";
import ThaliSample from "./component/ThaliSample";
import dishListContext from "./dishContext";

import react, { useContext } from "react";
function Ourmenu() {
  let dish = useContext(dishListContext);
  const dishList = dish.dish;
  return (
    <Container fluid>
      <HeaderSec title="Choose from our menu" />
      <Row>
        {dishList.map((product) => (
          <Col xs={12} md={6} lg={4} className="mt-5">
            <ThaliSample
              dishtype={product.categories}
              name={product.name}
              price={product.price}
              image={product.image}
              cat={product.is_veg}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Ourmenu;
