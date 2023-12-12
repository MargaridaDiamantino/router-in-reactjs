import Button from "../Button/Button"
import Header from "../Header/Header"
import Input from "../Input/Input"
import Span from "../Span/Span"
import "./AcharVaga.css"
import Footer from "../Footer/Footer"
function AcharVaga() {
    return (
        <>
        
            <div className="AcharVaga">

                <div className="AcharVagaB">
                    <Input  texto="O quê     cargo,palavra chave ou empresa"></Input>
                    <Input texto="Onde      cidade,estado ou região"></Input>
                    <Button Texto="Achar vaga"></Button>
                </div>
                <Span texto="Cadastre seu currículo - grátis!" cls="TextoSpan"  ></Span>
                <div className="Row">
                <Span texto="Apenas para empresas:" cls="TextoSpan"></Span>
                <Span texto=" Anuncie sua vaga – Sua próxima contratação está aqui!"></Span>
                </div>
                
            </div>
            <Footer></Footer>
        </>
    )
} export default AcharVaga