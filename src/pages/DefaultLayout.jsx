import { Outlet } from "react-router";
import AppFooter from "../components/AppFooter";
import AppHeader from "../Components/AppHeader";



export default function defaultLayout() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}