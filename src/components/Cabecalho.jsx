import { Link } from "react-router-dom";
import style from "./Cabecalho.module.css";

export default function Cabecalho(){

    return(
        <>
            <header className={style.cabecalho}>
                <h1>Vite + React</h1>
                <ul>
                    <li><Link to="/" className={style.link}>HOME</Link></li>
                    <li><Link to="/produtos" className={style.link}>PRODUTOS</Link></li>
                </ul>
            </header>

        </>
    )
}