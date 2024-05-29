import Image from "next/image";
import styles from "./main.module.css";

export default async function Main() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return (
        <main className={styles.main}>
            {data.map((products) =>
                <div className={styles.card} key={products.id}>
                    <p>{products.title}</p>
                    <p style={{ color: "red" }}>{products.price}</p>
                    <div className="img">
                        <Image
                            width={150}
                            height={150}
                            src={products.image} />
                        <p>{products.description}</p>
                        <p>Categoria: {products.category}</p>
                        <p>Rating: {products.rating.count}</p>
                    </div>
                </div>
            )}
        </main>
    )
}