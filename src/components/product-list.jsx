// product-list.jsx
import { Products } from "./product-context";
import { useFetch } from "./fetch";

export function ProductList ({ children }) {
    const url = "https://fakestoreapi.com/products"
    const {data, loading, error} = useFetch(url)

    if (loading) {
        return "loading"
    } else if (error) {
        return `Error: ${error}`
    }

    return (
        <Products.Provider value={data}> {children} </Products.Provider>
    )
}