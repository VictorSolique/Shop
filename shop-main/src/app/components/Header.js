import styles from "./header.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className={styles.img}>
            <Image
                    src="https://img.freepik.com/fotos-premium/camisetas-na-loja-penduradas-seguidas-rede-neural-gerada-por-ia_76080-31536.jpg?w=970"
                    alt="Background Image"
                    objectFit="cover"
                    fill
                />
            <div className={styles.content}>

                <div className={styles.menu}>                
                    <div>
                        <Image style={{paddingInline: "10px"}} width={35} height={35} src="https://www.iconsdb.com/icons/preview/white/store-xxl.png" alt="Logo da loja Platzi Store" />
                        <h2 style={{display: "inline", textAlign: "center"}}>Platzi Store</h2>
                    </div>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><Link href="/contato">CONTATO</Link></li>
                        <li><a href="#">BLOG</a></li>
                        <li><abbr title="Minha sacola"><a href="#" className={styles.iconHeader}><span className="material-symbols-outlined">shopping_bag</span></a></abbr></li>
                        <li><abbr title="Entrar"><a href="#" className={styles.iconHeader}><span className="material-symbols-outlined">person</span></a></abbr></li>
                    </ul>
                </div>
                <div style={{textAlign: "center", paddingTop: "150px"}}>
                    <h1>Platzi Store</h1>
                    <h3 style={{marginBottom: 0}}>Você com a mais luxuosa variedade de <br/> roupas de nossa coleção exclusiva</h3>
                    <p style={{fontSize: 16, marginTop: "5px"}}>disponível apenas em dólar</p>
                </div>
            </div>
        </header>
    )
}