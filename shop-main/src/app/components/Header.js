import styles from "./header.module.css"
import Image from "next/image"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{paddingInline: "10px"}} width={35} height={35} src="https://www.iconsdb.com/icons/preview/white/store-xxl.png"/>
                    <h2 style={{display: "inline", textAlign: "center"}}>Platzi Store</h2>
                </div>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">CADASTRAR</a></li>
                    <li><a href="#">
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <span class="material-symbols-outlined">shopping_bag</span>
                            <span>Bolsa</span>
                        </div>
                    </a></li>
                </ul>
            </div>
            <div className={styles.menu2}>
                <button style={{display: "inline", fontSize: 17}}>Adicionar um novo produto</button>
            </div>
            <div style={{textAlign: "center", paddingBlock: "30px"}}>
                <h1>Platzi Store</h1>
                <h4>A melhor variedade de roupas luxuosas do Brasil</h4>
            </div>
        </header>
    )
}