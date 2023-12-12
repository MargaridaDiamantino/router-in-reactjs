import DivAcessar from "../DivAcessar/DivAcessar"
import Span from "../Span/Span"
import "./Acessar.css"
function Acessar() {
    return (
        <>
            <div className="Acess" >
                <div className="ContainerAcessar">
                    <h3 cls="SpanAcessar" >Tudo pronto para dar o próximo passo?</h3>
                     <Span cls="SpanAcessar" texto="Crie ou acesse uma conta." ></Span>
                    <Span cls="SpanAcessar"  texto="Ao criar ou acessar uma conta,
                     você entende e concorda com os Termos do
                     Indeed, além de aceitar nossas Políticas 
                     de Cookies e de Privacidade. Você receberá 
                     mensagens de marketing do Indeed, as quais 
                     podem ser canceladas a qualquer momento no link
                     de cancelamento ou conforme detalhado em nossos termos."></Span>
                    <DivAcessar texto="Continuar com o google"></DivAcessar>
                    <DivAcessar texto="Continuar com o Facebook"></DivAcessar>
                    <DivAcessar texto="Continuar com Apple"></DivAcessar>
                </div>
            </div>
        </>
    )
} export default Acessar