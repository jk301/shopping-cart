// shop.jsx
import { useContext } from "react"
import { Products } from "../../components/product-context"
import { CartItems } from "../../components/cart-context"
import styles from "./shop.module.css"
import { ProductCard } from "../../components/product-card/product-card"

export function Shop () {
    const data = useContext(Products)
    const cart = useContext(CartItems)

    if (!data) {
        return (
            <h1 className={styles.first}>The shop is empty</h1>
        )
    }

    return (
        <div className={styles.shopWrapper}>
            <h1 className={styles.head}>Products</h1>
            <div className={styles.productContainer}>
                {data.map((dataItem) => {
                    const diff = cart.items.some((cardEntry) => cardEntry.item.id === dataItem.id)
                    return <ProductCard
                                key={dataItem.id} 
                                item={dataItem} 
                                cart={diff} 
                                index={cart.items.findIndex(item => item.item.id === dataItem.id)}
                            />
                })}
            </div>
        </div>
    )
}

// const cart = useContext(CartItems)

// {data.map(dataItem => (
//     cart.items.some((cardEntry) => cardEntry.item.id === dataItem.id)
// ))}