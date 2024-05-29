import styles from "./header.module.css"
import Image from "next/image"

export default function Header() {
    return (
        <header className={styles.menu}>
            <div>
                <Image width={20} height={20} src="https://br.pinterest.com/pin/215821007134385991/"/>
                <h2>Platzi Fake Store API</h2>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Cadastrar</a></li>
                <li><a href="#"><span class="material-symbols-outlined">shopping_bag</span></a></li>
            </ul>
        </header>
    )
}