import { Container ,Col , Row} from "react-bootstrap";
import HeaderSec from "./includes_comp/HeaderSec";
import ThaliSample from './component/ThaliSample';
import axios from 'axios';
import react, { useEffect,useState } from "react";
function Ourmenu(){
    const {dish,setDish} = useState([]);
    useEffect(()=>{
        const fetchProducts = async ()=>{
           const {data}  = await axios.get('/api/products')
           setDish(data);
        };

        fetchProducts()
    },[]);

    console.log("dish ::: "+ dish);

    return(
        <Container fluid>
            <HeaderSec title="Choose from our menu"/>
            <Row>
             
            {Array.from({ length: 10 }).map((_, idx) => (
                <Col xs={12} md ={6} lg={4} className="mt-5"><ThaliSample cat={idx % 2 ===0?"veg":"non veg"} /></Col>
            ))}
                
         
            </Row>
        
          
    
        </Container>
    )
}


export default Ourmenu;