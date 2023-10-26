
const estilo = {
saludo: {
    color : "red",
    
}
}

export const ItemListContainer = (props) => {
    return <div style={estilo.saludo}>{props.greeting}</div>;
}