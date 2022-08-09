import Carousel from 'react-bootstrap/Carousel';
import slider2 from '../images/slider2.gif';

function CarouselComp(props){
  var data =  props.image;
    return(
      <Carousel fade>
        
            {
              props.data.map((i)=>
                <Carousel.Item>
                  <img className="d-block w-100" src={i} alt="First slide" height={"450px"} />
                </Carousel.Item>
              )
          
            }
         
   
        
  
    </Carousel>
    )
}

export default CarouselComp;