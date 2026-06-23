/* slider.jsx */
import { useState, useEffect } from "react";
import styles from "./slider.module.css"

export function Slider ({images}) {
    const [currIndex, setCurrIndex] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            if (currIndex === images.length - 1) {
                setCurrIndex(0)
            } else {
                setCurrIndex(() => currIndex + 1)
            }
        }, 2000);

        return () => {
            clearInterval(timer)
        }

    }, [currIndex, images])

    return (
        <div className={styles.imgWrapper}>
            <img key={currIndex} src={images[currIndex]} className={styles.image1} />
        </div>
    )
}