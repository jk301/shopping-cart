// product-card.jsx
import styles from "./product-card.module.css"

export function ProductCard ({item, isCheckout = false}) {
    return (
            !isCheckout 
            ?   <div className={styles.productCard} key={item.id}>
                    <img src={item.image} className={styles.productImg}  alt={item.title} />
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.price}>${item.price}</p>
                </div>

            :   <div className={styles.productCardVer} key={item.id}>
                    <img src={item.image} className={styles.productImgVer}  alt={item.title} />
                    <h3 className={styles.titleVer}>{item.title}</h3>
                    <p className={styles.priceVer}>${item.price}</p>
                </div>
    )
}