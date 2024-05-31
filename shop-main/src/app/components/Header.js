import styles from "./header.module.css"
import Image from "next/image"

export default function Header() {
    return (
        <header className={styles.menu}>
            <div>
                <Image width={50} height={50} src="https://cdn-icons-png.flaticon.com/512/2697/2697432.png"/>
                <h2 style={{display: "inline", paddingLeft: "10px"}}>Platzi Fake Store API</h2>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Cadastrar</a></li>
                <li><a href="#"><span class="material-symbols-outlined">shopping_bag</span></a></li>
            </ul>
        </header>
    )
}