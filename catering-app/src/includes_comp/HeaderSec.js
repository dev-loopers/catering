
function HeaderSec(props){
    return(
        <div className="text-center p-2 md-p-5" >
            <h2 className="sec-title">{props.title}</h2>
            <img src={process.env.PUBLIC_URL + "title_ico.png" } alt={props.title+"-image"}/>
        </div>
    )
}

export default HeaderSec;