
import CarouselComp from './component/CarouselComp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Chip,  Grid } from '@mui/material';
import { Container } from 'react-bootstrap';

import HeaderSec from './includes_comp/HeaderSec';
import DecorationSample from './component/Decore/DecorationSample';
import ImageGallery from './component/ImageGallery';
function DecoreApp() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const sliderButtons = ['Birthday', 'Wedding', 'anniversary', 'Interior', 'Baloon', 'Party', 'Lighting', 'Event', 'Office Event', 'ceremony'];
    let images = ["https://cdn0.weddingwire.in/article/3313/3_2/1280/jpg/3133-mandap-decoration-photos-wedica-events-lead-image.webp",
        "https://cdn0.weddingwire.in/article/3313/3_2/1280/jpg/3133-mandap-decoration-photos-wedica-events-lead-image.webp",
        "https://assets-news.housing.com/news/wp-content/uploads/2018/01/30130410/Decor-trends-that-will-define-2018-FB-1200x700-compressed.jpg"
    ];
    return (
        <>

            <CarouselComp data={images} />
            <Container fluid className='p-3'>
                <HeaderSec title="Explore" mode={true} />
                <Grid container spacing={2} rowSpacing={5}>
                    <DecorationSample options={{dir:'left',title:'Home Decore',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}} />

                    <DecorationSample options={{dir:'right',title:'Wedding Decore',desc:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."}} />
                </Grid>


            </Container>
            <Container className='p-3'>
                <Slider {...settings}>
                    {sliderButtons.map((items) =>
                        <div>
                            <Chip label={items} onClick={() => { alert("hello") }} size="medium" />
                        </div>

                    )}



                </Slider>
                <ImageGallery />

            </Container>

        </>


    )
}

export default DecoreApp;