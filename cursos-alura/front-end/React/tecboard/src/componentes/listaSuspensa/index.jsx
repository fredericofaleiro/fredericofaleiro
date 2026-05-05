import "./lista-suspensa.estilos.css"

export function ListaSuspensa({opcoes, htmlfor}) {
    return(
            <select id={htmlfor} name={htmlfor} className="lista-suspensa-forms">
                {opcoes?.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                ))}
            </select>
    )
}

