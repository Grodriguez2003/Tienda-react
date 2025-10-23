import { Link } from "react-router-dom"
import { Item } from "../Item/Item"

export const ItemList = ({ lista }) =>  {
    //aca hacemos el pasamanos
    return <>
    {lista.length ?(
            lista.map((prod) => <Link to={`/detail/${prod.id}`} key={prod.id}> <Item {...prod}/> </Link>)
        ): (
            <p>no hay productos </p>
            )}
    </>
} 