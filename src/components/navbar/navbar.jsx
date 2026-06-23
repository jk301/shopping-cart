// navbar.jsx
import { NavLink } from "react-router";
import styles from "./navbar.module.css"
import cartIcon from "./../../assets/shopping_cart.svg"
import cartIconGold from "./../../assets/shopping_cart_gold.svg"
import { useContext } from "react";
import { CartItems } from "../cart-context";

export function NavBar () {
    const cartWork = useContext(CartItems)
    const cartTotal = cartWork.items.reduce((accu, item) => {
        return accu + item.quant
    }, 0)
    console.log("Cart total : " + cartTotal)
    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>Mid-mall`</h1>
            <nav>
                <NavLink 
                    to="/" 
                    className={({isActive}) => 
                        isActive 
                            ? `${styles.activeLink} ${styles.navLinks}` 
                            : styles.navLinks
                    }
                >
                    Home
                </NavLink>

                <NavLink 
                    to="/shop" 
                    className={({isActive}) => 
                        isActive 
                            ? `${styles.activeLink} ${styles.navLinks}` 
                            : styles.navLinks
                    }
                >
                    Shop
                </NavLink>

                <div className={styles.cartWrap}>
                    <NavLink 
                        to="/cart"
                        className={({isActive}) => 
                            isActive 
                                ? `${styles.activeLink} ${styles.navCartCont}`
                                : styles.navCartCont
                        }
                    >
                        {({isActive}) => (
                            isActive 
                                ? <img src={cartIconGold} className={styles.navCart} alt="" />
                                : <img src={cartIcon} className={styles.navCart} alt="" />
                        )}
                    </NavLink>
                    {cartTotal > 0 && <p className={styles.cartWrapBadge}>{cartTotal}</p>}
                </div>

            </nav>
        </div>
    )
}