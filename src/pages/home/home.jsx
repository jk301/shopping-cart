// home.jsx
import { Link } from "react-router"
import styles from "./home.module.css"
import { useContext } from "react"
import { Products } from "../../components/product-context"
import { Slider } from "../../components/slider/slider"

export function Home () {
    const data = useContext(Products)
    let imgArr = data.map(item => item.image)
    return (
        <div className={styles.home}>
            <div className={styles.hero}>
                <h1>This is The mid-mall</h1>
                <p>this is some text thats suppose to convince you to click on shop</p>
                <Link to="/shop" className={styles.shopButton}>Shop Now</Link>
            </div>
            <div className={styles.slides}>
                <Link to="/shop"> <Slider images={imgArr}/> </Link>
            </div>
        </div>
    )
}