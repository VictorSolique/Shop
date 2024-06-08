import styles from "./header.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <div className={styles.menu}>
                <div>
                    <Image style={{paddingInline: "10px"}} width={35} height={35} src="https://www.iconsdb.com/icons/preview/white/store-xxl.png"/>
                    <h2 style={{display: "inline", textAlign: "center"}}>Platzi Store</h2>
                </div>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><Link href="/contato">CONTATO</Link></li>
                    <li><a href="#">BLOG</a></li>
                    <li><abbr title="Minha sacola"><a href="#" className={styles.iconHeader}><span class="material-symbols-outlined">shopping_bag</span></a></abbr></li>
                    <li><abbr title="Entrar"><a href="#" className={styles.iconHeader}><span class="material-symbols-outlined">person</span></a></abbr></li>
                </ul>
            </div>
            <div className={styles.menu2}>
                <span class="material-symbols-outlined">search</span>
                <input placeholder="Pesquisar"/>
                <button style={{display: "inline", fontSize: 17}}>Adicionar um novo produto</button>
            </div>
            <div style={{textAlign: "center", paddingBlock: "30px"}}>
                <h1>Platzi Store</h1>
                <h3 style={{marginBottom: 0}}>Você com a mais luxuosa variedade de <br/> roupas de nossa coleção exclusiva</h3>
                <p style={{fontSize: 16, marginTop: "5px"}}>disponível apenas em dólar</p>
            </div>
        </header>
    )
}