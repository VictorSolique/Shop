import Image from "next/image"

export default function Footer() {
    return (
        <footer style={{backgroundColor: "gray", textAlign: "center", color: "white"}}>
            <div>
                <div>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <Image style={{paddingInline: "10px"}} width={50} height={50} src="https://www.iconsdb.com/icons/preview/white/store-xxl.png"/>
                </div>
            </div>
            <h2>Rodapé</h2>
            <h4>Victor Solique</h4>
        </footer>
    )
}