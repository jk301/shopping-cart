// cart.jsx
import styles from "./cart.module.css"
import { CartItems } from "../../components/cart-context"
import { useContext } from "react"
import { ProductCard } from "../../components/product-card/product-card"

export function Cart () {
    const cartData = useContext(CartItems)
    const subTotal = cartData.items.reduce((accu, obj) => {
        const item = obj.item.price * obj.quant
        return accu + item
    }, 0)
    return (
        <div className={styles.cart}>
            <h1>Your Cart</h1>
            <div className={styles.tabContainer}>
                <div className={styles.cardWrap}>
                    <div className={styles.cardtit}>
                        Cart Items
                    </div>
                    <div className={styles.cartCards}>

                        {
                            cartData.items.map((item, index) => (
                                <ProductCard 
                                    key={index} 
                                    item={item.item} 
                                    isCheckout={true} 
                                    cart={true}
                                    index={index}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className={styles.otherDetail}>
                    <div className={styles.summary}>
                        <h2>Summary</h2>
                        <div className={styles.sumDetail}>
                            <h3>Subtotal </h3>
                            <p>{subTotal.toFixed(2)}</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}