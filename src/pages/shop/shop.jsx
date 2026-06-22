// shop.jsx
import { useContext } from "react"
import { Products } from "../../components/product-context"
import styles from "./shop.module.css"
import { ProductCard } from "../../components/product-card/product-card"

export function Shop () {
    const data = useContext(Products)



    return (
        <div className={styles.shopWrapper}>
            <h1 className={styles.head}>Products</h1>
            <div className={styles.productContainer}>
                {data.map(item => (
                    <ProductCard item={item} />
                ))}
            </div>
        </div>
    )
}