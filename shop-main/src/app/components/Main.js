import Image from "next/image";
import styles from "./main.module.css";

export default async function Main() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return (
        <main className={styles.main}>
            {data.map((products) =>
                <div className={styles.card} key={products.id}>
                    <Image className={styles.img} width={150} height={150}
                    src={products.image} />
                    
                    <h4 style={{fontSize: 20, paddingBottom: 5, marginBottom: 0}}>{products.title}</h4>
                    <p style={{fontSize: 15, padding: 0, margin: 0}}>Categoria: {products.category}</p>
                    <div style={{fontSize: 20}}>
                        <p style={{float: "left"}}>R$ {products.price}</p>
                        <div style={{float: "right"}}>                             
                            <abbr title={products.rating.rate + " Estrelas"}><p style={{margin: 0, padding: 0}}>{products.rating.rate} <span class="material-symbols-outlined">hotel_class</span></p></abbr>
                            <abbr title={products.rating.count + " Avaliações"}><p style={{margin: 0, padding: 0}}>{products.rating.count} <span class="material-symbols-outlined">group</span></p></abbr>
                        </div>                         
                    </div>
                    <button className={styles.buttonDropdown}>Descrição</button>
                    <div className={styles.dropdown}>
                        <p>{products.description}</p>
                    </div>                
                    
                </div>
            )}
        </main>
    )
}