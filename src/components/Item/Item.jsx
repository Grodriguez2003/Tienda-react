import "./Item.css"

export const Item = ({ nombre, precio, imagen, descripcion, children }) => {
    return (
        <article className="productItem">
            <img src={imagen} alt={descripcion} />
                <h2 className="productTittle">{nombre}</h2>
                <p>Precio: $ {precio}</p>
                <p>Descripcion: {descripcion}</p>
                {children}
            </article> 
    )
}