import { Outlet } from "react-router-dom"
import { Header } from "../../components/header/header"

export const MainLayout = () => {
    return (
    <>
        <Header/>
        <div className="main-content">
            <Outlet/>
        </div>
    </>
    ) 
}