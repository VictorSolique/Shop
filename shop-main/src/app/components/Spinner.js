import Image from "next/image";

export default function Spinner(){
    return(
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <Image src="/loading.svg" alt="Imagem Carregando..." width={55} height={55} />        
        </div>
    );
}