// navbar.jsx
import { NavLink } from "react-router";
import styles from "./navbar.module.css"
import cartIcon from "./../../assets/shopping_cart.svg"
import cartIconGold from "./../../assets/shopping_cart_gold.svg"

export function NavBar () {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>The Shop</h1>
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

            </nav>
        </div>
    )
}