import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/categoria/nintendoSwitch"} >Nintendo Switch</Link>
                </li>
                <li>
                    <Link to={"/categoria/xbox"} >Xbox</Link>
                </li>
                <li>
                    <Link to={"/categoria/consola"} >Consola</Link>
                </li>
            </ul>
        </nav>
    )
}