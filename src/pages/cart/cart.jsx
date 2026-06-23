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
    if (cartData.items.length < 1) {
        return (
            <h1 className={styles.first}>Cart is empty</h1>
        )
    }
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
                        <div className={styles.sumDetail}>
                            <h3>Shipping </h3>
                            <p>Free yay!</p>
                        </div>
                        <div className={styles.sumDetail}>
                            <h3>Discounts? </h3>
                            <p>0</p>
                        </div>
                        <div className={styles.sumDetail}>
                            <h3>Tax </h3>
                            <p>0</p>
                        </div>
                        <div className={styles.sumDetail}>
                            <input type="text" placeholder="Have Vouchers ? does nothing btw"/>
                            <button className={styles.cartButton}>Add</button>
                        </div>
                        <div className={styles.sumTotal}>
                            <h2>Total </h2>
                            <h3>{subTotal}</h3>
                        </div>
                        <button className={styles.cartButton}>Checkout</button>

                    </div>


                    <div className={styles.paymentOption}>
                        <h2>Payment Options</h2>
                        <div className={styles.paymentCont}>
                            <label className={styles.paymentCard}>
                                <h3>Credit card</h3>
                                <input type="radio" name="payment" value="credit" defaultChecked />
                            </label>

                            {/* Debit Card Option */}
                            <label className={styles.paymentCard}>
                                <h3>Debit card</h3>
                                <input type="radio" name="payment" value="debit" />
                            </label>

                            {/* Cash on Delivery Option */}
                            <label className={styles.paymentCard}>
                                <h3>Cash on Delivery</h3>
                                <input type="radio" name="payment" value="cash" />
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}