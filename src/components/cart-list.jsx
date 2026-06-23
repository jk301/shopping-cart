// cart-list.jsx
import { CartItems } from "./cart-context";
import { useState } from "react";

export function CartList ({children}) {
    const [items, setItems] = useState([])

    function addToCart (item) {
        setItems((prev) => [...prev, {item, quant: 1}])
    }

    function removeFromCart (index) {
        setItems(items.filter((item, i) => i !== index))
    }

    function incItem (item, index) {
        setItems(prev => prev.map((prod, i) => {
            if (index === i) {
                const hot = {...prod}
                hot.quant = hot.quant + 1
                return hot
            } else {
                return prod
            }
        }))
    }

    function decItem (item, index) {
        setItems(prev => prev.map((prod, i) => {
            if (index === i) {
                const hot = {...prod}
                hot.quant = hot.quant - 1
                return hot
            } else {
                return prod
            }
        }).filter((prod) => prod.quant > 0 ))
    }

    function changeQuant (input, index) {
        setItems(prev => prev.map((prod, i) => {
            if (index === i) {
                const hot = {...prod}
                hot.quant = input
                return hot
            } else {
                return prod
            }
        }).filter((prod) => prod.quant > 0 ))
    }

    return (
        <CartItems.Provider 
            value={{items, addToCart, removeFromCart, incItem, decItem, changeQuant}}
        >
            {children} 
        </CartItems.Provider>
    )
}