import { Link } from "react-router-dom"
import "./Itens.css"
function Itens({ texto ,Apresentar,Linkar}) {
    return (
        <>
            <ul className="UL">
           
                
                <Link to={"/"+Linkar} className="Iten">{texto} </Link> 
                  
               
            </ul>
        </>
    )
}export default  Itens