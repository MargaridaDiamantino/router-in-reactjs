import Button from "../Button/Button"
import Itens from "../Itens/Itens"
import "./Header.css"
function Header(){

    function Apresentar()
    {
       
    }
    return(
        <>
        <div className="Conteiner">
            <div className="Titulo"><h1> indeed</h1> </div>
             <div className="Div-Itens">

             <Itens Linkar="acharvaga"   texto="Achar vaga" Apresentar={Apresentar} ></Itens>
             <Itens Linkar="avaliacoes" texto="Avaliações de Empresas"></Itens>
             <Itens texto="Cargos e salários"></Itens>

             </div>
        
            <div className="Div-Itens">
            <Itens texto="Cadastre seu currículo (Grátis!)"></Itens>
             <Itens Linkar="Acessar"  texto="Acessar"></Itens>
             <Itens texto="Empresas/Anunciar vagas"></Itens>
            </div>
             
        </div>
        </>
    )
}export default Header