import { Link, NavLink } from "react-router";
export default function MainMenu() {
    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/recipes">LE MIE RICETTE</NavLink>
            <NavLink to="/add">AGGIUNGI UNA RICETTA</NavLink>
            <NavLink to="/About">CHI SONO</NavLink>
            <NavLink to="/Contacts">CONTATTAMI</NavLink>
        </nav>
    )
}


