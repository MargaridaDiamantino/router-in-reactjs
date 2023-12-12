import Button from "../Button/Button"
import Footer from "../Footer/Footer"
import Input from "../Input/Input"
import Span from "../Span/Span"
import "./Avaliacoes.css"
function Avaliacoes() {
    return (
        <>
            <div className="ConteinerAvaliacoes">
                <h1>Encontre excelentes lugares para trabalhar</h1>
                <Span texto="Nome da empresa ou título da vaga"></Span>
              <div className="InpButton">
                <Input></Input>
                <Button Texto="Achar Empresa"></Button>
                </div>
            </div>
            <div className="ConteinerEmpresas">
            
           <Span texto="As empresas que procurar ,apareceram aqui..." c></Span>
            </div>
           <Footer></Footer>
        </>
    )
} export default Avaliacoes