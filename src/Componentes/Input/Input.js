 import "./Input.css"
function Input({texto,tipo}){
    return(
        <>
        <div className="Div-conteiner">
            <input   placeholder={texto}  type={tipo} className="InputTexto">
                
            </input>

        </div>
        </>
    )
}export default Input