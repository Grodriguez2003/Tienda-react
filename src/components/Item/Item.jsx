import "./Item.css"

export const Item = ({ name, price, imagen, description, children }) => {
    return (
        <article className="productItem">
            <img src={imagen} alt={description} />
                <h2 className="productTittle">{name}</h2>
                <p>Precio: $ {price}</p>
                <p>Descripcion: {description}</p>
                {children}
            </article> 
    )
}