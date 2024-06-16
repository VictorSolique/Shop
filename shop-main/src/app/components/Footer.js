import styles from "./footer.module.css"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.rodape}>
                <div>
                    <ul>
                        <li><a href="#"><Image width={23} height={23} src={"https://www.iconsdb.com/icons/preview/white/twitter-x-xxl.png"} alt="Logo do X (Twitter)" /></a></li>
                        <li><a href="#"><Image width={23} height={23} src={"https://www.iconsdb.com/icons/preview/white/instagram-xxl.png"} alt="Logo do Instagram" /></a></li>
                        <li><a href="#"><Image width={23} height={23} src={"https://www.iconsdb.com/icons/preview/white/facebook-xxl.png"} alt="Logo do Facebook" /></a></li>
                        <li><a href="#"><Image width={23} height={23} src={"https://www.iconsdb.com/icons/preview/white/tiktok-xxl.png"} alt="Logo do TikTok" /></a></li>
                        <li><a href="#"><Image width={23} height={23} src={"https://www.iconsdb.com/icons/preview/white/pinterest-xxl.png"} alt="Logo do Pinterest" /></a></li>
                    </ul>
                </div>
                <p style={{fontSize: 14, width: "50%", fontFamily: "Playfair Display, serif"}}>Fundada em 15 de fevereiro de 2007, nossa empresa tem como objetivo vender as melhores roupas luxuosas de nossa coleção exclusiva.</p>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Image style={{paddingInline: "10px"}} width={50} height={50} src="https://www.iconsdb.com/icons/preview/white/store-xxl.png" alt="Logo da loja Platzi Store" />
                    <span>Platzi Store</span>
                </div>
            </div>
            <div style={{backgroundColor: "#ce4343", textAlign: "center", paddingBlock: "1px"}}>
                <h4>© 2007 Platzi Store, Inc</h4>
            </div>
        </footer>
    )
}