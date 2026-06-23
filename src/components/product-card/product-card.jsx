// product-card.jsx
import styles from "./product-card.module.css"
import add from "./../../assets/add.svg"
import remove from "./../../assets/remove.svg"
import { CartItems } from "../cart-context"
import { useContext, useEffect, useState } from "react"

// import { useContext } from "react";

export function ProductCard ({item, isCheckout = false, cart = false, index}) {
    const cartF = useContext(CartItems)
    const cartInQuant = cartF.items[index]?.quant

    const [cartQuant, setCartQuant] = useState(cartF.items[index]?.quant ?? 0)

    useEffect(() => {
        if (cartInQuant !== undefined) {
            setCartQuant(cartInQuant)
        }
        // cartF.changeQuant(Number(cartQuant), index)
    },[cartInQuant])

    function handleBlur () {
        setCartQuant(cartInQuant)
    } 

    function handleInputEnter (e) {
        if (e.key === "Enter") {
            cartF.changeQuant(Number(e.target.value), index)
            e.target.blur()
        } else if (e.key === "Escape") {
            e.target.blur()
        }
    }

    return (
        !isCheckout 
        ?   <div className={styles.productCard} key={item.id}>
                <img src={item.image} className={styles.productImg}  alt={item.title} />
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.price}>${item.price}</p>
                { cart 
                    ?  <>
                            <div className={styles.cartDiv}>
                                <img 
                                    src={remove} 
                                    onClick={() => cartF.decItem(item, index)} 
                                    className={styles.cartDivBut}
                                />

                                <input 
                                    type="number" 
                                    value={cartQuant} 
                                    onChange={(e) => setCartQuant(e.target.value)}
                                    onKeyDown={(e) => handleInputEnter(e)}
                                    onBlur={handleBlur}
                                    // onChange={(e) => cartF.changeQuant(Number(e.target.value), index)}
                                    className={styles.cartDivInp}
                                />

                                <img 
                                    src={add}
                                    onClick={() => cartF.incItem(item, index)} 
                                    className={styles.cartDivBut}
                                />
                            </div>

                            <button 
                                className={styles.cartButton} 
                                onClick={() => cartF.removeFromCart(index)}
                                >
                                Remove from Cart
                            </button>

                        </>
                    : <button 
                        className={styles.cartButton} 
                        onClick={() => cartF.addToCart(item)}
                        >
                        Add to Cart
                      </button> 
                }
            </div>
        // vertical!!
        :   <div className={styles.productCardVer} key={item.id}>
                <img src={item.image} className={styles.productImgVer}  alt={item.title} />
                <div className={styles.text}>
                    <h3 className={styles.titleVer}>{item.title}</h3>
                    <p className={styles.priceVer}>${item.price}</p>
                </div>
                <div className={styles.updater}>
                    <div className={styles.cartDiv}>
                        <img 
                            src={remove} 
                            onClick={() => cartF.decItem(item, index)} 
                            className={styles.cartDivBut}
                        />

                        <input 
                            type="number" 
                            value={cartQuant} 
                            onChange={(e) => setCartQuant(e.target.value)}
                            onKeyDown={(e) => handleInputEnter(e)}
                            onBlur={handleBlur}
                            // onChange={(e) => cartF.changeQuant(Number(e.target.value), index)}
                            className={styles.cartDivInp}
                        />

                        <img 
                            src={add}
                            onClick={() => cartF.incItem(item, index)} 
                            className={styles.cartDivBut}
                        />
                    </div>

                    <button 
                        className={styles.cartButton}
                        onClick={() => cartF.removeFromCart(index)}
                        >
                        Remove
                    </button>

                </div>

            </div>
    )
}
