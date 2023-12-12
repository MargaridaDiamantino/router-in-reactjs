
import { BrowserRouter,Route,Routes} from "react-router-dom"
import "./App.css"
import Acessar from "./Componentes/Acessar/Acessar"
import AcharVaga from "./Componentes/AcharVaga/AcharVaga"
import Avaliacoes from "./Componentes/AvaliacoesDeEmpresa/Avaliacoes"
import Header from "./Componentes/Header/Header"
export default function App(){

   
return(
    
<BrowserRouter>
<Header></Header>
<Routes>
<Route path="/acharvaga" element={<AcharVaga></AcharVaga>}/>
<Route path="/avaliacoes" element={<Avaliacoes></Avaliacoes>}/>
<Route path="/Acessar" element={<Acessar></Acessar>}/>
</Routes>

</BrowserRouter>
)
    
}