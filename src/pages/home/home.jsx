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
            <div className={styles.heroWrap}>

                <div className={styles.hero}>
                    <h1>This is The mid-mall</h1>
                    <p>this is some text thats suppose to convince you to click on shop</p>
                    <Link to="/shop" className={styles.shopButton}>Shop Now</Link>
                </div>
            
                <div className={styles.slides}>
                    <Link className={styles.aaahh} to="/shop"> <Slider images={imgArr}/> </Link>
                </div>

            </div>

            <div className={styles.homeContent}>
                <h1>Some words</h1>
                <div className={styles.clothing}>
                    <p>Honestly i thought this would be done in a day or two but it just kept going. I had to google a lot of stuff the slide thing was annoying to do. The routing thing tooks some time.</p>
                    <p>I still haven't done the cart section, and right now i don't care if it looks good or not, i just want to get this done. I'll update this along</p>
                </div>
            </div>
        </div>
    )
}