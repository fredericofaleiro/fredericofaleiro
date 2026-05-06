import './App.css'
import {FormularioDeEventos} from "./componentes/FormularioDeEventos"
import {Temas} from "./componentes/Temas"
import {Banner} from "./componentes/Banner"
import {Logo} from "./componentes/Logo"
 
function App() {

  return (
    <main>
      <Logo/>
      <Banner/>
      <FormularioDeEventos/>
      <Temas/>
    </main>
  )
}

export default App
