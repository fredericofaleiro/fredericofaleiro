import "./formulario-de-evento.estilos.css"
import { TituloFormulario } from "../TituloFormulario"
import { CampoDeFormulario } from "../CampoDeFormulario"
import { Label } from "../Label"
import { CampoDeEntrada } from "../CampoDeEntrada"
import { ListaSuspensa } from "../listaSuspensa"
import { Botao } from "../botao"

export function FormularioDeEventos() {
  return (
    <form className='form-event'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campos">
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
      <CampoDeFormulario>
        <Label htmlFor="dateEvento">
          Data do evento
        </Label>
        <CampoDeEntrada 
        type="date" 
        id='dateEvento' 
        />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="tema">
         tema do evento
        </Label>
        <ListaSuspensa 
         id='tema' 
         placeholder='Selecione uma opção' 
         opcoes={["Selecione uma opção","Front-end", "Back-end", "inteligencia artificial", "devops", "data science", "cloud"]}>
         Qual o tema do evento?
        </ListaSuspensa>
      </CampoDeFormulario>
      </div>
      <div className="acoes">
      <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}