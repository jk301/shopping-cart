// cart.jsx
import { Link } from "react-router";

export function Cart () {
    return (
        <>
            <h1>This is cart</h1>
            <Link to="/">Link to home ?</Link>
            <Link to="/shop">Link to shop ?</Link>
        </>
    )
}