import Link from "next/link"

export default function NotFound() {
    return(
        <div style={{textAlign: "center"}}>
            <h1><span className="material-symbols-outlined">warning</span> Erro!! Pagina não encontrada <span className="material-symbols-outlined">warning</span></h1>
            <Link href="/" style={{color: "black"}}>retorne para Home</Link>
        </div>
    )
}