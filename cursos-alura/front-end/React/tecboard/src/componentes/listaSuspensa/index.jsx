import "./lista-suspensa.estilos.css"

export function ListaSuspensa(props, htmlfor) {
    return(
            <select id={htmlfor} name={htmlfor} className="lista-suspensa-forms">
                {props.opcoes?.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                ))}
            </select>
    )
}

