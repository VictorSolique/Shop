'use client'
import { useEffect, useState } from "react"
import Image from "next/image";
import styles from "./main.module.css";
import Spinner from "./Spinner";

export default function Main() {
    const [listProducts, setListProducts] = useState([]);

    useEffect( () => {
        const getProduct = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setListProducts(data);
        }
        getProduct();
    }, [])

    const orderAZ = () => {
        const newList = [...listProducts].sort((a,b) => a.title.localeCompare(b.title));
        setListProducts(newList);
    }
    const orderZA = () => {
        const newList = [...listProducts].sort((a,b) => b.title.localeCompare(a.title));
        setListProducts(newList);
    }
    const orderPriceMaior = () => {
        const newList = [...listProducts].sort((a,b) => b.price - a.price);
        setListProducts(newList);
    }
    const orderPriceMenor = () => {
        const newList = [...listProducts].sort((a,b) => a.price - b.price);
        setListProducts(newList);
    }

    const descricao = (e) => {
        const button = e.target;
        const dropdown = document.querySelector(`#d${button.id.slice(1)}`); 
        if (dropdown.style.display == 'none' || dropdown.style.display == '') dropdown.style.display = 'block';   
        else dropdown.style.display = 'none';
    };

    if(listProducts[0] == null) {
        return (
            <>
            <div className={styles.ordenar}>
                <div>
                    <h4 style={{display: "inline", paddingRight: "10px"}}>Classificar por:</h4>
                    <button onClick={orderAZ}>A à Z</button>
                    <button onClick={orderZA}>Z a A</button>
                    <button onClick={orderPriceMenor}>Menor preço</button>
                    <button onClick={orderPriceMaior}>Maior preço</button>
                </div>
            </div>
            <Spinner />        
            </>
        )
    }
        
    return (
        <>
        <div className={styles.ordenar}>
            <div>
                <h4 style={{display: "inline", paddingRight: "10px"}}>Classificar por:</h4>
                <button onClick={orderAZ}>A à Z</button>
                <button onClick={orderZA}>Z a A</button>
                <button onClick={orderPriceMenor}>Menor preço</button>
                <button onClick={orderPriceMaior}>Maior preço</button>
            </div>
        </div>
        <main className={styles.main}>            
            {listProducts.map((products) =>
                <div className={styles.card} key={products.id}>
                    <p className={styles.favorite}><span className="material-symbols-outlined">favorite</span></p>
                    <Image className={styles.img} width={150} height={150}
                    src={products.image} alt={products.title} />                    
                    <h4 style={{fontSize: 20, paddingBottom: 5, marginBottom: 0}}>{products.title}</h4>
                    <p style={{fontSize: 15, padding: 0, margin: 0}}>Categoria: {products.category}</p>

                    <div style={{fontSize: 20}}>
                        <p style={{float: "left"}}>US$ {products.price}</p>
                        <div style={{float: "right"}}>                             
                            <abbr title={products.rating.rate + " Estrelas"}><p style={{margin: 0, padding: 0}}>{products.rating.rate} <span className="material-symbols-outlined">hotel_class</span></p></abbr>
                            <abbr title={products.rating.count + " Avaliações"}><p style={{margin: 0, padding: 0}}>{products.rating.count} <span className="material-symbols-outlined">group</span></p></abbr>
                        </div>
                    </div>
                    
                    <button onClick={descricao} className={styles.buttonDropdown} id={`b${products.id}`}>Descrição</button>
                    <div className={styles.dropdown} id={`d${products.id}`}>
                        <p>{products.description}</p>
                    </div>                
                    
                </div>
            )}
        </main>
        </>
    )
}