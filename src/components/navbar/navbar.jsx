// navbar.jsx
import { Link } from "react-router";
import styles from "./navbar.module.css"
import cartIcon from "./../../assets/shopping_cart.svg"

export function NavBar () {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.title}>Placeholder</h1>
            <div className={styles.navContainer}>
                <Link to="/" className={styles.navLinks}>Home</Link>
                <Link to="/shop" className={styles.navLinks}>Shop</Link>
                <Link to="/cart"><img src={cartIcon} className={styles.navCart} alt="" /></Link>
            </div>
        </div>
    )
}