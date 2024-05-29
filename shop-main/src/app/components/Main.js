import Image from "next/image";
import styles from "./main.module.css";

export default async function Main() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return (
        <main className={styles.main}>
            {data.map((products) =>
                <div className={styles.card} key={products.id}>
                    <Image width={150} height={150}
                    src={products.image} />
                    <p style={{fontSize: 20}}>{products.title}</p>
                    <div>
                        <p>{products.price}</p>
                        <div style={{float: "right"}}>                             
                            <p style={{margin: 0, padding: 0}}>{products.rating.rate} <span class="material-symbols-outlined">hotel_class</span></p>
                            <p style={{margin: 0, padding: 0}}>{products.rating.count} <span class="material-symbols-outlined">group</span></p>
                        </div>                         
                    </div>
                                     
                    <p>{products.description}</p>
                    <p>Categoria: {products.category}</p>
                    
                </div>
            )}
        </main>
    )
}