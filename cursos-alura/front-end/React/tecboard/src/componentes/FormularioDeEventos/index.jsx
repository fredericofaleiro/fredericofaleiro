import "./formulario-de-evento.estilos.css"
import { TituloFormulario } from "../TituloFormulario"
import { CampoDeFormulario } from "../CampoDeFormulario"
import { Label } from "../Label"
import { CampoDeEntrada } from "../CampoDeEntrada"

export function FormularioDeEventos() {
  return (
    <form className='form-event'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada 
        type="text" 
        id='nome' 
        placeholder='Summer dev hits'
        />
      </CampoDeFormulario>
      <button>criar evento</button>
    </form>
  )
}