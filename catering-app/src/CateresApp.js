import MenuMaker from './component/MenuMaker';
import CarouselComp from './component/CarouselComp';
import Ourmenu from './Ourmenu';
import slider2 from './images/slider2.gif';
function CateresApp(){
    const sliderdata = [
       slider2,slider2,slider2]
    return (
        <>
            <CarouselComp data={sliderdata}/>
            <MenuMaker/>
            <Ourmenu/>
        </>
    )
}

export default CateresApp;