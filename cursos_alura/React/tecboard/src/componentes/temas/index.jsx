import {Tema} from "../Tema"
import { CardEvento } from "../CardEvento"
import { temas } from "./temas"

const eventos = [
    {
        capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
        tema: temas[0],
        data: new Date(),
        titulo: 'Mulheres no Front'
    }
]

export function Temas() {
    return(
      <div>
        {temas.map((tema) => (
          <section key={tema.id}>
            <Tema tema={tema}/>
            <CardEvento evento={eventos[0]}/>
          </section>
        ))}
      </div>
    )
}