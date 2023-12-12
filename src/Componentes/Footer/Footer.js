import Itens from "../Itens/Itens"
import "./Footer.css"
function Footer() {
    return (
        <>
            <div className="ConteinerFooter">
                <footer className="FooterVaga">
                    <div className="FooterVaga1">
                        <div className="ItensFooter">
                            <Itens texto="Guia de Carreira"> </Itens>
                        </div>
                        <div className="ItensFooter">
                            <Itens texto="Ver Empregos"></Itens></div>
                        <div className="ItensFooter">
                            <Itens texto=" Salários"></Itens></div>
                        <div className="ItensFooter">
                            <Itens texto="Indeed Eventos"></Itens></div>
                        <div className="ItensFooter">
                            <Itens texto="Ver todos..."></Itens></div>
                        <div className="ItensFooter">

                            <Itens texto="Sobre o Indeed"></Itens></div>
                        <div className="ItensFooter">
                            <Itens texto="Informações da empresa"></Itens></div>
                        <div className="ItensFooter">
                            <Itens texto="Central de Ajuda"></Itens></div>
                    </div>
                    <div className="ItensFooter">
                        <div className="ItensFooter">
                            <Itens texto="© 2023 Indeed"></Itens></div>
                        <div className="ItensFooter">


                            <Itens texto="Acessibilidade no Indeed"></Itens></div>
                        <div className="ItensFooter">
                            <Itens texto="Centro de Privacidade"></Itens></div>
                        <div className="ItensFooter">
                            <Itens texto="Cookies"></Itens></div>
                        <div className="ItensFooter">
                            <Itens texto="Privacidade"></Itens></div>
                        <div className="ItensFooter">
                            <Itens texto="Termos"></Itens></div>
                    </div>


                </footer>
            </div>
        </>
    )
} export default Footer