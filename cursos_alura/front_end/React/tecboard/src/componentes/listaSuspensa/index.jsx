import "./lista-suspensa.estilos.css"

export function ListaSuspensa({ itens, ...props }) {
    return(
        <select {...props} defaultValue="" className="lista-suspensa-forms">
            <option value="" disabled>Selecione uma opção</option>
            {itens?.map((item) => (
                 <option key={item.id} value={item.id}>{item.nome}</option>
            ))}
        </select>
    )
}