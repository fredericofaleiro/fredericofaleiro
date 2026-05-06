import "./formulario-de-evento.estilos.css"
import { TituloFormulario } from "../TituloFormulario"
import { CampoDeFormulario } from "../CampoDeFormulario"
import { Label } from "../Label"
import { CampoDeEntrada } from "../CampoDeEntrada"
import { ListaSuspensa } from "../listaSuspensa"
import { Botao } from "../botao"
import { temas } from "../temas/temas"

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
        <Label htmlFor="capa">
          Qual o endereço da imagem de capa
        </Label>
        <CampoDeEntrada 
        type="text" 
        id='capa' 
        placeholder='http://...'
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
        itens={temas}
        />
      </CampoDeFormulario>
      </div>
      <div className="acoes">
      <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}