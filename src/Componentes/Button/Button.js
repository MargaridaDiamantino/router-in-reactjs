import "./Button.css"
function Button({Texto}){
    return(
        <>
       <div className="ConteinerButton">
            <button className="Button">{Texto}</button>
            </div>
        </>
    )
}export default Button