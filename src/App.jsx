import {Outlet} from "react-router-dom"
import Header from "./componentes/Header/Header"

function App() {

  return (
    
    <main className="container mx-auto bg-Escuro text-white font-customFont">
     <Header/>
     <Outlet/>
     </main>

  )
}

export default App
